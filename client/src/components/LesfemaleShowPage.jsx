import React, { Component } from 'react';
import LesfemalePage from './LesfemalePage';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default class LesfemaleShowPage extends Component {
	state = {
		lesbianId: this.props.match.params.lesbianId
	};

	render() {
		return (
			<div className="container" style={{ marginTop: '10px' }}>
				<Container>
					<Row className="justify-content-md-center text-center">
						<Col md="auto">
							<LesfemalePage lesbianId={this.state.lesbianId} />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
