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

	deleteEvent = () => {
		axios.delete(`/api/users/${this.state.userId}/events/${this.state.eventId}`).then((res) => {
			this.setState({ redirectToEvent: true });
		});
	};

	render() {
		if (this.state.redirectToUser) {
			return <Redirect to={`/users/`} />;
		}
		return (
			<div>
				{this.state.events.map((event) => {
					return (
						<div>
							<h3>Set up a Date with your MATCH</h3>
							<Button onClick= {this.toggleEventForm}>List of Scheduled Events</Button>
							 {
          this.state.displayEventForm ?
							<Card>
								<Card className="text-center" style={{ backgroundColor: 'white', paddingLeft: '24px', paddingRight: '24px', paddingTop: '24px', paddingBottom: '24px' }}>
									<Card.Title><Link to={`/users/${this.state.userId}/events/${event._id}`} key={event._id}>
										Event Name: {event.eventName}
									</Link>
									</Card.Title>
									<Card.Title>Time: {event.time}</Card.Title>
									<Card.Title>Average Price: {event.price}</Card.Title>
										<Card.Title>Who is my date? {event.withWho}</Card.Title>
											<Card.Title>what time is the event? {event.time}</Card.Title>
												{/* <Card.Title>{event.photoUrl}</Card.Title> */}
								</Card>
							</Card> :
							null
							 }
						</div> 
						
					);
				})}
				{/* <br /> */}
				{/* <br />
				 */}
				 	 <button style= {{marginBottom: '20px'}} onClick={this.toggleEditForm}>Add an Event</button>
        {
          this.state.displayEditForm ?
				 <div className="container">
			
					<Card className="container" style={{ width: '25rem', height: '42.8rem' }}>
					
						 <Form
							className="text-center"
							style={{ display: 'inline-block', backgroundColor: 'white', paddingRight: '25px', marginTop: '14px' }}
							onSubmit={this.createEvent}
						>
							<Form.Row>
								<Form.Group as={Col} controlId="formGridEmail">
									<Form.Label htmlFor="eventName">Event Name</Form.Label>
									<Form.Control
									className= 'text-center'
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
									<Form.Label htmlFor="time">Time:  </Form.Label>
									<Form.Control
									className= 'text-center'
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
									className= 'text-center'
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
									className= 'text-center'
										type="text"
										name="withWho"
										onChange={this.handleChange}
										value={this.state.newEvent.withWho}
										placeholder="Enter your date's name"
									/>
								</Form.Group>
							</Form.Row>
								<Form.Row>
								<Form.Group as={Col} controlId="formGridPassword">
									<Form.Label htmlFor="withWho">Who is your date? </Form.Label>
									<Form.Control
									className= 'text-center'
										type="text"
										name="withWho"
										onChange={this.handleChange}
										value={this.state.newEvent.withWho}
										placeholder="Enter your date's name"
									/>
								</Form.Group>
							</Form.Row>
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
										marginBottom: '15px'
									}}
								>
									Add Event
								</button>
								{/* <Link
											className="text-center"
											to={`users/${this.state.userId}/events/${event._id}`}
										> */}
								{/* <Button
								// onClick = {this.deleteEvent}
								className='text-center'
								variant="primary"
								type="submit"
								style={{
									marginRight: '140px',
									paddingLeft: '30px',
									paddingRight: '30px',
									marginTop: '7px',
									marginBottom: '25px'
									
								}}
							>
								Edit Event
							</Button> */}
								{/* </Link> */}
							</div>
						</Form>
					</Card> 
				</div> :
				null
						}
				
			</div>
			
		);
	}
}
