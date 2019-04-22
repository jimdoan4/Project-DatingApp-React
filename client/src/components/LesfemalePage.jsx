import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default class LesfemalePage extends Component {
	state = {
		lesfemaleId: this.props.lesfemaleId,
		lesfemales: [],
		lesfemale: {
			_id: '',
			firstName: '',
			lastName: '',
			age: '',
			photoUrl: '',
			location: '',
			bio: '',
			comments: [],
			events: []
		},
		redirectToLesfemale: false,
		displayLesbianForm: false
	};

	getSingleLesfemaleData = () => {
		axios.get(`/api/lesfemales/${this.state.lesfemaleId}`).then((res) => {
			this.setState({ lesfemale: res.data });
		});
	};

	componentDidMount = () => {
		this.getSingleLesfemaleData();
	};

	toggleLesbianForm = () => {
		this.setState((state, props) => {
			return { displayLesbianForm: !state.displayLesbianForm };
		});
	};

	handleChange = (e) => {
		const updateLesfemale = { ...this.state.lesfemale };
		updateLesfemale[e.target.name] = e.target.value;
		this.setState({ lesfemale: updateLesfemale });
	};

	handleChange = (e) => {
		const newLesfemale = { ...this.state.lesfemale };
		newLesfemale[e.target.name] = e.target.value;
		this.setState({ lesfemale: newLesfemale });
	};

	updateLesfemale = (e) => {
		e.preventDefault();
		axios
			.put(`/api/lesfemales/${this.state.lesfemaleId}`, {
				firstName: this.state.lesfemale.firstName,
				lastName: this.state.lesfemale.lastName,
				age: this.state.lesfemale.age,
				photoUrl: this.state.lesfemale.photoUrl,
				location: this.state.lesfemale.location,
				bio: this.state.lesfemale.bio,
				// comments: {},
				// events: {}
			})
			.then((res) => {
				this.setState({ lesfemale: res.data, displayLesbianForm: false });
			});
		this.getSingleLesfemaleData();
	};

	deleteLesfemale = () => {
		axios.delete(`/api/lesfemales/${this.state.lesfemaleId}`).then((res) => {
			this.setState({ redirectToLesfemale: true });
		});
	};

	render() {
		if (this.state.redirectToLesfemale) {
			return <Redirect to={`/lesfemales/`} />;
		}
		return (
			<div>
				{/* <Jumbotron fluid className="cart" style={{ height: '26rem' }} /> */}

	
					<div style={{ marginTop: '30px', marginBottom: '100px' }}>
						<Card
							className="container"
							style={{ width: '28rem', marginBottom: '20px', backgroundColor: '#86074e' }}
						>
							<Card>
								<Card.Img className="zoom" variant="top" src={this.state.lesfemale.photoUrl} alt="top" />
								<Card.Body>
									<Card.Title>
										{this.state.lesfemale.firstName}
										&nbsp;
										{this.state.lesfemale.lastName}
									</Card.Title>
									<Card.Title>{this.state.lesfemale.age}</Card.Title>
									<Card.Title>{this.state.lesfemale.bio}</Card.Title>
									<Card.Title>{this.state.lesfemale.location}</Card.Title>
								</Card.Body>
								<Container style={{ textAlign: 'center', marginBottom: '30px', marginTop: '8px' }}>
									<button
										onClick={this.toggleLesbianForm}
										style={{
											backgroundColor: 'white',
											borderColor: 'black',
											color: 'black',
											marginRight: '45px'
										}}
									>
										Edit User
									
									</button>
									<button
										style={{ backgroundColor: 'white', borderColor: 'black', color: 'black' }}
										onClick={this.deleteLesfemale}
									>
										Delete User
									</button>
							
								</Container>
							</Card>
						</Card>
					</div>
				{this.state.displayLesbianForm ? 
										<form style= {{marginTop: '50px', marginRight: '50px'}} onSubmit={this.updateLesfemale} className="col">
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
														value={this.state.lesfemale.firstName}
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
														value={this.state.lesfemale.lastName}
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
														value={this.state.lesfemale.age}
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
														value={this.state.lesfemale.bio}
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
														value={this.state.lesfemale.location}
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
														value={this.state.lesfemale.photoUrl}
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
