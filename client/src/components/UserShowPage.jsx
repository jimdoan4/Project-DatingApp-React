import React, { Component } from 'react';
import UserPage from './UserPage';
import CommentPage from './CommentPage';
import EventPage from './EventPage';

export default class UserShowPage extends Component {
	state = {
		userId: this.props.match.params.userId
	};

	render() {
		return (
			<div className="container" style={{ marginTop: '10px' }}>
				<div className="row">
					<div
						style={{
							marginLeft: '70px'
						}}
						className="row-sm-5 row-md-6 text-center"
					>
						<UserPage userId={this.state.userId} />
					</div>
					<div style={{ marginLeft: '60px', marginTop: '40px' }} className=".col-md-4">
						<EventPage userId={this.state.userId} />

						<div style={{ marginTop: '40px' }} className=".col-md-4">
							<CommentPage userId={this.state.userId} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
