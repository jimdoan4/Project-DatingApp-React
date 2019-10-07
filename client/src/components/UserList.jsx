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
import { ButtonGroup } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import Footer from './Footer';
import { UserContainer } from './styled-components/UserListStyles'

export default class UserList extends Component {
	state = {
		users: [],
		newUser: {
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
		displayUserForm: false,
		userId: this.props.match.params.userId
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

	deleteUser = (e, user) => {
		e.preventDefault();
		axios.delete(`/api/users/${user._id}`).then((res) => {
			this.findAllUsers();
		});
	};

	handleChange = (e) => {
		const changeNewUser = { ...this.state.newUser };
		changeNewUser[e.target.name] = e.target.value;
		this.setState({ newUser: changeNewUser });
	};

	toggleUserForm = () => {
		this.setState((state, props) => {
			return { displayUserForm: !state.displayUserForm };
		});
	};

	render() {
		if (this.state.redirectToUser) {
			return <Redirect to={`/users}`} />;
		}
		return (
			<UserContainer>
				<div
					className="row"
				>
					{this.state.users.map((user) => {
						return (
							<div
								className="col text-center"
								style={{
									marginBottom: '1px',
									marginTop: '20px'

								}}
							>
								<CardGroup>
									<Card
										key={user._id}
										className="text-center female-profile"
									>
										<Card.Img
											className="text-center zoom female-img"
											variant="top"
											src={user.photoUrl}
										/>

										<Card.Body>
											<div key={user._id}>
												<Link to={`/users/${user._id}`} key={user._id}>
													<button
													className= 'rockstar interest-button'
													>
														Interested
													</button>
												</Link>

												<button
													key={user._id}
													onClick={(e) => this.deleteUser(e, user)}
													type="button"
													className= 'rockstar not-interested-button'
												>
													Not Interested
												</button>
											</div>
										</Card.Body>
									</Card>
								</CardGroup>
							</div>
						);
					})}
				</div>
			</UserContainer>
		);
	}
}
