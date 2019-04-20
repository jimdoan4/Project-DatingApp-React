import React, { Component } from 'react';
// import axios from 'axios';
// import { Redirect, Link } from 'react-router-dom';
import { Media } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

export default class Home extends Component {
	render() {
		return (
			<div>
				<div className="containers">
					<Image
						src="http://www.desktopimages.org/pictures/2012/0704/1/brunettes-women-megan-fox-long-hair-white-background-1920x1080-wallpaper-560980.jpg"
						fluid
						style={{ opacity: '.9', width: '100%' }}
					/>
					<div className="centered">
						<p>Get Lucky today.</p>
						<p> Find your Match.</p>
					</div>
				</div>
				<Container className="text-center">
					<h1 style={{ marginTop: '55px' }}>New members. Check them out!</h1>
					<Row>
						<Row style={{ marginLeft: '130px' }} xs>
							<img
								className="centered"
								width={284}
								height={294}
								className="mr-3"
								src="https://img.ltwebstatic.com/images/pi/201710/d5/15078910542851474215_thumbnail_600x.jpg"
								alt="Generic placeholder"
							/>
						</Row>
						<Row style={{ marginRight: '20px' }} xs={{ order: 12 }}>
							<img
								width={284}
								height={294}
								className="mr-3"
								src="https://img.ltwebstatic.com/images/pi/201710/d5/15078910542851474215_thumbnail_600x.jpg"
								alt="Generic placeholder"
							/>
						</Row>
						<Row xs={{ order: 1 }}>
							<img
								width={284}
								height={294}
								className="mr-3"
								src="https://img.ltwebstatic.com/images/pi/201710/d5/15078910542851474215_thumbnail_600x.jpg"
								alt="Generic placeholder"
							/>
						</Row>
					</Row>
				</Container>
				<h1 style={{ marginTop: '55px' }} className="text-center">
					Member of the Week!
				</h1>
				<ul
					style={{ marginTop: '50px', marginLeft: '100px', marginRight: '100px', marginBottom: '40px' }}
					className="list-unstyled"
				>
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
								turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
								in faucibus.
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
								turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
								in faucibus.
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
								turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
								in faucibus.
							</p>
						</Media.Body>
					</Media>
					<h1 style={{ marginTop: '55px' }} className="text-center">
						Now available on mobile App. Find your match on your convenience.{' '}
					</h1>
				</ul>
			</div>
		);
	}
}
