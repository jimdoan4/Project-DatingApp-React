import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import { Redirect, Link } from 'react-router-dom';
import { Media } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Container className="text-center" style={{ marginBottom: '100px' }}>
					<Row>
						<Col>
							<Image
								className="rockstar"
								style={{
									width: '100%',
									height: '100%',
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									backgroundRepeat: 'no-repeat'
								}}
								src="https://static1.squarespace.com/static/500818f184aef6ab9cd145a0/t/54eea8cae4b02bdabd98f1ac/1424926928261/?format=2500w"
							/>
						</Col>
					</Row>
					<Row style={{ marginTop: '55px' }}>
						<Col style={{ fontSize: '31px', position: 'block' }}>Find your Match</Col>
						<Col style={{ fontSize: '31px', position: 'block'  }}>Set a Date with your Match</Col>
						<Col style={{ fontSize: '31px', position: 'block'  }}>Rate your Date</Col>
					</Row>
					<Container className="text-center" style={{ marginTop: '40px' }}>
						<Link className="" to="/login/" style={{ color: 'black' }}>
							<button
								className="join rockstar"
								style={{
									backgroundColor: 'grey',
									borderColor: 'white',
									color: 'white',
									marginRight: '10px',
									paddingLeft: '50px',
									paddingRight: '50px',
									paddingTop: '15px',
									paddingBottom: '15px'
								}}
							>
								Join Now
							</button>
						</Link>
					</Container>
				</Container>
			</div>
		);
	}
}
