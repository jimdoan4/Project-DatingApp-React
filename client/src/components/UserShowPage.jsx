import React, { Component } from 'react';
import UserPage from './UserPage';
import SingleEvent from './SingleEvent';
import SingleComment from './SingleComment';


export default class UserShowPage extends Component {
	state = {
		userId: this.props.match.params.userId
	};

	render() {
		return (
			<div className="row">
				<div className="col s12 m4 l3" style= {{ marginTop: '50px'}}>
					<UserPage userId={this.state.userId} />
				</div>
			</div>
		);
	}
}


