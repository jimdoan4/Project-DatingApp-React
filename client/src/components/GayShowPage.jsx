import React, { Component } from 'react';
import GaymalePage from './GaymalePage';
import Gcomment from './Gcomment';
import Gevent from './Gevent';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default class GayShowPage extends Component {
	state = {
		gaymaleId: this.props.match.params.gaymaleId
	};

	render() {
		return (
			<div className="text-center">
			<Container> 
  		<Row>
    <Col><Gevent gaymaleId={this.state.gaymaleId} /></Col>
    <Col><GaymalePage gaymaleId={this.state.gaymaleId} /></Col>
    <Col><Gcomment gaymaleId={this.state.gaymaleId} /></Col>
  </Row>
</Container>
			</div>
		);
	}
}

