/**
 * Cart Store
 *
 */

const EventEmitter = require('events');

import AppDispatcher from 'dispatcher/AppDispatcher';
import AppConstants from 'actions/AppConstants.js';

let _products = {};
let _cartVisible = false;

/**
 * Change cart visibility
 * @param cartVisible
 */
function setCartVisible(cartVisible) {
    _cartVisible = cartVisible;
}

const CartStore = {
    getCartVisible: function() {
        return _cartVisible;
    }
};

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

    // todo: event wrapper
    EventEmitter.emit('change');

    return true;
});

module.exports = CartStore;
