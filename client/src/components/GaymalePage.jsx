import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default class GaymalePage extends Component {
	state = {
		gaymaleId: this.props.gaymaleId,
		gaymales: [],
		gaymale: {
			_id: '',
			firstName: '',
			lastName: '',
			age: '',
			photoUrl: '',
			location: '',
			bio: '',
			gcomments: [],
			gevents: []
		},
		redirectToGaymale: false,
		displayGayEditForm: false
	};

	getSingleGaymaleData = () => {
		axios.get(`/api/gaymales/${this.state.gaymaleId}`).then((res) => {
			this.setState({ gaymale: res.data });
		});
	};

	componentDidMount = () => {
		this.getSingleGaymaleData();
	};

	toggleGayEditForm = () => {
		this.setState((state, props) => {
			return { displayGayEditForm: !state.displayGayEditForm };
		});
	};

	handleChange = (e) => {
		const updateGaymale = { ...this.state.gaymale };
		updateGaymale[e.target.name] = e.target.value;
		this.setState({ gaymale: updateGaymale });
	};

	handleChange = (e) => {
		const newGaymale = { ...this.state.gaymale };
		newGaymale[e.target.name] = e.target.value;
		this.setState({ gaymale: newGaymale });
	};

	updateGaymale = (e) => {
		e.preventDefault();
		axios
			.put(`/api/gaymales/${this.state.gaymaleId}`, {
				firstName: this.state.gaymale.firstName,
				lastName: this.state.gaymale.lastName,
				age: this.state.gaymale.age,
				photoUrl: this.state.gaymale.photoUrl,
				location: this.state.gaymale.location,
				bio: this.state.gaymale.bio,
				gcomments: {},
				gevents: {}
			})
			.then((res) => {
				this.setState({ gaymale: res.data, displayGayEditForm: false });
			});
		this.getSingleGaymaleData();
	};

	deleteGaymale = () => {
		axios.delete(`/api/gaymales/${this.state.gaymaleId}`).then((res) => {
			this.setState({ redirectToGaymale: true });
		});
	};

	render() {
		if (this.state.redirectToGaymale) {
			return <Redirect to={`/gaymales/`} />;
		}
		return (
			<div>
				{/* <Jumbotron fluid className="cart" style={{ height: '26rem' }} /> */}

					<div style={{ marginTop: '30px', marginBottom: '100px' }}>
						<Card
							className="container"
							style={{ width: '28rem', marginBottom: '20px', backgroundColor: '#adbfd4' }}
						>
							<Card>
								<Card.Img className="zoom" variant="top" src={this.state.gaymale.photoUrl} alt="top" />
								<Card.Body>
									<Card.Title>
										{this.state.gaymale.firstName}
										&nbsp;
										{this.state.gaymale.lastName}
									</Card.Title>
									<Card.Title>{this.state.gaymale.age}</Card.Title>
									<Card.Title>{this.state.gaymale.bio}</Card.Title>
									<Card.Title>{this.state.gaymale.location}</Card.Title>
								</Card.Body>
								<Container style={{ textAlign: 'center', marginBottom: '30px', marginTop: '8px' }}>
										<button
										onClick={this.toggleGayEditForm}
										style={{
											backgroundColor: 'white',
											borderColor: 'black',
											color: 'black',
											marginRight: '45px'
										}}
									>
										Edit User
									
									</button>
									
									{/* <button
										style={{ backgroundColor: 'white', borderColor: 'black', color: 'black' }}
										onClick={this.deleteGaymale}
									>
										Delete User
									</button> */}
								
								</Container>
							</Card>
						</Card>
					</div>
			{this.state.displayGayEditForm ? 
										<form style= {{marginTop: '50px', marginRight: '50px'}} onSubmit={this.updateGaymale} className="col">
											<div className="col">
												<div className="col s12 m6 text-center">
													<label
														style={{ marginRight: '30px', marginTop: '30px' }}
														htmlFor="firstName"
													>
														First Name
													</label>
													<input
														style={{ height: '50px', width: '320px' }}
														className="text-center"
														id="firstName"
														type="text"
														name="firstName"
														onChange={this.handleChange}
														value={this.state.gaymale.firstName}
													/>
												</div>
												<div className="col s12 m6 text-center">
													<label
														style={{ marginRight: '30px', marginTop: '40px' }}
														htmlFor="lastName"
													>
														Last Name{' '}
													</label>
													<input
														style={{ height: '54px', width: '390px', marginRight: '53px' }}
														className="text-center"
														id="lastName"
														type="text"
														name="lastName"
														onChange={this.handleChange}
														value={this.state.gaymale.lastName}
													/>
												</div>
												<div className="col s12 m6 text-center">
													<label
														style={{ marginRight: '30px', marginTop: '40px' }}
														htmlFor="age"
													>
														Age{' '}
													</label>
													<input
														style={{ height: '54px', width: '390px', marginRight: '53px' }}
														className="text-center"
														id="age"
														type="number"
														name="age"
														onChange={this.handleChange}
														value={this.state.gaymale.age}
													/>
												</div>
												<div className="col s12 m6 text-center">
													<label
														style={{ marginRight: '30px', marginTop: '40px' }}
														htmlFor="bio"
													>
														Biography
													</label>
													<input
														style={{ height: '54px', width: '390px', marginRight: '53px' }}
														className="text-center"
														id="bio"
														type="text"
														name="bio"
														onChange={this.handleChange}
														value={this.state.gaymale.bio}
													/>
												</div>
												<div className="col s12 m6 text-center">
													<label
														style={{ marginRight: '30px', marginTop: '40px' }}
														htmlFor="location"
													>
														Location{' '}
													</label>
													<input
														style={{ height: '54px', width: '390px', marginRight: '53px' }}
														className="text-center"
														id="location"
														type="text"
														name="location"
														onChange={this.handleChange}
														value={this.state.gaymale.location}
													/>
												</div>
												<div className="col s12 m6 text-center">
													<label
														style={{ marginRight: '30px', marginTop: '40px' }}
														htmlFor="photoUrl"
													>
														Photo:{' '}
													</label>
													<input
														style={{ height: '54px', width: '390px', marginRight: '53px' }}
														className="text-center"
														id="photoUrl"
														type="text"
														name="photoUrl"
														onChange={this.handleChange}
														value={this.state.gaymale.photoUrl}
													/>
												</div>
											</div>
											<div className="text-center" style={{ marginTop: '20px' }}>
												<button className="text-center">Submit</button>
											</div>
											</form> :
											null
									}
			</div>
		);
	}
}
