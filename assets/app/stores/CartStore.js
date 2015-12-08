/**
 * Cart Store
 *
 */

import EventEmitter from 'events';
import extend from 'lodash/object/extend';

import AppDispatcher from 'dispatcher/AppDispatcher';
import AppConstants from 'actions/AppConstants.js';


let _items = {};
let _cartVisible = false;

/**
 * Change cart visibility
 * @param cartVisible
 */
function setCartVisible(cartVisible) {
    _cartVisible = cartVisible;
}

/**
 * Add item to cart or update quantity
 * @param id
 * @param item
 */
function addItem(id, item) {
    if (id in _items) {
        _items[id].quant += 1;
    } else {
        _items[id] = item;
    }
}

const CartStore = extend({}, EventEmitter.prototype, {

    emitChange() {
        this.emit('change');
    },

    addChangeListener: function(cb) {
        this.on('change', cb);
    },

    removeChangeListener: function(cb) {
        this.removeListener('change', cb);
    },

    getCartItems: function() {
        return _items;
    },

    getCartVisible: function() {
        return _cartVisible;
    }
});

AppDispatcher.register(function(payload) {
    const action = payload.action;

    switch (action.type) {
        case AppConstants.CART_ADD:
            addItem(action.id, action.item);
            break;

        case AppConstants.CART_VISIBLE:
            setCartVisible(action.cartVisible);
            break;

        default:
            return true;
    }

    CartStore.emitChange();

    return true;
});

module.exports = CartStore;
