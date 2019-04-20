import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default class MalePage extends Component {
	state = {
		maleId: this.props.maleId,
		males: [],
		male: {
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
		redirectToMale: false,
		displayEditForm: false
	};

	getSingleMaleData = () => {
		axios.get(`/api/males/${this.state.maleId}`).then((res) => {
			this.setState({ male: res.data });
		});
	};

	componentDidMount = () => {
		this.getSingleMaleData();
	};

	toggleEditForm = () => {
		this.setState((state, props) => {
			return { displayEditForm: !state.displayEditForm };
		});
	};

	handleChange = (e) => {
		const updatedMale = { ...this.state.male };
		updatedMale[e.target.name] = e.target.value;
		this.setState({ male: updatedMale });
	};

	handleChange = (e) => {
		const newMale = { ...this.state.male };
		newMale[e.target.name] = e.target.value;
		this.setState({ currentMale: newMale });
	};

	updateMale = (e) => {
		e.preventDefault();
		axios
			.put(`/api/males/${this.state.maleId}`, {
				firstName: this.state.male.firstName,
				lastName: this.state.male.lastName,
				age: this.state.male.age,
				photoUrl: this.state.male.photoUrl,
				location: this.state.male.location,
				bio: this.state.male.bio,
				comments: {},
				events: {}
			})
			.then((res) => {
				this.setState({ male: res.data, displayEditForm: false });
			});
		this.getSingleMaleData();
	};

	deleteMale = () => {
		axios.delete(`/api/males/${this.state.maleId}`).then((res) => {
			this.setState({ redirectToMale: true });
		});
	};

	render() {
		if (this.state.redirectToMale) {
			return <Redirect to={`/males/`} />;
		}
		return (
			<div>
				{/* <Jumbotron fluid className="cart" style={{ height: '26rem' }} /> */}

				<form onSubmit={this.updateMale}>
					<div style={{ marginTop: '30px', marginBottom: '30px' }}>
						<Card
							className="container"
							style={{ width: '28rem', marginBottom: '20px', backgroundColor: '#1e3959' }}
						>
							<Card>
								<Card.Img className="zoom" variant="top" src={this.state.male.photoUrl} alt="top" />
								<Card.Body>
									<Card.Title>
										{this.state.male.firstName}
										&nbsp;
										{this.state.male.lastName}
									</Card.Title>
									<Card.Title>{this.state.male.age}</Card.Title>
									<Card.Title>{this.state.male.bio}</Card.Title>
									<Card.Title>{this.state.male.location}</Card.Title>
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
										<Link to={`/males/${this.state.maleId}`}>Edit User</Link>
									</button>
									<button
										style={{ backgroundColor: 'white', borderColor: 'black', color: 'black' }}
										onClick={this.deleteMale}
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
