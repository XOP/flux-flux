/**
 * Product Store
 *
 */

import EventEmitter from 'events';
import extend from 'lodash/object/extend';

import idGenerator from 'idGenerator';

import AppDispatcher from 'dispatcher/AppDispatcher';
import AppConstants from 'actions/AppConstants.js';


let _products = {
    1: {
        id: idGenerator(),
        name: 'Green Beer',
        img: 'http://placehold.it/200/cc9900/ffffff'
    },
    2: {
        id: idGenerator(),
        name: 'Dark Soul Stout',
        img: 'http://placehold.it/200/aa6600/ffffff'
    }
};

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

            // todo: load data
            break;

        default:
            return true;
    }

    ProductStore.emitChange();

    return true;
});

module.exports = ProductStore;
