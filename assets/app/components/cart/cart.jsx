/**
 * Cart
 *
 */

import './cart.scss';

import Item from 'components/item/item';
import AppActions from 'actions/AppActions';


module.exports = React.createClass({

    displayName: 'Cart',

    propTypes: {
        isVisible: React.PropTypes.bool,
        items: React.PropTypes.object
    },

    getInitialState: function() {
        return {

        };
    },

    hideCart: function() {
        AppActions.updateCartVisible(false);
    },

    render: function() {
        const items = this.props.items;

        return (
            <div
                className={'cart' + (this.props.isVisible ? ' __active' : '')}
                onClick={this.hideCart}
                >
                {Object.keys(items).map(function(item) {
                    return (
                        <Item
                            key={item}
                            name={items[item].name}
                            quant={items[item].quant}
                            />
                    );
                })}
            </div>
        );
    }
});
