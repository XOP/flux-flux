/**
 * Application [flux] actions
 *
 */

import AppDispatcher from 'dispatcher/AppDispatcher';
import AppConstants from 'actions/AppConstants';


const AppActions = {

    // get product data
    fetchProducts: function(data) {
        AppDispatcher.handleAction({
            type: AppConstants.FETCH_DATA,
            data: data
        });
    },

    // Add item to cart
    addToCart: function(id, item) {
        AppDispatcher.handleAction({
            type: AppConstants.CART_ADD,
            id: id,
            item: item
        });
    },

    // Remove item from cart
    removeFromCart: function(id) {
        AppDispatcher.handleAction({
            type: AppConstants.CART_REMOVE,
            id: id
        });
    },

    // Update cart visibility status
    updateCartVisible: function(cartVisible) {
        AppDispatcher.handleAction({
            type: AppConstants.CART_VISIBLE,
            cartVisible: cartVisible
        });
    }
};

module.exports = AppActions;
