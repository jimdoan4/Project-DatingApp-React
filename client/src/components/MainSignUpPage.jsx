import React, { Component } from 'react';
import UserLog from './UserLog';
import MaleSignUp from './MaleSignUp';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';



export default class MainSignUpPage extends Component {
	state = {
		userId: this.props.match.params.userId,
		maleId: this.props.match.params.maleId
	};

	render() {
		return (
			<div className="text-center">
				<h1 style={{ marginTop: '43px' }}>Choose Your Preference</h1>
				<Container>
					<Row>
						<Col className="text-center">
							<UserLog userId={this.state.userId} />
						</Col>

						<Col className="text-center">
							<MaleSignUp maleId={this.state.maleId} />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
