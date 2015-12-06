/**
 * Product
 *
 */

import './product.scss';

const AppDispatcher = require('flux').Dispatcher;

import Button from 'components/button/button';
import AppActions from 'actions/AppActions';


module.exports = React.createClass({

    displayName: 'Product',

    propTypes: {
        id: React.PropTypes.string,
        img: React.PropTypes.string,
        key: React.PropTypes.number,
        name: React.PropTypes.string
    },

    getInitialState: function() {
        return {
            quant: 0
        };
    },


    // fixme: test flux
    showCart: function() {
        AppActions.updateCartVisible(true);
    },
    hideCart: function() {
        AppActions.updateCartVisible(false);
    },


    addToCart: function() {
        // todo: add to cart
        // const id = this.props.id;

        // AppActions.addToCart(id);
        AppActions.updateCartVisible(true);
    },

    render: function() {
        return (
            <div
                className="product"
                key={this.props.key}
                >
                <div className="product_img">
                    <img
                        alt={this.props.name}
                        className="product_pic"
                        onClick={this.hideCart} // fixme test
                        src={this.props.img}
                        />
                </div>
                <div className="product_data">
                    <span className="product_name">
                        {this.props.name}
                    </span>
                    <span className="product_quant">{this.state.quant}</span>
                    <span className="product_add">
                        <Button
                            onClick={this.showCart} // fixme test
                            text="+"
                            type="mini"
                            />
                    </span>
                </div>
            </div>
        );
    }
});
