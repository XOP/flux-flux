/**
 * Button
 *
 */

import './button.scss';

module.exports = React.createClass({

    displayName: 'Button',

    propTypes: {
        key: React.PropTypes.number,
        text: React.PropTypes.string,
        type: React.PropTypes.string
    },

    getInitialState: function() {
        return {};
    },

    render: function() {
        let klass = 'button';

        if (this.props.type) {
            klass += ' ' + klass + '__';
            klass += this.props.type;
        }

        return (
            <button
                className={klass}
                key={this.props.key}
                >
                {this.props.text}
            </button>
        );
    }

});
