/**
 * Store
 *
 */

import './store.scss';

const AppDispatcher = require('flux').Dispatcher;

import Product from 'components/product/product';
import AppActions from 'actions/AppActions';

module.exports = React.createClass({

    displayName: 'Store',

    propTypes: {
        products: React.PropTypes.object
    },

    getInitialState: function() {
        return {

        };
    },

    render: function() {
        const products = this.props.products;

        return (
            <div className="store">
                {Object.keys(products).map(function(product) {
                    return (
                        <Product
                            img={products[product].img}
                            key={product}
                            name={products[product].name}
                            />
                    );
                })}

            </div>
        );
    }
});
