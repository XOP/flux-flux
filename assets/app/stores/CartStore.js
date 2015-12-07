/**
 * Cart Store
 *
 */

const EventEmitter = require('events');

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

    getCartVisible: function() {
        return _cartVisible;
    }
});

AppDispatcher.register(function(payload) {
    const action = payload.action;

    switch (action.type) {
        case AppConstants.CART_ADD:

            // todo: add to cart
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
