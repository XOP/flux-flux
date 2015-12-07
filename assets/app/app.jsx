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


// fixme demo objects
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

// fixme demo objects
const _items = {
    1: {
        name: 'Green Beer'
    }
};

/**
 * Application state wrapper
 * @returns Object
 */
function getAppState() {
    return {
        products: _products,
        items: _items,
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
                    items={this.state.items}
                    isVisible={this.state.cartVisible}
                    />
            </div>
        );
    }
});
