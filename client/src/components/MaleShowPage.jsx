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
			<div style={{ marginTop: '10px' }}>
			<Container>
  <Row className="justify-content-md-center text-center">
    
    <Col md="auto"><MalePage maleId={this.state.maleId} /></Col>
   
  </Row>
  <Row>
    <Col className= 'text-center'><MeventPage maleId={this.state.maleId} /></Col>
    <Col className= 'text-center'>
      <McommentPage maleId={this.state.maleId} />
    </Col>
  </Row>
</Container>
			</div>
		);
	}
}
