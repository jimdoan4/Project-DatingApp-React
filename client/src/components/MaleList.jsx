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

export default class MaleList extends Component {
	state = {
		males: [],
		newMale: {
			_id: '',
			firstName: '',
			lastName: '',
			age: '',
			photoUrl: '',
			location: '',
			bio: ''
		},
		redirectToUser: false,
		displayUserForm: false,
		maleId: this.props.match.params.maleId
	};

	componentDidMount = () => {
		this.findAllMales();
	};

	findAllMales = () => {
		axios.get('/api/males/').then((res) => {
			this.setState({ males: res.data });
		});
	};

	// createUser = (e) => {
	// 	axios
	// 		.post('/api/users', {
	// 			password: this.state.newUser.password,
	// 			userName: this.state.newUser.userName,
	// 			firstName: this.state.newUser.firstName,
	// 			lastName: this.state.newUser.lastName,
	// 			age: this.state.newUser.age,
	// 			photoUrl: this.state.newUser.photoUrl,
	// 			location: this.state.newUser.location,
	// 			bio: this.state.newUser.bio,
	// 			comments: [],
	// 			events: []
	// 		})
	// 		.then((res) => {
	// 			const malesList = [ this.state.males ];
	// 			malesList.unshift(res.data);
	// 			this.setState({
	// 				newMale: {
	// 					firstName: '',
	// 					lastName: '',
	// 					age: '',
	// 					photoUrl: '',
	// 					location: '',
	// 					bio: '',
	// 					comments: {},
	// 					events: {}
	// 				},
	// 				displayUserForm: false,
	// 				males: malesList
	// 			});
	// 		});
	// 	this.findAllMales();
	// };

	// deleteUser = () => {
	// 	axios.delete(`/api/users/${this.state.userId}`).then((res) => {
	// 		this.setState({ redirectToUser: true });
	// 	});
	// };

	// deleteUser = () => {
	// 	axios.delete(`/api/users/${this.state.userId}`).then((res) => {
	// 		this.setState({ redirectToUser: true });
	// 	});
	// };

	// handleChange = (e) => {
	// 	const changeNewUser = { ...this.state.newUser };
	// 	changeNewUser[e.target.name] = e.target.value;
	// 	this.setState({ newUser: changeNewUser });
	// };

	// handleSignUp = (e) => {
	// 	e.preventDefault();
	// 	this.createUser();
	// };
	//   toggleUserForm = () => {
    //     this.setState((state, props) => {
    //         return {displayUserForm: !state.displayUserForm}
    //     })
    // }

	render() {
		if (this.state.redirectToUser) {
			return <Redirect to={`/males}`} />;
		}
		return (
			<div>
				{/* <Jumbotron fluid className="man" style={{ height: '26rem' }}>
					<Container className="homefont" style={{ marginTop: '210px' }}>
						<h1 style={{ fontSize: '50px', fontWeight: 'bold', color: 'white' }}>Let it Breathe</h1>
					</Container>
				</Jumbotron> */}
				<div
					className="row"
					style={{
						marginLeft: '20px',
						marginBottom: '30px',
						marginTop: '50px'
					}}
				>
					{this.state.males.map((male) => {
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
										key={male._id}
										className="text-center hidden"
										style={{
											width: '16.8rem',
											marginLeft: '30px',
											marginRight: '30px',
											backgroundColor: '#1e3959'
										}}
									>
										<Card.Img
											className="text-center zoom"
											style={{ height: '250px', width: '267px' }}
											variant="top"
											src={male.photoUrl}
										/>

										<Card.Body>
											<Card.Title style={{ color: 'white' }}>{male.firstName}</Card.Title>
											<Card.Title style={{ color: 'white' }}>{male.age}</Card.Title>
											{/* <Card.Text style={{ color: 'white' }}>{male.bio}</Card.Text> */}
											<Card.Text style={{ color: 'white' }}>{male.location}</Card.Text>
											{/* <div key={user._id}>
												<Link to={`/users/${user._id}`} key={user._id}>
													<button style={{ marginRight: '16px' }}>Interested</button>
												</Link>
												<button style= {{color: 'black'}} data-toggle="collapse">Not Interested</button>
											</div> */}
											<div key={male._id}>
												<Link to={`/males/${male._id}`} key={male._id}>
													<button style={{ marginRight: '16px' }}>Interested</button>
												</Link>
												<button
												    key={male._id}
													onClick={this.toggleUserForm}
													type="button"
													data-toggle="collapse"
													data-target="#collapseExample"
													aria-expanded="false"
													aria-controls="collapseExample"
													style={{ color: 'black' }}
												>
													 {this.state.displayUserForm === true ? 'This person is blocked' : 'Not Interested'}
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
			</div>
		);
	}
}
