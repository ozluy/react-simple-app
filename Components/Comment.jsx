import {ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import React from 'react';


class Comment extends React.Component {

	render() {
		return (
			<Paper>
			<ListItem>
				<Subheader>
					<div>{this.props.body}</div>
					<div>{this.props.author}</div>
				</Subheader>
				<div>
					<RaisedButton backgroundColor="#a4c639" onClick={this._handleDelete.bind(this)} label="delete comment"/>
				</div>

			</ListItem>
				</Paper>
		)
	}

	_handleDelete(event) {
		event.preventDefault();
		if(confirm(`Are you sure to delete comment "${this.props.body}"?` )){
			this.props.onDelete(this.props.comment);
		}

	}
}

module.exports = Comment;

Comment.props = {
	author: React.PropTypes.string,
	body: React.PropTypes.string
}