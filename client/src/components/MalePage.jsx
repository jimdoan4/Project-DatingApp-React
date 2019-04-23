import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default class MalePage extends Component {
	state = {
		maleId: this.props.maleId,
		males: [],
		male: {
			_id: '',
			firstName: '',
			lastName: '',
			age: '',
			photoUrl: '',
			location: '',
			bio: '',
			mcomments: [],
			mevents: []
		},
		redirectToMale: false,
		displayMaleForm: false
	};

	getSingleMaleData = () => {
		axios.get(`/api/males/${this.state.maleId}`).then((res) => {
			this.setState({ male: res.data });
		});
	};

	componentDidMount = () => {
		this.getSingleMaleData();
	};

	toggleMaleForm = () => {
		this.setState((state, props) => {
			return { displayMaleForm: !state.displayMaleForm };
		});
	};

	handleChange = (e) => {
		const updateMale = { ...this.state.male };
		updateMale[e.target.name] = e.target.value;
		this.setState({ male: updateMale });
	};

	handleChange = (e) => {
		const newMale = { ...this.state.male };
		newMale[e.target.name] = e.target.value;
		this.setState({ male: newMale });
	};

	updateMale = (e) => {
		e.preventDefault();
		axios
			.put(`/api/males/${this.state.maleId}`, {
				firstName: this.state.male.firstName,
				lastName: this.state.male.lastName,
				age: this.state.male.age,
				photoUrl: this.state.male.photoUrl,
				location: this.state.male.location,
				bio: this.state.male.bio,
				mcomments: {},
				mevents: {}
			})
			.then((res) => {
				this.setState({ male: res.data, displayMaleForm: false });
			});
		this.getSingleMaleData();
	};

	deleteMale = () => {
		axios.delete(`/api/males/${this.state.maleId}`).then((res) => {
			this.setState({ redirectToMale: true });
		});
	};

	render() {
		if (this.state.redirectToMale) {
			return <Redirect to={`/males/`} />;
		}
		return (
			<div>
				{/* <Jumbotron fluid className="cart" style={{ height: '26rem' }} /> */}

				{/* <form onSubmit={this.updateMale}> */}
					<div style={{ marginTop: '30px', marginBottom: '30px' }}>
						<Card
							className=""
							style={{ width: '28rem', marginBottom: '20px', backgroundColor: '#1e3959' }}
						>
							<Card>
								<Card.Img className="zoom" variant="top" src={this.state.male.photoUrl} alt="top" />
								<Card.Body>
									<Card.Title>
										{this.state.male.firstName}
										&nbsp;
										{this.state.male.lastName}
									</Card.Title>
									<Card.Title>{this.state.male.age}</Card.Title>
									<Card.Title>{this.state.male.bio}</Card.Title>
									<Card.Title>{this.state.male.location}</Card.Title>
								</Card.Body>
								<Container style={{ textAlign: 'center', marginBottom: '30px', marginTop: '8px' }}>
									<button
									className= 'text-center'
										onClick={this.toggleMaleForm}
										style={{
											backgroundColor: 'white',
											borderColor: 'black',
											color: 'black'
											
										}}
									>
										Edit User
									
									</button>
								
								
								</Container>
							</Card>
						</Card>
					</div>
			
	{this.state.displayMaleForm ? 
										<form style= {{marginTop: '50px', marginRight: '50px'}} onSubmit={this.updateMale} className="col">
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
														value={this.state.male.firstName}
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
														value={this.state.male.lastName}
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
														value={this.state.male.age}
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
														value={this.state.male.bio}
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
														value={this.state.male.location}
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
														value={this.state.male.photoUrl}
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
