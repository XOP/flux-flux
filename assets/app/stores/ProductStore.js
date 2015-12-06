/**
 * Product Store
 *
 */

const EventEmitter = require('events');

import extend from 'lodash/object/extend';

import AppDispatcher from 'dispatcher/AppDispatcher';
import AppConstants from 'actions/AppConstants.js';


const ProductStore = extend({}, EventEmitter.prototype, {

    emitChange() {
        this.emit('change');
    },

    addChangeListener: function(cb) {
        this.on('change', cb);
    },

    removeChangeListener: function(cb) {
        this.removeListener('change', cb);
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
