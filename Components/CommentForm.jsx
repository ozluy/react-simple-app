import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import React from 'react';


class CommentForm extends React.Component {

	constructor() {
		super();
		this.state = {
			charCount: 0,
			nameValue: null,
			bodyValue: null,
			warningTextForName: '',
			warningTextForMessage: ''

		}
	}

	render() {
		return (
			<Paper style={{padding:'15px', backgroundColor:'#ccc'}}>
				<form onSubmit={this._handleSubmit.bind(this)}>
					<h3> New Comment </h3>
					<TextField onChange={this._textEnterName.bind(this)} fullWidth={true}
										 floatingLabelText="Name"
										 value={this.state.nameValue}
										 hintText="Name"
										 underlineShow={false}
										 ref={(input) => this._author = input}
										 errorText={this.state.warningTextForName}
					/>
					<Divider />
					<TextField onChange={this._textEnterBody.bind(this)} onKeyUp={this._charCounter.bind(this)}
										 hintText="Comment" multiLine={true}
										 value={this.state.bodyValue}
										 underlineShow={false}
										 floatingLabelText="Message"
										 ref={(textarea) => this._body = textarea}
										 errorText={this.state.warningTextForMessage}
					/>
					<Divider />
					<br />
					<br />
					<RaisedButton type="submit" secondary={true} label="Post Comment"/>
					<br />
					<br />
					<div>{this.state.charCount} characters</div>
				</form>
			</Paper>
		)
	}

	_textEnterName(event) {
		event.preventDefault();
		let author = this._author;
		this.setState({
			nameValue: event.target.value
		})
		if (author.getValue().trim().length > 0) {
			this.setState({
				warningTextForName: ''
			});
		}
		if(author.getValue().trim().length === 0){
			this.setState({
				warningTextForName: 'This field required!'
			});
		}
	}
	_textEnterBody(event) {
		event.preventDefault();
		let body = this._body;
		this.setState({
			bodyValue: event.target.value
		})
		if (body.getValue().trim().length > 0) {
			this.setState({
				warningTextForMessage: ''
			});
		}
		if(body.getValue().trim().length === 0){
			this.setState({
				warningTextForMessage: 'This field required!'
			});
		}
	}
	_handleSubmit(event) {
		event.preventDefault();
		let author = this._author;
		let body = this._body;
		if (author.getValue().trim().length > 0 && body.getValue().trim().length > 0) {
			this.props.addComment(author.getValue(), body.getValue());
			this.setState({
				nameValue:'',
				bodyValue:''
			});
		}
		if(!author.getValue().trim().length > 0){
			this.setState({
			warningTextForName: 'This field required!'
			});
		}
		if(!body.getValue().trim().length > 0){
			this.setState({
				warningTextForMessage: 'This field required!'
			});
		}
	}


	_charCounter() {
		this.setState({
			charCount: this._body.getValue().length
		})
	}
}

module.exports = CommentForm;

CommentForm.props = {}