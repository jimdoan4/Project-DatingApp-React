import React, { Component } from 'react';
import UserLog from './UserLog';
import GaySignUp from './GaySignUp';
import FemaleSignUp from './FemaleSignUp';
import MaleSignUp from './MaleSignUp';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import Weather from './Weather';
import InputField from './InputField';

export default class MainSignUpPage extends Component {
	state = {
		userId: this.props.match.params.userId,
		maleId: this.props.match.params.maleId,
		gaymaleId: this.props.match.params.gaymaleId,
		lesbianId: this.props.match.params.lesbianId
	};

	render() {
		return (
			<div className="text-center" style={{ marginBottom: '524px', position: 'block' }}>
				<h1 style={{ marginTop: '43px' }}>Choose Your Preference</h1>
				<Container>
					<Row>
						<Col className="text-center rockstar">
							<UserLog userId={this.state.userId} />
						</Col>

						<Col className="text-center rockstar">
							<MaleSignUp maleId={this.state.maleId} />
						</Col>

						<Col className="text-center rockstar">
							<FemaleSignUp lesbianId={this.state.lesbianId} />
						</Col>

						<Col className="text-center rockstar">
							<GaySignUp gaymaleId={this.state.gaymaleId} />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
