import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default class FemaleSignUp extends Component {
	state = {
		lesbians: [],
		newLesbian: {
			firstName: '',
			lastName: '',
			age: '',
			photoUrl: '',
			location: '',
			bio: ''
		},
		displayFemaleForm: false,
		redirectToLesbian: false
	};

	componentDidMount = () => {
		this.findAllLesbians();
	};

	findAllLesbians = () => {
		axios.get('/api/lesbians/').then((res) => {
			this.setState({ lesbians: res.data });
		});
	};

	createFemale = (e) => {
		axios
			.post('/api/lesbians/', {
				password: this.state.newLesbian.password,
				userName: this.state.newLesbian.userName,
				firstName: this.state.newLesbian.firstName,
				lastName: this.state.newLesbian.lastName,
				age: this.state.newLesbian.age,
				photoUrl: this.state.newLesbian.photoUrl,
				location: this.state.newLesbian.location,
				bio: this.state.newLesbian.bio
			})
			.then((res) => {
				const lesbiansList = [ this.state.lesbian ];
				lesbiansList.unshift(res.data);
				this.setState({
					newLesbian: {
						firstName: '',
						lastName: '',
						age: '',
						photoUrl: '',
						location: '',
						bio: ''
					},
					displayFemaleForm: false,
					lesbians: lesbiansList
				});
			});
		this.findAllLesbians();
	};

	handleChange = (e) => {
		const changeNewFemale = { ...this.state.newLesbian };
		changeNewFemale[e.target.name] = e.target.value;
		this.setState({ newLesbian: changeNewFemale });
	};

	toggleEditForm = () => {
		this.setState((state, props) => {
			return { displayFemaleForm: !state.displayFemaleForm };
		});
	};

	handleFemaleSignUp = (e) => {
		e.preventDefault();
		this.createFemale();
	};

	render() {
		if (this.state.redirectToLesbian) {
			return <Redirect to={`/lesbians/:lesbianId`} />;
		}

		return (
			<div>
				{this.state.lesbians.map((lesbian) => {
					return <div />;
				})}
				<br />
				<br />
				<button className="" onClick={this.toggleEditForm}>
					Lesbian Women
				</button>
				{this.state.displayFemaleForm ? (
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
								onSubmit={this.handleFemaleSignUp}
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
											value={this.state.newLesbian.firstName}
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
											value={this.state.newLesbian.lastName}
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
										value={this.state.newLesbian.photoUrl}
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
										value={this.state.newLesbian.age}
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
										value={this.state.newLesbian.location}
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
											value={this.state.newLesbian.bio}
											placeholder="Enter Facts about yourself"
										/>
									</Form.Group>
								</Form.Row>

								<div style={{ marginLeft: '140px' }} className="text-center">
									<Button
										onclick={this.createFemale}
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
