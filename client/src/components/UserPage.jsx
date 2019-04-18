import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
// import MapContainer from './Map.js';

export default class UserPage extends Component {
	state = {
		userId: this.props.userId,
		users: [],
		user: {
			_id: '',
			userName: '',
			password: '',
			firstName: '',
			lastName: '',
			age: '',
			photoUrl: '',
			location: '',
			bio: '',
			comments: [],
			events: []
		},
		redirectToUser: false,
		displayEditForm: false
	};

	getSingleUserData = () => {
		axios.get(`/api/users/${this.state.userId}`).then((res) => {
			this.setState({ user: res.data });
		});
	};

	componentDidMount = () => {
		this.getSingleUserData();
	};

	toggleEditForm = () => {
		this.setState((state, props) => {
			return { displayEditForm: !state.displayEditForm };
		});
	};

	handleChange = (e) => {
		const updatedUser = { ...this.state.user };
		updatedUser[e.target.name] = e.target.value;
		this.setState({ user: updatedUser });
	};

	handleChange = (e) => {
		const newUser = { ...this.state.user };
		newUser[e.target.name] = e.target.value;
		this.setState({ currentUser: newUser });
	};

	updateUser = (e) => {
		e.preventDefault();
		axios
			.put(`/api/users/${this.state.userId}`, {
				password: this.state.user.password,
				userName: this.state.user.userName,
				firstName: this.state.user.firstName,
				lastName: this.state.user.lastName,
				age: this.state.user.age,
				photoUrl: this.state.user.photoUrl,
				location: this.state.user.location,
				bio: this.state.user.bio,
				comments: {},
				events: {}
			})
			.then((res) => {
				this.setState({ user: res.data, displayEditForm: false });
			});
		this.getSingleUserData();
	};

	deleteUser = () => {
		axios.delete(`/api/users/${this.state.userId}`).then((res) => {
			this.setState({ redirectToUser: true });
		});
	};

	render() {
		if (this.state.redirectToUser) {
			return <Redirect to={`/users/`} />;
		}
		return (
			<div>
				{/* <Jumbotron fluid className="cart" style={{ height: '26rem' }} /> */}

				<form onSubmit={this.updateUser}>
					<div style={{ marginTop: '30px', marginBottom: '100px' }}>
						<Card
							className="container"
							style={{ width: '23rem', marginBottom: '20px', backgroundColor: '#efe8e8' }}
						>
							<Card>
								<Card.Img className= 'zoom' variant="top" src={this.state.user.photoUrl} alt="top" />
								<Card.Body>
									<Card.Title>
										{this.state.user.firstName}
										{this.state.user.lastName}
									</Card.Title>
									<Card.Title>{this.state.user.age}</Card.Title>
									<Card.Title>{this.state.user.bio}</Card.Title>
									<Card.Title>{this.state.user.location}</Card.Title>
								</Card.Body>
								<Container style={{ textAlign: 'center', marginBottom: '30px', marginTop: '8px' }}>
									<button
										style={{
											backgroundColor: 'white',
											borderColor: 'black',
											color: 'black',
											marginRight: '45px'
										}}
									>
										<Link to={`/users/${this.state.userId}`}>Edit User</Link>
									</button>
									<button
										style={{ backgroundColor: 'white', borderColor: 'black', color: 'black' }}
										onClick={this.deleteUser}
									>
										Delete User
									</button>
									{/* <div style= {{alignItems: 'center', justifyContent: 'center', display: 'flex',  width: '30px', height: '40px', marginTop: '80px', marginLeft: '-46px', marginRight: '205px' }}>
										<MapContainer user={this.state.user.location} />
										</div> */}
								</Container>
							</Card>
						</Card>
					</div>
				</form>
			</div>
		);
	}
}
