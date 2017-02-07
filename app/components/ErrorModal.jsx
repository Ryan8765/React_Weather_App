var React = require('react');

var ErrorModal = React.createClass({
	getDefaultProps: function() {
		return {
			title: 'Error'
		};
	},
	//this says that the prop title should be a string and the message shoudl also be a string and it is required. if someone doesn't provide it, it throws a console error in the browser console. 
	propTypes: {
		title: React.PropTypes.string,
		message: React.PropTypes.string.isRequired
	},
	componentDidMount: function() {
		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},

	render: function() {
		var {title, message} = this.props;
		return (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>{title}</h4>
				<p>{message}</p>
				<p>
					<button className="button hollow data-close" data-close="">
						OK
					</button>
				</p>
			</div>
		);

	}


});


module.exports = ErrorModal;