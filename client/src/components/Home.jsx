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
					<div style= {{backgroundColor: 'black'}}>
						<Image
					src="http://www.desktopimages.org/pictures/2012/0704/1/brunettes-women-megan-fox-long-hair-white-background-1920x1080-wallpaper-560980.jpg"
					fluid
					style={{ opacity: '.79', width: '100%', zIndex: '1' }}
				/>
				</div>

					<div
						style={{
							paddingBottom: '70px',
							backgroundColor: '',
							color: 'black',
							opacity: '3',
							position: 'absolute'
						}}
						className="centered text-center frontpage"
					>
						<Container style={{ marginTop: '20px', opacity: '3' }}>
							<p style={{ color: 'black' }}>Get Lucky today.</p>
							<p> Find your Match.</p>
						</Container>
						{/* <Button style= {{backgroundColor: 'black', color: 'white', fontSize: '12px'}}>Join Now</Button> */}
					</div>
					
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
						<h1 className="members" style={{ marginTop: '40px', marginBottom: '50px' }}>
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

	
			
					 <Image
						src="https://media3.giphy.com/media/13drGMGklYVr0Y/giphy.gif"
						fluid
						style={{ opacity: '3', width: '100%' }}
					/>
					
	<div className= 'member1 row text-center' style= {{ marginBottom: '65px', marginTop: '75px'}}>		
	<Card style= {{ marginRight: '35px'}}>
						<img 
								width={234}
								height={244}
								className="mr-3 row text-center"
								src="https://img.ltwebstatic.com/images/pi/201710/d5/15078910542851474215_thumbnail_600x.jpg"
								alt="Generic placeholder"
							/>
							</Card>
							<Card style= {{ marginRight: '35px'}}>
							<img
						
								width={234}
								height={244}
								className="mr-3 row"
								src="https://img.ltwebstatic.com/images/pi/201710/d5/15078910542851474215_thumbnail_600x.jpg"
								alt="Generic placeholder"
							/>
							</Card>
							<Card style= {{ marginRight: '35px'}}>
							<img
						
								width={234}
								height={244}
								className="mr-3 row"
								src="https://img.ltwebstatic.com/images/pi/201710/d5/15078910542851474215_thumbnail_600x.jpg"
								alt="Generic placeholder"
							/>
							</Card>
							<Card>
							<img
						
								width={234}
								height={244}
								className="mr-3 row"
								src="https://img.ltwebstatic.com/images/pi/201710/d5/15078910542851474215_thumbnail_600x.jpg"
								alt="Generic placeholder"
							/>
							</Card>
							</div>
							<div style= {{backgroundColor: 'black', marginTop: '445px'}}>
						<Image
					src="https://wallup.net/wp-content/uploads/2016/05/13/329627-Deepika_Padukone.jpg"
					fluid
					style={{ opacity: '.79', width: '100%', zIndex: '1' }}
				/>
				</div>
				<h1 style={{ marginTop: '35px' }} className="text-center">
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
