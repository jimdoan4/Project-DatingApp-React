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
				<div className="containers">
					{/* <Image
						src="https://media3.giphy.com/media/13drGMGklYVr0Y/giphy.gif"
						fluid
						style={{ opacity: '3', width: '100%' }}
					/> */}
					<div style={{ backgroundColor: '' }}>
						<Image
							src="https://c1.staticflickr.com/5/4479/38133605732_0558b48ea8_b.jpg"
							fluid
							style={{ opacity: '3', width: '100%', zIndex: '' }}
						/>
					</div> 

					<div
						 style={{
							paddingBottom: '70px',
						backgroundColor: '',
							color: 'red',
						opacity: '3',
						position: 'absolute'
					 }}
						lassName="centered text-center frontpage"
					>
						<Container style={{ marginTop: '20px', opacity: '3' }}>
							<p style={{ color: 'white' }}>Get Lucky today.</p>
							<p> Find your Match.</p>
						</Container> */}
						<Button style= {{backgroundColor: 'black', color: 'white', fontSize: '12px'}}>Join Now</Button> */}
					</div>
				</div>
{/* <Container className="text-center" style= {{ marginBottom: '100px'}}> */}
					{/* <Row>
						<Col>
							<Image
								className="rockstar"
								style={{ width: '100%', height: '100%', backgroundSize: 'cover',  backgroundPosition: 'center',  backgroundRepeat: 'no-repeat' }}
								src="https://static1.squarespace.com/static/500818f184aef6ab9cd145a0/t/54eea8cae4b02bdabd98f1ac/1424926928261/?format=2500w"
							/>
						</Col>
					</Row> */}
					{/* <Row>
						<Col style= {{fontSize: '35px'}}>
							Find your Match.
						</Col>
						<Col style= {{fontSize: '35px'}}>
							Set a Date with your Match.
						</Col>
						<Col style= {{fontSize: '35px'}}>
							Rate your Date.
						</Col>
					</Row>
					<Container className= 'text-center' style= {{marginTop: '40px'}}>
				<button>Join Now</button>
				</Container>
				</Container> */}
				
				{/* <Container style={{ marginTop: '55px' }}>
					<Row>
						<Col>
							<Card style={{ width: '23rem' }} className="member3">
								<Card.Img
									style={{ height: '23rem' }}
									variant="top"
									src="https://cdn.fstoppers.com/styles/med-16-9/s3/lead/2017/05/clay-cook-fstoppers-how-to-use-colored-gels-create-electric-editorial-photography-header.jpg"
								/>
							</Card>
						</Col>
						<Col>
							<Card style={{ width: '23rem' }} className="member2">
								<Card.Img
									style={{ height: '23rem' }}
									variant=""
									src="http://www.liveonbeauty.org/upload/2018/09/08/creative-rim-light-tutorial-rim-lighting-l-50a7de6a07039d8c.jpg"
								/>
							</Card>
						</Col>
						<Col>
							<Card style={{ width: '23rem' }} className="member4">
								<Card.Img
									style={{ height: '23rem' }}
									variant="top"
									src="https://cdn.shopify.com/s/files/1/0974/7950/files/pomme-copie_web_1024x1024.png?v=1551296343"
								/>
							</Card>
						</Col>
					</Row>
				</Container>
				
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
						<h1 className="members" style={{ marginTop: '400px', marginBottom: '50px' }}>
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
				</div> */}

				{/* <h1 style={{ marginTop: '35px' }} className="text-center">
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
					</div> */}

				{/* <h1 style={{ marginTop: '55px' }} className="text-center">
					Now available on mobile App. Find your match on your convenience.{' '}
				</h1> */}
				{/* </ul> */}
			</div>
		);
	}
}
