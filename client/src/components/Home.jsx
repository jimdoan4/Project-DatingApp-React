import React, { Component } from 'react';
// import axios from 'axios';
// import { Redirect, Link } from 'react-router-dom';
import { Media } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';

export default class Home extends Component {
	render() {
		return (
			<div>
				<div className="containers">
					<Image
						src="https://media3.giphy.com/media/H7oFmrAMuE5by/giphy.gif"
						fluid
						style={{ opacity: '9', width: '100%' }}
					/>

					<div
						style={{
							paddingBottom: '70px',
							backgroundColor: '',
							color: '#720F1D',
							opacity: '3',
							position: 'absolute'
						}}
						className="centered text-center frontpage"
					>
						<Container style={{ marginTop: '20px' }}>
							<p>Get Lucky today.</p>
							<p> Find your Match.</p>
						</Container>
					</div>
					<Card
						style={{ paddingBottom: '4px', backgroundColor: '#720F1D', opacity: '6', position: 'absolute' }}
						className="centereds text-center"
					>
						<Container style={{ marginTop: '20px' }}>
							<Row>
								<Col>
									<Card className="homebox" style={{ width: '20rem', height: '20rem' }}>
										<Card.Body>
											<Card.Subtitle className="homebox mb-2 text-muted">Nr. 01</Card.Subtitle>
											<Card.Title>Find your Match</Card.Title>

											<Card.Text>
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
											<Card.Link className="homebox" href="#">
												Card Link
											</Card.Link>
										</Card.Body>
									</Card>
								</Col>
								<Col>
									<Card className="homebox" style={{ width: '20rem', height: '20rem' }}>
										<Card.Body>
											<Card.Subtitle className="mb-2 text-muted homebox">Nr. 02</Card.Subtitle>
											<Card.Title>Set a PLACE to meet</Card.Title>

											<Card.Text>
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
											<Card.Link className="homebox" href="#">
												Card Link
											</Card.Link>
										</Card.Body>
									</Card>
								</Col>
								<Col>
									<Card className="homebox" style={{ width: '20rem', height: '20rem' }}>
										<Card.Body>
											<Card.Subtitle className="mb-2 text-muted homebox">Nr. 03</Card.Subtitle>
											<Card.Title>Give your date a REVIEW</Card.Title>

											<Card.Text>
												Some quick example text to build on the card title and make up the bulk
												of the card's content.
											</Card.Text>
											<Card.Link className="homebox" href="#">
												Card Link
											</Card.Link>
										</Card.Body>
									</Card>
								</Col>
							</Row>
						</Container>
					</Card>
				</div>

				<div
					style={{
						backgroundColor: '',
						width: '100%',
						paddingBottom: '74px',
						paddingTop: '16px',
						opacity: ''
					}}
				>
					<Container className="text-center">
						<h1 className="members" style={{ marginTop: '190px', marginBottom: '50px' }}>
							New members. Check them out!
						</h1>
						<Row>
							<Row style={{ marginLeft: '125px', marginRight: '20px' }} xs>
								<img
									style={{ marginRight: '20px' }}
									className="centered"
									width={144}
									height={154}
									className="mr-3 zoomer"
									src="https://img.ltwebstatic.com/images/pi/201710/d5/15078910542851474215_thumbnail_600x.jpg"
									alt="Generic placeholder"
								/>
							</Row>
							<Row style={{ marginRight: '20px' }} xs={{ order: 12 }}>
								<img
									width={144}
									height={154}
									className="mr-3 zoomer"
									src="https://img.ltwebstatic.com/images/pi/201710/d5/15078910542851474215_thumbnail_600x.jpg"
									alt="Generic placeholder"
								/>
							</Row>
							<Row xs={{ order: 1 }}>
								<img
									width={144}
									height={154}
									className="mr-3 zoomer"
									src="https://img.ltwebstatic.com/images/pi/201710/d5/15078910542851474215_thumbnail_600x.jpg"
									alt="Generic placeholder"
								/>
							</Row>
							<Row style={{ marginLeft: '20px' }} xs={{ order: 1 }}>
								<img
									width={144}
									height={154}
									className="mr-3 zoomer"
									src="https://img.ltwebstatic.com/images/pi/201710/d5/15078910542851474215_thumbnail_600x.jpg"
									alt="Generic placeholder"
								/>
							</Row>
							<Row style={{ marginLeft: '20px' }} xs={{ order: 1 }}>
								<img
									width={144}
									height={154}
									className="mr-3 zoomer"
									src="https://img.ltwebstatic.com/images/pi/201710/d5/15078910542851474215_thumbnail_600x.jpg"
									alt="Generic placeholder"
								/>
							</Row>
						</Row>
					</Container>
					<Container style={{ marginTop: '15px' }} className="text-center">
						<Row>
							<Row style={{ marginLeft: '125px', marginRight: '20px' }} xs>
								<img
									style={{ marginRight: '20px' }}
									className="centered"
									width={144}
									height={154}
									className="mr-3 zoomer"
									src="https://img.ltwebstatic.com/images/pi/201710/d5/15078910542851474215_thumbnail_600x.jpg"
									alt="Generic placeholder"
								/>
							</Row>
							<Row style={{ marginRight: '20px' }} xs={{ order: 12 }}>
								<img
									width={144}
									height={154}
									className="mr-3 zoomer"
									src="https://img.ltwebstatic.com/images/pi/201710/d5/15078910542851474215_thumbnail_600x.jpg"
									alt="Generic placeholder"
								/>
							</Row>
							<Row xs={{ order: 1 }}>
								<img
									width={144}
									height={154}
									className="mr-3 zoomer"
									src="https://img.ltwebstatic.com/images/pi/201710/d5/15078910542851474215_thumbnail_600x.jpg"
									alt="Generic placeholder"
								/>
							</Row>
							<Row style={{ marginLeft: '20px' }} xs={{ order: 1 }}>
								<img
									width={144}
									height={154}
									className="mr-3 zoomer"
									src="https://img.ltwebstatic.com/images/pi/201710/d5/15078910542851474215_thumbnail_600x.jpg"
									alt="Generic placeholder"
								/>
							</Row>
							<Row style={{ marginLeft: '20px' }} xs={{ order: 1 }}>
								<img
									width={144}
									height={154}
									className="mr-3 zoomer"
									src="https://img.ltwebstatic.com/images/pi/201710/d5/15078910542851474215_thumbnail_600x.jpg"
									alt="Generic placeholder"
								/>
							</Row>
						</Row>
					</Container>
					<Container style={{ marginTop: '15px' }} className="text-center">
						<Row>
							<Row style={{ marginLeft: '125px', marginRight: '20px' }} xs>
								<img
									style={{ marginRight: '20px' }}
									className="centered"
									width={144}
									height={154}
									className="mr-3 zoomer"
									src="https://img.ltwebstatic.com/images/pi/201710/d5/15078910542851474215_thumbnail_600x.jpg"
									alt="Generic placeholder"
								/>
							</Row>
							<Row style={{ marginRight: '20px' }} xs={{ order: 12 }}>
								<img
									width={144}
									height={154}
									className="mr-3 zoomer"
									src="https://img.ltwebstatic.com/images/pi/201710/d5/15078910542851474215_thumbnail_600x.jpg"
									alt="Generic placeholder"
								/>
							</Row>
							<Row xs={{ order: 1 }}>
								<img
									width={144}
									height={154}
									className="mr-3 zoomer"
									src="https://img.ltwebstatic.com/images/pi/201710/d5/15078910542851474215_thumbnail_600x.jpg"
									alt="Generic placeholder"
								/>
							</Row>
							<Row style={{ marginLeft: '20px' }} xs={{ order: 1 }}>
								<img
									width={144}
									height={154}
									className="mr-3 zoomer"
									src="https://img.ltwebstatic.com/images/pi/201710/d5/15078910542851474215_thumbnail_600x.jpg"
									alt="Generic placeholder"
								/>
							</Row>
							<Row style={{ marginLeft: '20px' }} xs={{ order: 1 }}>
								<img
									width={144}
									height={154}
									className="mr-3 zoomer"
									src="https://img.ltwebstatic.com/images/pi/201710/d5/15078910542851474215_thumbnail_600x.jpg"
									alt="Generic placeholder"
								/>
							</Row>
						</Row>
					</Container>
				</div>

				<div className="containers">
					<Image
						src="https://image.freepik.com/free-photo/lesbian-couple-love_53876-15899.jpg"
						fluid
						style={{ opacity: '.8', width: '100%', height: '600px' }}
					/>
				</div>
				<h1 style={{ marginTop: '55px' }} className="text-center">
					Member of the Week!
				</h1>
				<ul
					style={{ marginTop: '50px', marginLeft: '100px', marginRight: '100px', marginBottom: '40px' }}
					className="list-unstyled"
				>
					<div>
						<Media as="li">
							<img
								width={284}
								height={294}
								className="mr-3"
								src="https://img.ltwebstatic.com/images/pi/201710/d5/15078910542851474215_thumbnail_600x.jpg"
								alt="Generic placeholder"
							/>
							<Media.Body>
								<h5>List-based media object</h5>
								<p>
									Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
									sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra
									turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
									felis in faucibus.
								</p>
							</Media.Body>
						</Media>

						<Media as="li">
							<img
								width={284}
								height={294}
								className="mr-3"
								src="https://img.ltwebstatic.com/images/pi/201710/d5/15078910542851474215_thumbnail_600x.jpg"
								alt="Generic placeholder"
							/>
							<Media.Body>
								<h5>List-based media object</h5>
								<p>
									Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
									sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra
									turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
									felis in faucibus.
								</p>
							</Media.Body>
						</Media>

						<Media as="li">
							<img
								width={284}
								height={294}
								className="mr-3"
								src="https://img.ltwebstatic.com/images/pi/201710/d5/15078910542851474215_thumbnail_600x.jpg"
								alt="Generic placeholder"
							/>
							<Media.Body>
								<h5>List-based media object</h5>
								<p>
									Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
									sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra
									turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
									felis in faucibus.
								</p>
							</Media.Body>
						</Media>
					</div>
					{/* <div className= 'containers'>
				
				<Image
						src="https://image.freepik.com/free-photo/lesbian-couple-love_53876-15899.jpg"
						fluid
						style={{ opacity: '.8', width: '100%', height: '600px' }}
					/>
					</div> */}

					<h1 style={{ marginTop: '55px' }} className="text-center">
						Now available on mobile App. Find your match on your convenience.{' '}
					</h1>
				</ul>
			</div>
		);
	}
}
