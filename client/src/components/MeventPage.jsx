import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default class MeventPage extends Component {
	state = {
		maleId: this.props.maleId,
		meventId: this.props.meventId,
		mevents: [],
		newMevent: {
			eventName: '',
			time: '',
			price: '',
			withWho: ''
		},

		redirectToMevent: false,
		displayMeventForm: false,
		displayDateForm: false,
		displayEditForm: false
	};

	getAllMevents = () => {
		axios.get(`/api/males/${this.state.maleId}/mevents`).then((res) => {
			console.log(res.data);
			this.setState({ mevents: res.data });
		});
	};

	componentDidMount = () => {
		this.getAllMevents();
	};

	toggleMeventForm = () => {
		this.setState((state, props) => {
			return { displayMeventForm: !state.displayMeventForm };
		});
	};

	toggleDateForm = () => {
		this.setState((state, props) => {
			return { displayDateForm: !state.displayDateForm };
		});
	};

	toggleEditForm = (event) => {
		this.setState((state, props) => {
			return { displayEditForm: !state.displayEditForm, newMevent: event };
		});
	};

	handleChange = (e) => {
		const changeNewMevent = { ...this.state.newMevent };
		changeNewMevent[e.target.name] = e.target.value;
		this.setState({ newMevent: changeNewMevent });
	};

	createMevent = (e) => {
		e.preventDefault();
		axios
			.post(`/api/males/${this.state.maleId}/mevents`, {
				eventName: this.state.newMevent.eventName,
				time: this.state.newMevent.time,
				price: this.state.newMevent.price,
				withWho: this.state.newMevent.withWho
			})
			.then((res) => {
				const meventsList = [ ...this.state.mevents ];
				meventsList.unshift(res.data);
				this.setState({
					newMevent: {
						eventName: '',
						time: '',
						price: '',
						withWho: ''
					},
					displayMeventForm: false,
					mevents: meventsList
				});
			});
		this.getAllMevents();
	};

	updateMevent = (e) => {
		e.preventDefault();
		axios
			.put(`/api/males/${this.state.maleId}/mevents/${this.state.newMevent._id}`, {
				eventName: this.state.newMevent.eventName,
				time: this.state.newMevent.time,
				price: this.state.newMevent.price,
				withWho: this.state.newMevent.withWho
			})
			.then((res) => {
				this.getAllMevents();
			});
	};

	deleteMevent = (e, mevent) => {
		e.preventDefault();
		axios.delete(`/api/males/${this.state.maleId}/mevents/${mevent._id}`).then((res) => {
			this.getAllMevents();
		});
	};

	render() {
		if (this.state.redirectToMevent) {
			return <Redirect to={`/males/`} />;
		}
		return (
			<div className="text-center" style={{ marginLeft: '90px' }}>
				<h3 style= {{marginTop: '30px'}}>Set up a Date with your MATCH</h3>
				<button
					style={{
						marginTop: '14px',
						backgroundColor: 'white',
						borderColor: 'black',
						color: 'black'
					}}
					onClick={this.toggleDateForm}
				>
					List of Scheduled Events
				</button>
				{this.state.mevents.map((mevent) => {
					return (
						<div>
							{this.state.displayDateForm ? (
								<Col>
									<Card
										className="text-center"
										style={{
											backgroundColor: 'white',
											paddingLeft: '24px',
											paddingRight: '24px',
											paddingTop: '24px',
											paddingBottom: '24px',
											marginTop: '26px'
										}}
									>
										<p>Event Name: {mevent.eventName}</p>
										<p>What time is the Event: {mevent.time}</p>
										<p>Average Price: {mevent.price}</p>
										<p>Who is my date? {mevent.withWho}</p>

										<Container
											style={{ marginLeft: '0px', textAlign: 'center' }}
											className="text-center"
										>
											<Link key={mevent._id}>
												<button
													style={{
														backgroundColor: 'white',
														borderColor: 'black',
														color: 'black',
														marginRight: '10px'
													}}
													key={mevent._id}
													onClick={() => this.toggleEditForm(mevent)}
												>
													Edit Event
												</button>
											</Link>
											<button
												key={mevent._id}
												onClick={(e) => this.deleteMevent(e, mevent)}
												style={{
													backgroundColor: 'white',
													borderColor: 'black',
													color: 'black'
												}}
											>
												Delete Event
											</button>
										</Container>
									</Card>
								</Col>
							) : null}
						</div>
					);
				})}

				<Col>
					<div className="text-center" style={{ marginTop: '30px' }}>
						<button
							style={{
								marginBottom: '20px',
								backgroundColor: 'white',
								borderColor: 'black',
								color: 'black'
							}}
							onClick={this.toggleMeventForm}
						>
							Add an Event
						</button>
						{this.state.displayMeventForm ? (
							<div className="container">
								<Card className="container" style={{ width: '25rem', height: '34.4rem', backgroundColor: '#d4d5d5' }}>
									<Form
										className="text-center"
										style={{
											display: 'inline-block',
											backgroundColor: 'white',
											paddingRight: '25px',
											marginTop: '14px'
										}}
										onSubmit={this.createMevent}
									>
										<Form.Row>
											<Form.Group as={Col} controlId="formGridEmail">
												<Form.Label htmlFor="eventName">Event Name</Form.Label>
												<Form.Control
													className="text-center"
													type="text"
													name="eventName"
													onChange={this.handleChange}
													value={this.state.newMevent.eventName}
													placeholder="Enter Event"
												/>
											</Form.Group>
										</Form.Row>
										<Form.Row>
											<Form.Group as={Col} controlId="formGridPassword">
												<Form.Label htmlFor="time">What time is the Event: </Form.Label>
												<Form.Control
													className="text-center"
													type="number"
													name="time"
													onChange={this.handleChange}
													value={this.state.newMevent.time}
													placeholder="What time is your Event"
												/>
											</Form.Group>
										</Form.Row>
										<Form.Row>
											<Form.Group as={Col} controlId="formGridPassword">
												<Form.Label htmlFor="price">What is the cost of the Event: </Form.Label>
												<Form.Control
													className="text-center"
													type="number"
													name="price"
													onChange={this.handleChange}
													value={this.state.newMevent.price}
													placeholder="Enter the price"
												/>
											</Form.Group>
										</Form.Row>
										<Form.Row>
											<Form.Group as={Col} controlId="formGridPassword">
												<Form.Label htmlFor="withWho">Who is your Date: </Form.Label>
												<Form.Control
													className="text-center"
													type="text"
													name="withWho"
													onChange={this.handleChange}
													value={this.state.newMevent.withWho}
													placeholder="Enter your date's name"
												/>
											</Form.Group>
										</Form.Row>
										<Form.Row />
										<div style={{ marginLeft: '100px' }} className="text-center">
											<button
												className="text-center"
												variant="primary"
												type="submit"
												style={{
													marginRight: '140px',
													paddingLeft: '60px',
													paddingRight: '60px',
													marginTop: '1px',
													marginBottom: '15px',
													backgroundColor: 'white',
													borderColor: 'black',
													color: 'black'
												}}
											>
												Add Event
											</button>
										</div>
									</Form>
								</Card>
							</div>
						) : null}
					</div>
				</Col>
				{this.state.displayEditForm ? (
					<form
						onSubmit={this.updateMevent}
						style={{ marginTop: '50px', marginRight: '50px' }}
						className="col"
					>
						<div className="col">
							<div className="col s12 m6 text-center">
								<label style={{ marginRight: '30px', marginTop: '30px' }} htmlFor="firstName">
									Event Name
								</label>
								<input
									style={{ height: '50px', width: '320px' }}
									className="text-center"
									id="eventName"
									type="text"
									name="eventName"
									onChange={this.handleChange}
									value={this.state.newMevent.eventName}
								/>
							</div>
							<div className="col s12 m6 text-center">
								<label style={{ marginRight: '30px', marginTop: '40px' }} htmlFor="lastName">
									What time is the Event:{' '}
								</label>
								<input
									style={{ height: '54px', width: '390px', marginRight: '53px' }}
									className="text-center"
									id="time"
									type="text"
									name="time"
									onChange={this.handleChange}
									value={this.state.newMevent.time}
								/>
							</div>
							<div className="col s12 m6 text-center">
								<label style={{ marginRight: '30px', marginTop: '40px' }} htmlFor="age">
									Price: {' '}
								</label>
								<input
									style={{ height: '54px', width: '390px', marginRight: '53px' }}
									className="text-center"
									id="price"
									type="number"
									name="price"
									onChange={this.handleChange}
									value={this.state.newMevent.price}
								/>
							</div>
							<div className="col s12 m6 text-center">
								<label style={{ marginRight: '30px', marginTop: '40px' }} htmlFor="bio">
									With Who?
								</label>
								<input
									style={{ height: '54px', width: '390px', marginRight: '53px' }}
									className="text-center"
									id="withWho"
									type="text"
									name="withWho"
									onChange={this.handleChange}
									value={this.state.newMevent.withWho}
								/>
							</div>
						</div>
						<div className="text-center" style={{ marginTop: '20px' }}>
							<button
								style={{
									backgroundColor: 'white',
									borderColor: 'black',
									color: 'black'
								}}
								className="text-center"
							>
								Submit
							</button>
						</div>
					</form>
				) : null}
			</div>
		);
	}
}
