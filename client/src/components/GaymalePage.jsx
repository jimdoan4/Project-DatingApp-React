import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default class GaymalePage extends Component {
	state = {
		gaymaleId: this.props.gaymaleId,
		gaymales: [],
		gaymale: {
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
		redirectToGaymale: false,
		displayEditForm: false
	};

	getSingleGaymaleData = () => {
		axios.get(`/api/gaymales/${this.state.gaymaleId}`).then((res) => {
			this.setState({ gaymale: res.data });
		});
	};

	componentDidMount = () => {
		this.getSingleGaymaleData();
	};

	toggleEditForm = () => {
		this.setState((state, props) => {
			return { displayEditForm: !state.displayEditForm };
		});
	};

	handleChange = (e) => {
		const updatedGaymale = { ...this.state.gaymale };
		updatedGaymale[e.target.name] = e.target.value;
		this.setState({ gaymale: updatedGaymale });
	};

	handleChange = (e) => {
		const newGaymale = { ...this.state.gaymale };
		newGaymale[e.target.name] = e.target.value;
		this.setState({ currentGaymale: newGaymale });
	};

	updateGaymale = (e) => {
		e.preventDefault();
		axios
			.put(`/api/gaymales/${this.state.gaymaleId}`, {
				firstName: this.state.gaymale.firstName,
				lastName: this.state.gaymale.lastName,
				age: this.state.gaymale.age,
				photoUrl: this.state.gaymale.photoUrl,
				location: this.state.gaymale.location,
				bio: this.state.gaymale.bio,
				comments: {},
				events: {}
			})
			.then((res) => {
				this.setState({ gaymale: res.data, displayEditForm: false });
			});
		this.getSingleGaymaleData();
	};

	deleteGaymale = () => {
		axios.delete(`/api/gaymales/${this.state.gaymaleId}`).then((res) => {
			this.setState({ redirectToGaymale: true });
		});
	};

	render() {
		if (this.state.redirectToGaymale) {
			return <Redirect to={`/gaymales/`} />;
		}
		return (
			<div>
				{/* <Jumbotron fluid className="cart" style={{ height: '26rem' }} /> */}

				<form onSubmit={this.updateGaymale}>
					<div style={{ marginTop: '30px', marginBottom: '100px' }}>
						<Card
							className="container"
							style={{ width: '28rem', marginBottom: '20px', backgroundColor: '#adbfd4' }}
						>
							<Card>
								<Card.Img className="zoom" variant="top" src={this.state.gaymale.photoUrl} alt="top" />
								<Card.Body>
									<Card.Title>
										{this.state.gaymale.firstName}
										&nbsp;
										{this.state.gaymale.lastName}
									</Card.Title>
									<Card.Title>{this.state.gaymale.age}</Card.Title>
									<Card.Title>{this.state.gaymale.bio}</Card.Title>
									<Card.Title>{this.state.gaymale.location}</Card.Title>
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
										<Link to={`/gaymales/${this.state.gaymaleId}`}>Edit User</Link>
									</button>
									<button
										style={{ backgroundColor: 'white', borderColor: 'black', color: 'black' }}
										onClick={this.deleteGaymale}
									>
										Delete User
									</button>
								
								</Container>
							</Card>
						</Card>
					</div>
				</form>
			</div>
		);
	}
}
