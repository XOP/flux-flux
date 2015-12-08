/**
 * Application [flux] dispatcher
 *
 */

import {Dispatcher} from 'flux';


const AppDispatcher = new Dispatcher();

AppDispatcher.handleAction = function(action) {
    this.dispatch({
        source: 'VIEW_ACTION',
        action: action
    });
};

module.exports = AppDispatcher;
