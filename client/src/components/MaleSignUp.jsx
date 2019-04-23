import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default class MaleSignUp extends Component {
	state = {
		males: [],
		newMale: {
			firstName: '',
			lastName: '',
			age: '',
			photoUrl: '',
			location: '',
			bio: '',
			mcomments: [],
			mevents: []
		},
		displayMaleForm: false,
		redirectToMale: false
	};

	componentDidMount = () => {
		this.findAllMales();
	};

	findAllMales = () => {
		axios.get('/api/males/').then((res) => {
			this.setState({ males: res.data });
		});
	};

	createMale = (e) => {
		axios
			.post('/api/males/', {
				password: this.state.newMale.password,
				userName: this.state.newMale.userName,
				firstName: this.state.newMale.firstName,
				lastName: this.state.newMale.lastName,
				age: this.state.newMale.age,
				photoUrl: this.state.newMale.photoUrl,
				location: this.state.newMale.location,
				bio: this.state.newMale.bio
			})
			.then((res) => {
				const malesList = [ this.state.males ];
				malesList.unshift(res.data);
				this.setState({
					newMale: {
						userName: '',
						password: '',
						firstName: '',
						lastName: '',
						age: '',
						photoUrl: '',
						location: '',
						bio: ''
					},
					displayMaleForm: false,
					males: malesList
				});
			});
		this.findAllMales();
	};

	handleChange = (e) => {
		const changeNewMale = { ...this.state.newMale };
		changeNewMale[e.target.name] = e.target.value;
		this.setState({ newMale: changeNewMale });
	};

	toggleEditForm = () => {
		this.setState((state, props) => {
			return { displayMaleForm: !state.displayMaleForm };
		});
	};

	handleMaleSignUp = (e) => {
		e.preventDefault();
		this.createMale();
	};

	render() {
		if (this.state.redirectToMale) {
			return <Redirect to={`/males/:maleId`} />;
		}

		return (
			<div>
				{this.state.males.map((male) => {
					return <div />;
				})}
				<br />
				<br />
				<button className="" onClick={this.toggleEditForm}>
					Straight Men
				</button>
				{this.state.displayMaleForm ? (
					<div className="container">
						<Card
							className="container"
							style={{
								width: '36rem',
								height: '41.4rem',
								paddingTop: '35px',
								marginTop: '20px',
								marginBottom: '98px'
							}}
						>
							<Form
								className="text-center"
								style={{ display: 'inline-block', paddingRight: '23px' }}
								onSubmit={this.handleMaleSignUp}
							>
								<Form.Row>
									<Form.Group as={Col} controlId="formGridEmail">
										<Form.Label style={{ fontSize: '16px ' }} htmlFor="firstName">
											First Name
										</Form.Label>
										<Form.Control
											className="text-center"
											name="firstName"
											onChange={this.handleChange}
											value={this.state.newMale.firstName}
											type="text"
											placeholder="Enter First Name"
										/>
									</Form.Group>

									<Form.Group as={Col} controlId="formGridPassword">
										<Form.Label style={{ fontSize: '16px ' }} htmlFor="lastName">
											Last Name
										</Form.Label>
										<Form.Control
											className="text-center"
											name="lastName"
											onChange={this.handleChange}
											value={this.state.newMale.lastName}
											type="text"
											placeholder="Enter Last Name"
										/>
									</Form.Group>
								</Form.Row>

								<Form.Group as={Col} controlId="formGridEmail">
									<Form.Label style={{ fontSize: '16px ' }} htmlFor="photoUrl">
										Photo
									</Form.Label>
									<Form.Control
										className="text-center"
										name="photoUrl"
										onChange={this.handleChange}
										value={this.state.newMale.photoUrl}
										type="text"
										placeholder="Enter a Photo of Yourself"
									/>
								</Form.Group>

								<Form.Group controlId="formGridAddress1">
									<Form.Label style={{ fontSize: '16px ' }} htmlFor="age">
										Age
									</Form.Label>
									<Form.Control
										className="text-center"
										name="age"
										type="number"
										onChange={this.handleChange}
										value={this.state.newMale.age}
										placeholder="Enter your Age"
									/>
								</Form.Group>

								<Form.Group controlId="formGridAddress2">
									<Form.Label style={{ fontSize: '16px ' }} htmlFor="location">
										Location
									</Form.Label>
									<Form.Control
										className="text-center"
										name="location"
										type="text"
										onChange={this.handleChange}
										value={this.state.newMale.location}
										placeholder="Apartment, studio, or floor"
									/>
								</Form.Group>

								<Form.Row>
									<Form.Group as={Col} controlId="formGridCity">
										<Form.Label style={{ fontSize: '16px ' }} htmlFor="bio">
											Biography
										</Form.Label>
										<Form.Control
											className="text-center"
											name="bio"
											type="text"
											onChange={this.handleChange}
											value={this.state.newMale.bio}
											placeholder="Enter Facts about yourself"
										/>
									</Form.Group>
								</Form.Row>

								<div style={{ marginLeft: '140px' }} className="text-center">
									<Button
										onclick={this.createMale}
										className="text-center"
										type="submit"
										style={{
											marginRight: '140px',
											paddingLeft: '30px',
											paddingRight: '30px',
											marginTop: '29px',
											marginBottom: '65px',
											backgroundColor: 'grey'
										}}
									>
										Register
									</Button>
								</div>
							</Form>
						</Card>
					</div>
				) : null}
			</div>
		);
	}
}
