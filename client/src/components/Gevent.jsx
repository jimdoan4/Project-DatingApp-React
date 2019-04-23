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

export default class Gevent extends Component {
	state = {
		gaymaleId: this.props.gaymaleId,
		geventId: this.props.geventId,
		gevents: [],
		newGevent: {
			eventName: '',
			time: '',
			price: '',
			withWho: '',
			photoUrl: ''
		},
		redirectToGevent: false,
		displayGeventForm: false,
		displayDateForm: false
	};

	getAllGevents = () => {
		axios.get(`/api/gaymales/${this.state.gaymaleId}/gevents`).then((res) => {
			console.log(res.data);
			this.setState({ gevents: res.data });
		});
	};

	componentDidMount = () => {
		this.getAllGevents();
	};

	toggleGeventForm = () => {
		this.setState((state, props) => {
			return { displayGeventForm: !state.displayGeventForm };
		});
	};

	toggleDateForm = () => {
		this.setState((state, props) => {
			return { displayDateForm: !state.displayDateForm };
		});
	};

	handleChange = (e) => {
		const changeNewGevent = { ...this.state.newGevent };
		changeNewGevent[e.target.name] = e.target.value;
		this.setState({ newGevent: changeNewGevent });
	};

	createGevent = (e) => {
		e.preventDefault();
		axios
			.post(`/api/gaymales/${this.state.gaymaleId}/gevents`, {
				eventName: this.state.newGevent.eventName,
				time: this.state.newGevent.time,
				price: this.state.newGevent.price,
				withWho: this.state.newGevent.withWho,
				photoUrl: this.state.newGevent.photoUrl
			})
			.then((res) => {
				const geventsList = [ ...this.state.gevents ];
				geventsList.unshift(res.data);
				this.setState({
					newGevent: {
						eventName: '',
						time: '',
						price: '',
						withWho: '',
						photoUrl: ''
					},
					displayGeventForm: false,
					gevents: geventsList
				});
			});
		this.getAllGevents();
	};

	handleChange = (e) => {
		const changedGevent = { ...this.state.newGevent };
		changedGevent[e.target.name] = e.target.value;
		this.setState({ newGevent: changedGevent });
	};

	updateGevent = (e) => {
		e.preventDefault();
		axios
			.put(`/api/gaymales/${this.state.gaymaleId}/gevents`, {
				eventName: this.state.newGevent.eventName,
				time: this.state.newGevent.time,
				price: this.state.newGevent.price,
				withWho: this.state.newGevent.withWho,
				photoUrl: this.state.newGevent.photoUrl
			})
			.then((res) => {
				this.setState({ gaymale: res.data, displayGeventForm: false });
			});
		this.getAllGevents();
	};

    
    deleteGevent = (e, gevent) => {
		e.preventDefault()
		axios.delete(`/api/gaymales/${this.state.gaymaleId}/gevents/${gevent._id}`).then((res) => {
			this.getAllGevents();
		});
	};

	render() {
		if (this.state.redirectToGevent) {
			return <Redirect to={`/gaymales/`} />;
		}
		return (
			<div className= 'text=center' style={{marginLeft: '90px'}}>
					<h3>Set up a Date with your MATCH</h3>
							<button style={{marginTop: '14px'}} onClick= {this.toggleDateForm}>List of Scheduled Events</button>
                            	<div className= 'row'>
				{this.state.gevents.map((gevent) => {
					return (
						<div>
						
							 {
		  this.state.displayDateForm ?
		  <Col>
							
								<Card className="text-center" style={{ backgroundColor: 'white', paddingLeft: '24px', paddingRight: '24px', paddingTop: '24px', paddingBottom: '24px' }}>
								
									<p>
										Event Name: {gevent.eventName}
									</p>
									<p>Time: {gevent.time}</p>
									<p>Average Price: {gevent.price}</p>
										<p>Who is my date? {gevent.withWho}</p>
											<p>what time is the event? {gevent.time}</p>
											<Container style={{ marginLeft: '0px', textAlign: 'center' }} className="text-center">
												<Link to={`/gaymales/${this.state.gaymaleId}/gevents/${gevent._id}`} key={gevent._id}><button style={{ backgroundColor: 'white', borderColor: 'black', color: 'black', marginRight: '10px' }}>Edit Event</button></Link>
                                                <button
												    key={gevent._id}
													onClick={(e) => this.deleteGevent(e, gevent)}
													style={{ backgroundColor: 'white', borderColor: 'black', color: 'black' }}	
												>
													Delete Event
												</button>
												</Container>
							
							</Card> 
							</Col> :
							null 
							 }
						</div>
					);
				})}
				<br />
                <Col>
			<div className= 'text-center' style= {{ marginTop: '30px'}}>
						 	 <button style= {{marginBottom: '20px'}} onClick={this.toggleGeventForm}>Add an Event</button>
        {
          this.state.displayGeventForm ?
				 <div className="container">
				 
					<Card className="container" style={{ width: '25rem', height: '40.8rem' }}>
					
						 <Form
							className="text-center"
							style={{ display: 'inline-block', backgroundColor: 'white', paddingRight: '25px', marginTop: '14px' }}
							onSubmit={this.createGevent}
						>
							<Form.Row>
								<Form.Group as={Col} controlId="formGridEmail">
									<Form.Label htmlFor="eventName">Event Name</Form.Label>
									<Form.Control
									className= 'text-center'
										type="text"
										name="eventName"
										onChange={this.handleChange}
										value={this.state.newGevent.eventName}
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
										value={this.state.newGevent.time}
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
										value={this.state.newGevent.price}
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
										value={this.state.newGevent.withWho}
										placeholder="Enter your date's name"
									/>
								</Form.Group>
							</Form.Row>
								<Form.Row>
								<Form.Group as={Col} controlId="formGridPassword">
									<Form.Label htmlFor="withWho">Who was your date? </Form.Label>
									<Form.Control
									className= 'text-center'
										type="text"
										name="withWho"
										onChange={this.handleChange}
										value={this.state.newGevent.withWho}
										placeholder="Enter your date's name"
									/>
								</Form.Group>
							</Form.Row>
							<div style={{ marginLeft: '110px' }} className="text-center">
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
							
							</div>
						</Form>
					</Card> 
					
				</div> :
				null
                        }
                       </div>
					</Col>
                    	</div>
			
				
			</div>
			
		);
	}
}
