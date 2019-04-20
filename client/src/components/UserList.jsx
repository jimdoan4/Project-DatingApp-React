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
		// displayUserForm: !false,
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

	deleteUser = () => {
		axios.delete(`/api/users/${this.state.userId}`).then((res) => {
			this.setState({ redirectToUser: true });
		});
	};


	handleChange = (e) => {
		const changeNewUser = { ...this.state.newUser };
		changeNewUser[e.target.name] = e.target.value;
		this.setState({ newUser: changeNewUser });
	};


	toggleUserForm = () => {
        this.setState((state, props) => {
            return {displayUserForm: !state.displayUserForm}
        })
	}



	render() {
		if (this.state.redirectToUser) {
			return <Redirect to={`/users}`} />;
		}
		return (
			<div>
				{/* <Jumbotron fluid className="man" style={{ height: '26rem' }}>
					<Container className="homefont" style={{ marginTop: '210px' }}>
						<h1 style={{ fontSize: '50px', fontWeight: 'bold', color: 'white' }}>Let it Breathe</h1>
					</Container>
				</Jumbotron> */}
		{/* {
          this.state.displayUserForms ? */}
				<div
					className="row"
					style={{
						marginLeft: '30px',
						marginBottom: '30px',
						marginTop: '50px'
					}}
				>
					{this.state.users.map((user) => {
						return (
							<div
								className="row text-center"
								style={{
									marginLeft: '20px',
									marginBottom: '20px',
									marginTop: '30px'
								}}
							>
								<CardGroup className="collapse-show" id="collapseExample">
									<Card
										key={user._id}
										className="text-center"
										style={{
											width: '16.8rem',
											marginLeft: '30px',
											marginRight: '30px',
											backgroundColor: '#efe8e8'
										}}
									>
										<Card.Img
											className="text-center zoom"
											style={{ height: '250px', width: '267px' }}
											variant="top"
											src={user.photoUrl}
										/>

										<Card.Body>
											<Card.Title style={{ color: 'black' }}>{user.firstName}</Card.Title>
											<Card.Title style={{ color: 'black' }}>{user.age}</Card.Title>
											{/* <Card.Text style={{ color: 'black' }}>{user.bio}</Card.Text> */}
											<Card.Text style={{ color: 'black' }}>{user.location}</Card.Text>
											{/* <div key={user._id}>
												<Link to={`/users/${user._id}`} key={user._id}>
													<button style={{ marginRight: '16px' }}>Interested</button>
												</Link>
												<button style= {{color: 'black'}} data-toggle="collapse">Not Interested</button>
											</div> */}
											<div key={user._id}>
												<Link to={`/users/${user._id}`} key={user._id}>
													<button style={{ marginRight: '16px' }}>Interested</button>
												</Link>
												<button
												    key={user._id}
													// onClick={this.toggleUsersForm}
													type="button"
									
													style={{ color: 'black' }}
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

					{/* <ButtonToolbar className="text-center mb-3" aria-label="Toolbar with Button groups">
					 <ButtonGroup className= "text-center mr-2" aria-label="First group">
      					<Button variant="secondary">1</Button>
      <Button variant="secondary">2</Button>
      <Button variant="secondary">3</Button>
      <Button variant="secondary">4</Button>
	    <Button variant="secondary">5</Button>
		  <Button variant="secondary">6</Button>
		    <Button variant="secondary">7</Button>
    </ButtonGroup>
	</ButtonToolbar> */}
				</div> 
				{/* null
} */}
			</div>
		);
	}
}
