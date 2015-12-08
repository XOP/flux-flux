/**
 * Init
 *
 */

import * as utils from 'xop-module-utils';

import Application from 'app/app';
import AppActions from 'actions/AppActions';

// load inital product data
AppActions.fetchProducts();

// render application
ReactDOM.render(
    <Application />,
    utils.find('#app')
);
