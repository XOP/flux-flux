/**
 * Application
 *
 */

import 'normalize.css/normalize.css';
import './app.scss';

import Store from 'components/store/store';
import ProductStore from 'stores/ProductStore';

import Cart from 'components/cart/cart';
import CartStore from 'stores/CartStore';


/**
 * Application state wrapper
 * @returns Object
 */
function getAppState() {
    return {
        products: ProductStore.getProducts(),
        items: CartStore.getCartItems(),
        cartVisible: CartStore.getCartVisible()
    };
}

module.exports = React.createClass({

    displayName: 'Application',

    getInitialState: function() {
        return getAppState();
    },

    componentDidMount: function() {
        ProductStore.addChangeListener(this._onChange);
        CartStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        ProductStore.removeChangeListener(this._onChange);
        CartStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState(getAppState());
    },

    render: function() {
        return (
            <div className="main">
                <Store
                    products={this.state.products}
                    />
                <Cart
                    isVisible={this.state.cartVisible}
                    items={this.state.items}
                    />
            </div>
        );
    }
});
