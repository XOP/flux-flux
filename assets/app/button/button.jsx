/**
 * Button
 *
 */

import './button.scss';

module.exports = React.createClass({

    displayName: 'Button',

    propTypes: {
        key: React.PropTypes.number,
        text: React.PropTypes.string
    },

    getInitialState: function() {
        return {};
    },

    render: function() {
        return (
            <button
                className="button"
                key={this.props.key}
                >
                {this.props.text}
            </button>
        );
    }

});
