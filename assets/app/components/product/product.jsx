/**
 * Product
 *
 */

import './product.scss';

import Button from 'components/button/button';
import AppActions from 'actions/AppActions';


module.exports = React.createClass({

    displayName: 'Product',

    propTypes: {
        id: React.PropTypes.string,
        img: React.PropTypes.string,
        key: React.PropTypes.number,
        name: React.PropTypes.string,
        quant: React.PropTypes.number
    },

    getInitialState: function() {
        return {
        };
    },

    addToCart: function() {
        const _id = this.props.id;
        const _item = {
            name: this.props.name
        };

        // add product to cart
        AppActions.addToCart(_id, _item);

        // show cart
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
                        src={this.props.img}
                        />
                </div>
                <div className="product_data">
                    <span className="product_name">
                        {this.props.name}
                    </span>
                    <span className="product_quant">{this.props.quant ? this.props.quant : ''}</span>
                    <span className="product_add">
                        <Button
                            label="+"
                            onClick={this.addToCart}
                            type="mini"
                            />
                    </span>
                </div>
            </div>
        );
    }
});
