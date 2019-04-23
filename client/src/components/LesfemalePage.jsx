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
		lesbianId: this.props.lesbianId,
		lesbians: [],
		lesbian: {
			_id: '',
			firstName: '',
			lastName: '',
			age: '',
			photoUrl: '',
			location: '',
			bio: ''
		},
		redirectToLesbian: false,
		displayLesbianForm: false
	};

	getSingleLesbianData = () => {
		axios.get(`/api/lesbians/${this.state.lesbianId}`).then((res) => {
			this.setState({ lesbian: res.data });
		});
	};

	componentDidMount = () => {
		this.getSingleLesbianData();
	};

	toggleLesbianForm = () => {
		this.setState((state, props) => {
			return { displayLesbianForm: !state.displayLesbianForm };
		});
	};

	handleChange = (e) => {
		const updateLesbian = { ...this.state.lesbian };
		updateLesbian[e.target.name] = e.target.value;
		this.setState({ lesbian: updateLesbian });
	};

	handleChange = (e) => {
		const newLesbian = { ...this.state.lesbian };
		newLesbian[e.target.name] = e.target.value;
		this.setState({ lesbian: newLesbian });
	};

	updateLesbian = (e) => {
		e.preventDefault();
		axios
			.put(`/api/lesbians/${this.state.lesbianId}`, {
				firstName: this.state.lesbian.firstName,
				lastName: this.state.lesbian.lastName,
				age: this.state.lesbian.age,
				photoUrl: this.state.lesbian.photoUrl,
				location: this.state.lesbian.location,
				bio: this.state.lesbian.bio
			})
			.then((res) => {
				this.setState({ lesbian: res.data, displayLesbianForm: false });
			});
		this.getSingleLesbianData();
	};

	deleteLesbian = () => {
		axios.delete(`/api/lesbians/${this.state.lesbianId}`).then((res) => {
			this.setState({ redirectToLesbian: true });
		});
	};

	render() {
		if (this.state.redirectToLesbian) {
			return <Redirect to={`/lesbians/`} />;
		}
		return (
			<div>
				<div style={{ marginTop: '30px', marginBottom: '100px' }}>
					<Card className="" style={{ width: '28rem', marginBottom: '20px', backgroundColor: '#86074e' }}>
						<Card>
							<Card.Img className="zoom" variant="top" src={this.state.lesbian.photoUrl} alt="top" />
							<Card.Body>
								<Card.Title>
									{this.state.lesbian.firstName}
									&nbsp;
									{this.state.lesbian.lastName}
								</Card.Title>
								<Card.Title>{this.state.lesbian.age}</Card.Title>
								<Card.Title>{this.state.lesbian.bio}</Card.Title>
								<Card.Title>{this.state.lesbian.location}</Card.Title>
							</Card.Body>
							<Container style={{ textAlign: 'center', marginBottom: '30px', marginTop: '8px' }}>
								<button
									onClick={this.toggleLesbianForm}
									style={{
										backgroundColor: 'white',
										borderColor: 'black',
										color: 'black',
										marginRight: '10px'
									}}
								>
									Edit Account
								</button>
								<button
									style={{ backgroundColor: 'white', borderColor: 'black', color: 'black' }}
									onClick={this.deleteLesbian}
								>
									Delete Account
								</button>
							</Container>
						</Card>
					</Card>
				</div>
				{this.state.displayLesbianForm ? (
					<form
						style={{ marginTop: '50px', marginRight: '50px' }}
						onSubmit={this.updateLesbian}
						className="col"
					>
						<div className="col">
							<div className="col s12 m6 text-center">
								<label style={{ marginRight: '30px', marginTop: '30px' }} htmlFor="firstName">
									First Name
								</label>
								<input
									style={{ height: '50px', width: '320px' }}
									className="text-center"
									id="firstName"
									type="text"
									name="firstName"
									onChange={this.handleChange}
									value={this.state.lesbian.firstName}
								/>
							</div>
							<div className="col s12 m6 text-center">
								<label style={{ marginRight: '30px', marginTop: '40px' }} htmlFor="lastName">
									Last Name{' '}
								</label>
								<input
									style={{ height: '54px', width: '390px', marginRight: '53px' }}
									className="text-center"
									id="lastName"
									type="text"
									name="lastName"
									onChange={this.handleChange}
									value={this.state.lesbian.lastName}
								/>
							</div>
							<div className="col s12 m6 text-center">
								<label style={{ marginRight: '30px', marginTop: '40px' }} htmlFor="age">
									Age{' '}
								</label>
								<input
									style={{ height: '54px', width: '390px', marginRight: '53px' }}
									className="text-center"
									id="age"
									type="number"
									name="age"
									onChange={this.handleChange}
									value={this.state.lesbian.age}
								/>
							</div>
							<div className="col s12 m6 text-center">
								<label style={{ marginRight: '30px', marginTop: '40px' }} htmlFor="bio">
									Biography
								</label>
								<input
									style={{ height: '54px', width: '390px', marginRight: '53px' }}
									className="text-center"
									id="bio"
									type="text"
									name="bio"
									onChange={this.handleChange}
									value={this.state.lesbian.bio}
								/>
							</div>
							<div className="col s12 m6 text-center">
								<label style={{ marginRight: '30px', marginTop: '40px' }} htmlFor="location">
									Location{' '}
								</label>
								<input
									style={{ height: '54px', width: '390px', marginRight: '53px' }}
									className="text-center"
									id="location"
									type="text"
									name="location"
									onChange={this.handleChange}
									value={this.state.lesbian.location}
								/>
							</div>
							<div className="col s12 m6 text-center">
								<label style={{ marginRight: '30px', marginTop: '40px' }} htmlFor="photoUrl">
									Photo:{' '}
								</label>
								<input
									style={{ height: '54px', width: '390px', marginRight: '53px' }}
									className="text-center"
									id="photoUrl"
									type="text"
									name="photoUrl"
									onChange={this.handleChange}
									value={this.state.lesbian.photoUrl}
								/>
							</div>
						</div>
						<div className="text-center" style={{ marginTop: '20px' }}>
							<button className="text-center">Submit</button>
						</div>
					</form>
				) : null}
			</div>
		);
	}
}
