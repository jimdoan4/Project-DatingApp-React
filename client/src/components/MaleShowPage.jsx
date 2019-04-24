import React, { Component } from 'react';
import MalePage from './MalePage';
import MeventPage from './MeventPage';
import McommentPage from './McommentPage';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default class MaleShowPage extends Component {
	state = {
		maleId: this.props.match.params.maleId
	};

	render() {
		return (
			<div className="text-center">
				<Container> 
  		<Row>
    <Col><MeventPage maleId={this.state.maleId} /></Col>
    <Col><MalePage maleId={this.state.maleId} /></Col>
    <Col><McommentPage maleId={this.state.maleId} /></Col>
  </Row>
</Container>
			</div>
		);
	}
}
