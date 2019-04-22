import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default class FemaleSignUp extends Component {
	state = {
		lesfemales: [],
		newLesfemale: {
			firstName: '',
			lastName: '',
			age: '',
			photoUrl: '',
			location: '',
			bio: ''
			
		},
		displayFemaleForm: false,
		redirectToLesfemale: false
	};

	componentDidMount = () => {
		this.findAllLesfemales();
	};

	findAllLesfemales = () => {
		axios.get('/api/lesfemales/').then((res) => {
			this.setState({ lesfemales: res.data });
		});
	};

	createFemale = (e) => {
		axios
			.post('/api/lesfemales/', {
				password: this.state.newLesfemale.password,
				userName: this.state.newLesfemale.userName,
				firstName: this.state.newLesfemale.firstName,
				lastName: this.state.newLesfemale.lastName,
				age: this.state.newLesfemale.age,
				photoUrl: this.state.newLesfemale.photoUrl,
				location: this.state.newLesfemale.location,
				bio: this.state.newLesfemale.bio
			})
			.then((res) => {
				const lesfemalesList = [ this.state.lesfemale ];
				lesfemalesList.unshift(res.data);
				this.setState({
					newLesfemale: {
						firstName: '',
						lastName: '',
						age: '',
						photoUrl: '',
						location: '',
						bio: ''
					},
					displayFemaleForm: false,
					lesfemales: lesfemalesList
				});
			});
		this.findAllLesfemales();
	};

	handleChange = (e) => {
		const changeNewFemale = { ...this.state.newLesfemale };
		changeNewFemale[e.target.name] = e.target.value;
		this.setState({ newLesfemale: changeNewFemale });
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
		if (this.state.redirectToLesfemale) {
			return <Redirect to={`/lesfemales/:lesfemaleId`} />;
		}

		return (
			<div>
				{this.state.lesfemales.map((lesfemale) => {
					return (
						<div>
						</div>
					);
				})}
				<br />
				<br />
				 <button className="" onClick={this.toggleEditForm}>Lesbian Women</button>
        {
          this.state.displayFemaleForm ?
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
										value={this.state.newLesfemale.firstName}
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
										value={this.state.newLesfemale.lastName}
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
									value={this.state.newLesfemale.photoUrl}
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
									value={this.state.newLesfemale.age}
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
									value={this.state.newLesfemale.location}
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
										value={this.state.newLesfemale.bio}
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
				: null
								}
                    </div>
                    			
		
		);
	}
}
