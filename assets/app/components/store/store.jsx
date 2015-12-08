/**
 * Store
 *
 */

import './store.scss';

import Product from 'components/product/product';


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
                            id={product}
                            img={products[product].img}
                            key={product}
                            name={products[product].name}
                            quant={products[product].quant}
                            />
                    );
                })}
            </div>
        );
    }
});
