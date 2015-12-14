/**
 * Product Store
 *
 */

import EventEmitter from 'events';
import extend from 'lodash/object/extend';

import idGenerator from 'utils/idGenerator';

import AppDispatcher from 'dispatcher/AppDispatcher';
import AppConstants from 'actions/AppConstants.js';


let _products = {};

/**
 * Fetch mock data
 */
function fetchData() {
    // todo - mock data fetch

    _products[idGenerator()] = {
        name: 'Green Beer',
        img: 'http://placehold.it/200/cc9900/ffffff'
    };

    _products[idGenerator()] = {
        name: 'Dark Soul Stout',
        img: 'http://placehold.it/200/aa6600/ffffff'
    };
}

/**
 * Plus product quantity
 * @param id
 * @returns {boolean}
 */
function addItem(id) {
    if (id in _products) {
        if (_products[id].quant) {
            _products[id].quant += 1;
        } else {
            _products[id].quant = 1;
        }
    } else {
        return false;
    }
}

/**
 * Minus product quantity
 * @param id
 * @returns {boolean}
 */
function removeItem(id) {
    if (id in _products) {
        if (_products[id].quant === 0) {
            return;
        }
        _products[id].quant -= 1;
    } else {
        return false;
    }
}

const ProductStore = extend({}, EventEmitter.prototype, {

    emitChange() {
        this.emit('change');
    },

    addChangeListener: function(cb) {
        this.on('change', cb);
    },

    removeChangeListener: function(cb) {
        this.removeListener('change', cb);
    },

    getProducts: function() {
        return _products;
    }
});

AppDispatcher.register(function(payload) {
    const action = payload.action;

    switch (action.type) {
        case AppConstants.FETCH_DATA:
            fetchData();
            break;

        case AppConstants.CART_ADD:
            addItem(action.id);
            break;

        case AppConstants.CART_REMOVE:
            removeItem(action.id);
            break;

        default:
            return true;
    }

    ProductStore.emitChange();

    return true;
});

module.exports = ProductStore;
