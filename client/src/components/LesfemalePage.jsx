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
		lesfemaleId: this.props.lesfemaleId,
		lesfemales: [],
		lesfemale: {
			_id: '',
			firstName: '',
			lastName: '',
			age: '',
			photoUrl: '',
			location: '',
			bio: '',
			comments: [],
			events: []
		},
		redirectToLesfemale: false,
		displayEditForm: false
	};

	getSingleLesfemaleData = () => {
		axios.get(`/api/lesfemales/${this.state.lesfemaleId}`).then((res) => {
			this.setState({ lesfemale: res.data });
		});
	};

	componentDidMount = () => {
		this.getSingleLesfemaleData();
	};

	toggleEditForm = () => {
		this.setState((state, props) => {
			return { displayEditForm: !state.displayEditForm };
		});
	};

	handleChange = (e) => {
		const updatedLesfemale = { ...this.state.lesfemale };
		updatedLesfemale[e.target.name] = e.target.value;
		this.setState({ lesfemale: updatedLesfemale });
	};

	handleChange = (e) => {
		const newLesfemale = { ...this.state.lesfemale };
		newLesfemale[e.target.name] = e.target.value;
		this.setState({ currentLesfemale: newLesfemale });
	};

	updateLesfemale = (e) => {
		e.preventDefault();
		axios
			.put(`/api/lesfemales/${this.state.lesfemaleId}`, {
				firstName: this.state.lesfemale.firstName,
				lastName: this.state.lesfemale.lastName,
				age: this.state.lesfemale.age,
				photoUrl: this.state.lesfemale.photoUrl,
				location: this.state.lesfemale.location,
				bio: this.state.lesfemale.bio,
				comments: {},
				events: {}
			})
			.then((res) => {
				this.setState({ lesfemale: res.data, displayEditForm: false });
			});
		this.getSingleLesfemaleData();
	};

	deleteLesfemale = () => {
		axios.delete(`/api/lesfemales/${this.state.lesfemaleId}`).then((res) => {
			this.setState({ redirectToLesfemale: true });
		});
	};

	render() {
		if (this.state.redirectToLesfemale) {
			return <Redirect to={`/lesfemales/`} />;
		}
		return (
			<div>
				{/* <Jumbotron fluid className="cart" style={{ height: '26rem' }} /> */}

				<form onSubmit={this.updateLesfemale}>
					<div style={{ marginTop: '30px', marginBottom: '100px' }}>
						<Card
							className="container"
							style={{ width: '28rem', marginBottom: '20px', backgroundColor: '#86074e' }}
						>
							<Card>
								<Card.Img className="zoom" variant="top" src={this.state.lesfemale.photoUrl} alt="top" />
								<Card.Body>
									<Card.Title>
										{this.state.lesfemale.firstName}
										&nbsp;
										{this.state.lesfemale.lastName}
									</Card.Title>
									<Card.Title>{this.state.lesfemale.age}</Card.Title>
									<Card.Title>{this.state.lesfemale.bio}</Card.Title>
									<Card.Title>{this.state.lesfemale.location}</Card.Title>
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
										<Link to={`/lesfemales/${this.state.lesfemaleId}`}>Edit User</Link>
									</button>
									<button
										style={{ backgroundColor: 'white', borderColor: 'black', color: 'black' }}
										onClick={this.deleteLesfemale}
									>
										Delete User
									</button>
									{/* <div
										style={{
											alignItems: 'center',
											justifyContent: 'center',
											display: 'flex',
											width: '30px',
											height: '40px',
											marginTop: '80px',
											marginLeft: '-46px',
											marginRight: '205px'
										}}
									>
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
