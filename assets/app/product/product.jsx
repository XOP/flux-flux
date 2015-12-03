/**
 * Product
 *
 */

import './product.scss';

import Button from 'button/button';

module.exports = React.createClass({

    displayName: 'Product',

    propTypes: {
        img: React.PropTypes.string,
        key: React.PropTypes.number,
        name: React.PropTypes.string
    },

    getInitialState: function() {
        return {
            quant: 0
        };
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
                    <span className="product_quant">{this.state.quant}</span>
                    <span className="product_add">
                        <Button
                            text="+"
                            type="mini"
                            />
                    </span>
                </div>
            </div>
        );
    }

});
