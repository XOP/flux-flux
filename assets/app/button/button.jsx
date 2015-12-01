import './button.scss';

module.exports = React.createClass({

    propTypes: {
        text: React.PropTypes.string,
        key: React.PropTypes.number
    },

    getInitialState: function() {
        return {};
    },

    render: function() {
        return (
            <button className="button" key={this.props.key}>
                {this.props.text}
            </button>
        );
    }

});
