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
import { Jumbotron } from 'react-bootstrap';
import { HomeContainer } from './styled-components/HomeStyles'

export default class Home extends Component {
	render() {
		return (
			<HomeContainer style={{ height: '100%' }}>
				<Jumbotron className="main-page-image">
				
					{/* <Row className="text-center">
						<Col className="home-title">Find your Match</Col>
						<Col className="home-title">Go on a Date with your Match</Col>
						<Col className="home-title">Rate your Date</Col>
					</Row> */}
					<div className="text-center">
					<Link className="" to="/login/">
							<button
								className="join-button"
							>
								Join Now
							</button>
						</Link>
						</div>
					
				</Jumbotron>

			</HomeContainer>
		);
	}
}

