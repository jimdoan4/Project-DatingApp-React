import React, { Component } from 'react';
import UserPage from './UserPage';
import CommentPage from './CommentPage';
import EventPage from './EventPage';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

export default class UserShowPage extends Component {
	state = {
		userId: this.props.match.params.userId
	};

	render() {
		return (
			<div className="row text-center">
				<div
					style={{
						marginLeft: '90px',
						color: 'black'
					}}
					className="row-sm-5 row-md-6 text-center"
				>
					<UserPage userId={this.state.userId} />
				</div>

				<div style={{ marginLeft: '60px', marginTop: '30px' }} className=".col-md-8 text-center">
					<EventPage userId={this.state.userId} />

					<div style={{ marginTop: '30px', marginBottom: '160px' }} className=".col-md-8 text-center">
						<CommentPage userId={this.state.userId} />
					</div>
				</div>
			</div>
		);
	}
}
