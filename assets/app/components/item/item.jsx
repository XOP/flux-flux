/**
 * Item
 *
 */

import './item.scss';

import Button from 'components/button/button';

module.exports = React.createClass({

    displayName: 'Item',

    propTypes: {
        img: React.PropTypes.string,
        key: React.PropTypes.number,
        name: React.PropTypes.string
    },

    getInitialState: function() {
        return {
            val: 1
        };
    },

    render: function() {
        return (
            <div
                className="item"
                key={this.props.key}
                >
                <span className="item_name">{this.props.name}</span>
                <span className="item_quant">{this.state.val}</span>
                <span className="item_del">
                    <Button
                        text="–"
                        type="mini"
                        />
                </span>
            </div>
        );
    }

});
