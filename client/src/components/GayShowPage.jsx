import React, { Component } from 'react';
import GaymalePage from './GaymalePage';
// import CommentPage from './CommentPage';
// import EventPage from './EventPage';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
export default class GayShowPage extends Component {
	state = {
		gaymaleId: this.props.match.params.gaymaleId
	};

	render() {
		return (
			<div className="container" style={{ marginTop: '10px' }}>
				<Container>
					<Row className="justify-content-md-center text-center">
						<Col md="auto">
							<GaymalePage gaymaleId={this.state.gaymaleId} />
						</Col>
					</Row>
					{/* <div style={{ marginLeft: '60px', marginTop: '30px' }} className=".col-md-4">
						<EventPage userId={this.state.userId} />

						<div style={{ marginTop: '30px', marginBottom: '160px' }} className=".col-md-4">
							<CommentPage userId={this.state.userId} /> */}
					{/* </div> */}
					{/* </div> */}
				</Container>
			</div>
		);
	}
}
