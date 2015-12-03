/**
 * Application
 *
 */

import 'normalize.css/normalize.css';
import './app.scss';

import * as utils from 'xop-module-utils';
import Product from 'product/product';
import Item from 'item/item';

module.exports = function() {

    const mainContainer = utils.find('#app');

    ReactDOM.render(
        <div className="main">
            <div className="store">
                <Product
                    img="http://placehold.it/200/cc9900/ffffff"
                    name="Tato stout"
                    />
                <Product
                    img="http://placehold.it/200/aa6600/ffffff"
                    name="Squirell lager"
                    />
            </div>
            <div className="cart">
                <Item name="Tato stout" />
            </div>
        </div>,

        mainContainer
    );
};
