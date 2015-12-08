/**
 * Cart
 *
 */

import './cart.scss';

import Item from 'components/item/item';


module.exports = React.createClass({

    displayName: 'Cart',

    propTypes: {
        isVisible: React.PropTypes.bool,
        items: React.PropTypes.object
    },

    getInitialState: function() {
        return {};
    },

    render: function() {
        const items = this.props.items;

        return (
            <div className={'cart' + (this.props.isVisible ? ' __active' : '')}>
                {Object.keys(items).map(function(item) {
                    return (
                        <Item
                            id={item}
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
