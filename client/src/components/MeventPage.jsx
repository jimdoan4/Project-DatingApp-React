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
			withWho: '',
			photoUrl: ''
		},
		redirectToMevent: false,
		displayMeventForm: false,
		displayDateForm: false
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
				withWho: this.state.newMevent.withWho,
				photoUrl: this.state.newMevent.photoUrl
			})
			.then((res) => {
				const meventsList = [ ...this.state.mevents ];
				meventsList.unshift(res.data);
				this.setState({
					newMevent: {
						eventName: '',
						time: '',
						price: '',
						withWho: '',
						photoUrl: ''
					},
					displayMeventForm: false,
					mevents: meventsList
				});
			});
		this.getAllMevents();
	};

	handleChange = (e) => {
		const changedMevent = { ...this.state.newMevent };
		changedMevent[e.target.name] = e.target.value;
		this.setState({ newMevent: changedMevent });
	};

	updateMevent = (e) => {
		e.preventDefault();
		axios
			.put(`/api/males/${this.state.maleId}/mevents`, {
				eventName: this.state.newMevent.eventName,
				time: this.state.newMevent.time,
				price: this.state.newMevent.price,
				withWho: this.state.newMevent.withWho,
				photoUrl: this.state.neMevent.photoUrl
			})
			.then((res) => {
				this.setState({ male: res.data, displayMeventForm: false });
			});
		this.getAllMevents();
	};

	deleteMevent = () => {
		axios.delete(`/api/males/${this.state.maleId}/mevents/${this.state.meventId}`).then((res) => {
			this.setState({ redirectToMevent: true });
		});
	};

	render() {
		if (this.state.redirectToMevent) {
			return <Redirect to={`/males/`} />;
		}
		return (
			<div>
					<h3>Set up a Date with your MATCH</h3>
							<button onClick= {this.toggleDateForm}>List of Scheduled Events</button>
				{this.state.mevents.map((mevent) => {
					return (
						<div>
						
							 {
		  this.state.displayDateForm ?
		  <Col>
							
								<Card className="text-center" style={{ backgroundColor: 'white', paddingLeft: '24px', paddingRight: '24px', paddingTop: '24px', paddingBottom: '24px' }}>
								
									<p>
										Event Name: {mevent.eventName}
									</p>
									<p>Time: {mevent.time}</p>
									<p>Average Price: {mevent.price}</p>
										<p>Who is my date? {mevent.withWho}</p>
											<p>what time is the event? {mevent.time}</p>
												{/* <Card.Title>{event.photoUrl}</Card.Title> */}
												<Link to={`/males/${this.state.maleId}/mevents/${mevent._id}`} key={mevent._id}><button>Edit Event</button></Link>
							
							</Card> 
							</Col> :
							null 
							 }
						</div>
					);
				})}
				<br />
						 	 <button style= {{marginBottom: '20px'}} onClick={this.toggleMeventForm}>Add an Event</button>
        {
          this.state.displayMeventForm ?
				 <div className="container">
				 
					<Card className="container" style={{ width: '25rem', height: '42.8rem' }}>
					
						 <Form
							className="text-center"
							style={{ display: 'inline-block', backgroundColor: 'white', paddingRight: '25px', marginTop: '14px' }}
							onSubmit={this.createMevent}
						>
							<Form.Row>
								<Form.Group as={Col} controlId="formGridEmail">
									<Form.Label htmlFor="eventName">Event Name</Form.Label>
									<Form.Control
									className= 'text-center'
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
									<Form.Label htmlFor="time">Time:  </Form.Label>
									<Form.Control
									className= 'text-center'
										type="number"
										name="time"
										onChange={this.handleChange}
										value={this.state.newMevent.time}
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
										value={this.state.newMevent.price}
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
										value={this.state.newMevent.withWho}
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
										value={this.state.newMevent.withWho}
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
