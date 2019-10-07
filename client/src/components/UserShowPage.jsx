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
			<div className="text-center">
			
	<Container> 
	<Row>
	<Col><EventPage userId={this.state.userId} /></Col>
    <Col><CommentPage userId={this.state.userId} /></Col>


  </Row>
  <Row><UserPage className="text-center" userId={this.state.userId} /></Row>
  </Container>
			
			</div>
		);
	}
}

