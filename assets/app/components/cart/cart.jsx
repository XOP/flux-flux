/**
 * Cart
 *
 */

import './cart.scss';

const AppDispatcher = require('flux').Dispatcher;

import Item from 'components/item/item';


module.exports = React.createClass({

    displayName: 'Cart',

    propTypes: {
        items: React.PropTypes.object,
        visible: React.PropTypes.bool
    },

    getInitialState: function() {
        return {

        };
    },

    render: function() {
        const items = this.props.items;

        return (
            <div className={'cart' + (this.props.visible ? ' __active' : '')}>
                {Object.keys(items).map(function(item) {
                    return (
                        <Item
                            key={item}
                            name={items[item].name}
                            />
                    );
                })}
            </div>
        );
    }
});
