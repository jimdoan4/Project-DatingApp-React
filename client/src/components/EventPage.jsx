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
import { Row } from 'react-bootstrap';

export default class EventPage extends Component {
	state = {
		userId: this.props.userId,
		eventId: this.props.eventId,
		events: [],
		newEvent: {
			eventName: '',
			time: '',
			price: '',
			withWho: '',
			photoUrl: ''
		},
		redirectToEvent: false,
		displayEditForm: false,
		displayEvenForm: false
	};

	getAllEvents = () => {
		axios.get(`/api/users/${this.state.userId}/events`).then((res) => {
			console.log(res.data);
			this.setState({ events: res.data });
		});
	};

	componentDidMount = () => {
		this.getAllEvents();
	};

	toggleEditForm = () => {
		this.setState((state, props) => {
			return { displayEditForm: !state.displayEditForm };
		});
	};

	toggleEventForm = () => {
		this.setState((state, props) => {
			return { displayEventForm: !state.displayEventForm };
		});
	};

	handleChange = (e) => {
		const changeNewEvent = { ...this.state.newEvent };
		changeNewEvent[e.target.name] = e.target.value;
		this.setState({ newEvent: changeNewEvent });
	};

	createEvent = (e) => {
		e.preventDefault();
		axios
			.post(`/api/users/${this.state.userId}/events`, {
				eventName: this.state.newEvent.eventName,
				time: this.state.newEvent.time,
				price: this.state.newEvent.price,
				withWho: this.state.newEvent.withWho,
				photoUrl: this.state.newEvent.photoUrl
			})
			.then((res) => {
				const eventsList = [ ...this.state.events ];
				eventsList.unshift(res.data);
				this.setState({
					newEvent: {
						eventName: '',
						time: '',
						price: '',
						withWho: '',
						photoUrl: ''
					},
					displayEventForm: false,
					events: eventsList
				});
			});
		this.getAllEvents();
	};

	handleChange = (e) => {
		const changedEvent = { ...this.state.newEvent };
		changedEvent[e.target.name] = e.target.value;
		this.setState({ newEvent: changedEvent });
	};

	updateEvent = (e) => {
		e.preventDefault();
		axios
			.put(`/api/users/${this.state.userId}/events`, {
				eventName: this.state.newEvent.eventName,
				time: this.state.newEvent.time,
				price: this.state.newEvent.price,
				withWho: this.state.newEvent.withWho,
				photoUrl: this.state.newEvent.photoUrl
			})
			.then((res) => {
				this.setState({ user: res.data, displayEditForm: false });
			});
		this.getAllEvents();
	};

	deleteEvent = (e, event) => {
		e.preventDefault();
		axios.delete(`/api/users/${this.state.userId}/events/${event._id}`).then((res) => {
			this.getAllEvents();
		});
	};

	render() {
		if (this.state.redirectToUser) {
			return <Redirect to={`/users/`} />;
		}
		return (
			<div className="text-center" style={{ marginLeft: '', position: 'block' }}>
				<h3 style= {{marginTop: '30px'}}>Set up a Date with your MATCH</h3>
				<button
					style={{
						marginTop: '14px',
						backgroundColor: 'white',
						borderColor: 'black',
						color: 'black'
					}}
					onClick={this.toggleEventForm}
				>
					List of Scheduled Events
				</button>
				<div className="">
					{this.state.events.map((event) => {
						return (
							<div>
								{this.state.displayEventForm ? (
									// <Col>
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
											<p>Event Name: {event.eventName}</p>
											<p>Time: {event.time}</p>
											<p>Average Price: {event.price}</p>
											<p>Who is my date? {event.withWho}</p>
											<p>What time is the event? {event.time}</p>
											<Container
												style={{ marginLeft: '0px', textAlign: 'center' }}
												className="text-center"
											>
												<Link
													to={`/users/${this.state.userId}/events/${event._id}`}
													key={event._id}
												>
													<button
														style={{
															backgroundColor: 'white',
															borderColor: 'black',
															color: 'black',
															marginRight: '10px'
														}}
													>
														Edit Event
													</button>
												</Link>
												<button
													style={{
														backgroundColor: 'white',
														borderColor: 'black',
														color: 'black'
													}}
													key={event._id}
													onClick={(e) => this.deleteEvent(e, event)}
												>
													Delete Event
												</button>
											</Container>
										</Card>
									// </Col>
								) : null}
							</div>
						);
					})}
				
						<div className="text-center col" style={{ marginTop: '30px' }}>
							<button
								style={{
									marginBottom: '20px',
									backgroundColor: 'white',
									borderColor: 'black',
									color: 'black'
								}}
								onClick={this.toggleEditForm}
							>
								Add an Event
							</button>
							{this.state.displayEditForm ? (
								<div className="container text-center">
									<Card className="container" style={{ width: '25rem', height: '31.8rem', backgroundColor: '#d4d5d5' }}>
										<Form
											className="text-center"
											style={{
												display: 'inline-block',
												backgroundColor: 'white',
												paddingRight: '25px',
												marginTop: '14px'
											}}
											onSubmit={this.createEvent}
										>
											<Form.Row>
												<Form.Group as={Col} controlId="formGridEmail">
													<Form.Label htmlFor="eventName">Event Name</Form.Label>
													<Form.Control
														className="text-center"
														type="text"
														name="eventName"
														onChange={this.handleChange}
														value={this.state.newEvent.eventName}
														placeholder="Enter Event"
													/>
												</Form.Group>
											</Form.Row>
											<Form.Row>
												<Form.Group as={Col} controlId="formGridPassword">
													<Form.Label htmlFor="time">Time: </Form.Label>
													<Form.Control
														className="text-center"
														type="number"
														name="time"
														onChange={this.handleChange}
														value={this.state.newEvent.time}
														placeholder="What time is your date scheduled?"
													/>
												</Form.Group>
											</Form.Row>
											<Form.Row>
												<Form.Group as={Col} controlId="formGridPassword">
													<Form.Label htmlFor="price">Price? </Form.Label>
													<Form.Control
														className="text-center"
														type="number"
														name="price"
														onChange={this.handleChange}
														value={this.state.newEvent.price}
														placeholder="Enter the price"
													/>
												</Form.Group>
											</Form.Row>
											<Form.Row>
												<Form.Group as={Col} controlId="formGridPassword">
													<Form.Label htmlFor="withWho">Who is your date? </Form.Label>
													<Form.Control
														className="text-center"
														type="text"
														name="withWho"
														onChange={this.handleChange}
														value={this.state.newEvent.withWho}
														placeholder="Enter your date's name"
													/>
												</Form.Group>
											</Form.Row>
											<Form.Row />
											<Container
												style={{ marginLeft: '15px', textAlign: 'center' }}
												className="text-center"
											>
												<button
													className="text-center"
													variant="primary"
													type="submit"
													style={{
														backgroundColor: 'white',
														borderColor: 'black',
														color: 'black',
														marginRight: '10px'
													}}
												>
													Add Event
												</button>
											</Container>
										</Form>
									</Card>
								</div>
							) : null}
						</div>
					
				</div>
			</div>
		);
	}
}
