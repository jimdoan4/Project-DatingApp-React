import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';

export default class UserLogin extends Component {
	state = {
		users: [],
		newUser: {
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
		displayUserForm: false
	};

	componentDidMount = () => {
		this.findAllUsers();
	};

	findAllUsers = () => {
		axios.get('/api/users').then((res) => {
			this.setState({ users: res.data });
		});
	};

	createUser = (e) => {
		axios
			.post('/api/users', {
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
				const usersList = [ this.state.users ];
				usersList.unshift(res.data);
				this.setState({
					newUser: {
						userName: '',
						password: '',
						firstName: '',
						lastName: '',
						age: '',
						photoUrl: '',
						location: '',
						bio: '',
						comments: {},
						events: {}
					},
					displayUserForm: false,
					users: usersList
				});
			});
		this.findAllUsers();
	};

	handleChange = (e) => {
		const changeNewUser = { ...this.state.newUser };
		changeNewUser[e.target.name] = e.target.value;
		this.setState({ newUser: changeNewUser });
	};

	handleSignUp = (e) => {
		e.preventDefault();
		this.createUser();
    };
    
    render() {
		return (
			<div>
				{/* <Jumbotron fluid className="man" style={{ height: '26rem' }}>
					<Container className="homefont" style={{ marginTop: '210px' }}>
						<h1 style={{ fontSize: '50px', fontWeight: 'bold', color: 'white' }}>Let it Breathe</h1>
					</Container>
				</Jumbotron> */}
				<div className="row">
					{this.state.users.map((user) => {
						return (
							<div
								className="col"
								style={{
									marginLeft: '30px',
									marginRight: '30px',
									marginBottom: '30px'
								}}
							>
								<CardGroup className="row">
									<Card
										key={user._id}
										className="row text-center"
										style={{
											width: '18rem',
											marginLeft: '30px',
											marginRight: '30px'
										}}
									>
										<Link to={`/users/${user._id}`} key={user._id}>
											<Card.Img style= {{ height: '380px', width: '287px'}} variant="top" src={user.photoUrl} />
										</Link>
										<Card.Body>
											<Card.Title style={{ color: 'black' }}>{user.firstName}</Card.Title>
											<Card.Text style={{ color: 'black' }}>{user.bio}</Card.Text>
										</Card.Body>
									</Card>
								</CardGroup>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}