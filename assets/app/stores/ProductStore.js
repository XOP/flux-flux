/**
 * Product Store
 *
 */

const EventEmitter = require('events');

import AppDispatcher from 'dispatcher/AppDispatcher';
import AppConstants from 'actions/AppConstants.js';

const ProductStore = {};

AppDispatcher.register(function(payload) {
    const action = payload.action;

    switch (action.type) {
        case AppConstants.FETCH_DATA:

            // todo: load data
            break;

        default:
            return true;
    }

    return true;
});

module.exports = ProductStore;
