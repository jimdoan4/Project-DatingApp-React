
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
		newUser: {
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
		redirectToUser: false
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
				password: this.state.newUser.password,
				userName: this.state.newUser.userName,
				firstName: this.state.newUser.firstName,
				lastName: this.state.newUser.lastName,
				age: this.state.newUser.age,
				photoUrl: this.state.newUser.photoUrl,
				location: this.state.newUser.location,
				bio: this.state.newUser.bio,
				comments: [],
				events: []
			})
			.then((res) => {
				const malesList = [ this.state.males ];
				malesList.unshift(res.data);
				this.setState({
					newUser: {
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



	handleMaleChange = (e) => {
		const changeNewMale = { ...this.state.newMale };
		changeNewMale[e.target.name] = e.target.value;
		this.setState({ newUser: changeNewMale });
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
		if (this.state.redirectToUser) {
			return <Redirect to={`/users/:userId`} />;
		}

		return (
			<div>   
        {this.state.males.map((male) => {
					return (
						<div>
						</div>
					);
				})}
				<br />
				<br />
				 <button className="" onClick={this.toggleEditForm}>Straight Men</button>
        {
          this.state.displayMaleForm ?
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
										onChange={this.handleMaleChange}
										value={this.state.newUser.firstName}
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
										onChange={this.handleMaleChange}
										value={this.state.newUser.lastName}
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
									onChange={this.handleMaleChange}
									value={this.state.newUser.photoUrl}
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
									type="text"
									onChange={this.handleMaleChange}
									value={this.state.newUser.age}
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
									onChange={this.handleMaleChange}
									value={this.state.newUser.location}
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
										onChange={this.handleMaleChange}
										value={this.state.newUser.bio}
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
				: null
								}
								
							</div>			
		
		);
	}
}

	