import React, { Component } from 'react';
import UserPage from './UserPage';
import CommentPage from './CommentPage';
import EventPage from './EventPage';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default class UserShowPage extends Component {
	state = {
		userId: this.props.match.params.userId
	};

	render() {
		return (
			<div style={{ marginTop: '10px' }}>
			<Container>
  <Row className="justify-content-md-center text-center">
    
    <Col md="auto"><UserPage userId={this.state.userId} /></Col>
   
  </Row>
  <Row>
    <Col className= 'text-center'><EventPage userId={this.state.userId} /></Col>
    {/* <Col md="auto">Variable width content</Col> */}
    <Col className= 'text-center'>
      <CommentPage userId={this.state.userId} />
    </Col>
  </Row>
</Container>
				{/* <div className="row">
					<div
						style={{
							marginLeft: '70px',
							color: 'black'
						}}
						className="row-sm-5 row-md-6 text-center"
					>
						<UserPage userId={this.state.userId} />
					</div>
					<div style={{ marginLeft: '60px', marginTop: '30px' }} className=".col-md-4">
						<EventPage userId={this.state.userId} />

						<div style={{ marginTop: '30px', marginBottom: '160px' }} className=".col-md-4">
							<CommentPage userId={this.state.userId} />
						</div>
					</div>
				</div> */}
			</div>
		);
	}
}

