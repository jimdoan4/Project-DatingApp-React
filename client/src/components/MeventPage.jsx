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
		displayMeventForm: false
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
				{this.state.mevents.map((mevent) => {
					return (
						<div>
							<Card>
								<Card className="text-center" style={{ backgroundColor: 'white', paddingLeft: '24px', paddingRight: '24px', paddingTop: '24px', paddingBottom: '24px' }}>
									<Card.Title><Link to={`/males/${this.state.maleId}/mevents/${mevent._id}`} key={mevent._id}>
										Event Name: {mevent.eventName}
									</Link>
									</Card.Title>
									<Card.Title>Average Price: {mevent.price}</Card.Title>
										<Card.Title>Who is my date? {mevent.withWho}</Card.Title>
											<Card.Title>what time is the event? {mevent.time}</Card.Title>
											
								</Card>
							</Card>
						</div>
					);
				})}
				<br />
			
				 <div className="container">
				 
					<Card className="container" style={{ width: '25rem', height: '35.8rem' }}>
					
						 <Form
							className="text-center"
							style={{ display: 'inline-block', backgroundColor: 'white', paddingRight: '25px', marginTop: '14px' }}
							onSubmit={this.createMevent}
						>
							<Form.Row>
								<Form.Group as={Col} controlId="formGridEmail">
									<Form.Label htmlFor="eventName">Event Name</Form.Label>
									<Form.Control
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
										type="text"
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
										type="text"
										name="price"
										onChange={this.handleChange}
										value={this.state.newMevent.price}
										placeholder="Enter the price"
									/>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group as={Col} controlId="formGridPassword">
									<Form.Label htmlFor="photoUrl">Picture:  </Form.Label>
									<Form.Control
										type="text"
										name="photoUrl"
										onChange={this.handleChange}
										value={this.state.newMevent.photoUrl}
										placeholder="Add a Photo of your Date"
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
										marginTop: '15px',
										marginBottom: '25px'
									}}
								>
									Add Event
								</button>
								
							</div>
						</Form>
					</Card>
					
				</div>
				
			</div>
			
		);
	}
}
