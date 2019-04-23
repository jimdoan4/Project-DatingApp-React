import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import Footer from './Footer';

export default class GaymaleList extends Component {
	state = {
		gaymales: [],
		newGaymale: {
			_id: '',
			firstName: '',
			lastName: '',
			age: '',
			photoUrl: '',
			location: '',
			bio: ''
		},
		redirectToUser: false,
		displayUserForm: false,
		gaymaleId: this.props.match.params.gaymaleId
	};

	componentDidMount = () => {
		this.findAllGaymales();
	};

	findAllGaymales = () => {
		axios.get('/api/gaymales/').then((res) => {
			this.setState({ gaymales: res.data });
		});
	};

	deleteGaymale = (e, gaymale) => {
		e.preventDefault();
		axios.delete(`/api/gaymales/${gaymale._id}`).then((res) => {
			this.findAllGaymales();
		});
	};

	render() {
		if (this.state.redirectToUser) {
			return <Redirect to={`/gaymales}`} />;
		}
		return (
			<div>
				<div
					className="row"
					style={{
						marginLeft: '30px',
						marginBottom: '30px',
						marginTop: '50px'
					}}
				>
					{this.state.gaymales.map((gaymale) => {
						return (
							<div
								className="row text-center"
								style={{
									marginLeft: '20px',
									marginBottom: '20px',
									marginTop: '30px'
								}}
							>
								<CardGroup className="collapse-show" id="collapseExample">
									<Card
										key={gaymale._id}
										className="text-center hidden"
										style={{
											width: '16.8rem',
											marginLeft: '30px',
											marginRight: '30px',
											backgroundColor: '#adbfd4'
										}}
									>
										<Card.Img
											className="text-center zoom"
											style={{ height: '250px', width: '267px' }}
											variant="top"
											src={gaymale.photoUrl}
										/>

										<Card.Body>
											<Card.Title style={{ color: 'black' }}>{gaymale.firstName}</Card.Title>
											<Card.Title style={{ color: 'black' }}>{gaymale.age}</Card.Title>

											<Card.Text style={{ color: 'black' }}>{gaymale.location}</Card.Text>

											<div key={gaymale._id}>
												<Link to={`/gaymales/${gaymale._id}`} key={gaymale._id}>
													<button style={{ marginRight: '16px' }}>Interested</button>
												</Link>
												<button
													key={gaymale._id}
													onClick={(e) => this.deleteGaymale(e, gaymale)}
													type="button"
													style={{ color: 'black' }}
												>
													Not Interested
												</button>
											</div>
										</Card.Body>
									</Card>
								</CardGroup>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
