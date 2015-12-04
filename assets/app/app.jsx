/**
 * Application
 *
 */

import 'normalize.css/normalize.css';
import './app.scss';

import * as utils from 'xop-module-utils';

import Store from 'components/store/store';
import ProductStore from 'stores/ProductStore';

import Cart from 'components/cart/cart';
import CartStore from 'stores/CartStore';

const _products = {
    1: {
        name: 'Green Beer',
        img: 'http://placehold.it/200/cc9900/ffffff'
    },
    2: {
        name: 'Position Fixed',
        img: 'http://placehold.it/200/aa6600/ffffff'
    }
};

const _items = {
    1: {
        name: 'Green Beer'
    }
};

module.exports = function() {

    const mainContainer = utils.find('#app');

    ReactDOM.render(
        <div className="main">
            <Store
                products={_products}
                />
            <Cart
                items={_items}
                />
        </div>,

        mainContainer
    );
};
