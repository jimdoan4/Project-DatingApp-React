import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default class GaySignUp extends Component {
	state = {
		gaymales: [],
		newGaymale: {
			firstName: '',
			lastName: '',
			age: '',
			photoUrl: '',
			location: '',
			bio: ''
		},
		displayGayForm: false,
		redirectToGaymale: false
	};

	componentDidMount = () => {
		this.findAllGaymales();
	};

	findAllGaymales = () => {
		axios.get('/api/gaymales/').then((res) => {
			this.setState({ gaymales: res.data });
		});
	};

	createGaymale = (e) => {
		axios
			.post('/api/gaymales/', {
				password: this.state.newGaymale.password,
				userName: this.state.newGaymale.userName,
				firstName: this.state.newGaymale.firstName,
				lastName: this.state.newGaymale.lastName,
				age: this.state.newGaymale.age,
				photoUrl: this.state.newGaymale.photoUrl,
				location: this.state.newGaymale.location,
				bio: this.state.newGaymale.bio
			})
			.then((res) => {
				const gaymalesList = [ this.state.gaymales ];
				gaymalesList.unshift(res.data);
				this.setState({
					newGaymale: {
						userName: '',
						password: '',
						firstName: '',
						lastName: '',
						age: '',
						photoUrl: '',
						location: '',
						bio: ''
					},
					displayGayForm: false,
					gaymales: gaymalesList
				});
			});
		this.findAllGaymales();
	};

	handleChange = (e) => {
		const changeNewGaymale = { ...this.state.newGaymale };
		changeNewGaymale[e.target.name] = e.target.value;
		this.setState({ newGaymale: changeNewGaymale });
	};

	toggleEditForm = () => {
		this.setState((state, props) => {
			return { displayGayForm: !state.displayGayForm };
		});
	};

	handleGaySignUp = (e) => {
		e.preventDefault();
		this.createGaymale();
	};

	render() {
		if (this.state.redirectToGaymale) {
			return <Redirect to={`/gaymales/:gaymaleId`} />;
		}

		return (
			<div>
				{this.state.gaymales.map((gaymale) => {
					return <div />;
				})}
				<br />
				<br />
				<button
					style={{
						backgroundColor: 'white',
						borderColor: 'black',
						color: 'black'
					}}
					onClick={this.toggleEditForm}
				>
					Gay Men
				</button>
				{this.state.displayGayForm ? (
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
								onSubmit={this.handleGaySignUp}
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
											value={this.state.newGaymale.firstName}
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
											value={this.state.newGaymale.lastName}
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
										value={this.state.newGaymale.photoUrl}
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
										value={this.state.newGaymale.age}
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
										value={this.state.newGaymale.location}
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
											value={this.state.newGaymale.bio}
											placeholder="Enter Facts about yourself"
										/>
									</Form.Group>
								</Form.Row>

								<div style={{ marginLeft: '140px' }} className="text-center">
									<Button
										onclick={this.createGaymale}
										className="text-center rockstar"
										type="submit"
										style={{
											marginRight: '140px',
											paddingLeft: '30px',
											paddingRight: '30px',
											marginTop: '29px',
											marginBottom: '65px',
											backgroundColor: 'grey',
											borderColor: 'black',
											color: 'black'
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
