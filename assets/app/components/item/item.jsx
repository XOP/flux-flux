/**
 * Item
 *
 */

import './item.scss';

import Button from 'components/button/button';
import AppActions from 'actions/AppActions';


module.exports = React.createClass({

    displayName: 'Item',

    propTypes: {
        id: React.PropTypes.string,
        key: React.PropTypes.number,
        name: React.PropTypes.string,
        quant: React.PropTypes.number
    },

    getInitialState: function() {
        return {};
    },

    removeFromCart: function() {
        AppActions.removeFromCart(this.props.id);
    },

    render: function() {
        return (
            <div
                className="item"
                key={this.props.key}
                >
                <span className="item_name">{this.props.name}</span>
                <span className="item_quant">{this.props.quant}</span>
                <span className="item_del">
                    <Button
                        label="–"
                        onClick={this.removeFromCart}
                        type="mini"
                        />
                </span>
            </div>
        );
    }

});
