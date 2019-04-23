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
export default class LesfemaleList extends Component {
	state = {
		lesbians: [],
		newLesbian: {
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
		lesbianId: this.props.match.params.lesbianId
	};

	componentDidMount = () => {
		this.findAllLesbians();
	};

	findAllLesbians = () => {
		axios.get('/api/lesbians/').then((res) => {
			this.setState({ lesbians: res.data });
		});
	};

	deleteLesbian = (e, lesbian) => {
		e.preventDefault()
		axios.delete(`/api/lesbians/${lesbian._id}`).then((res) => {
			this.findAllLesbians()
		});
	};

	render() {
		if (this.state.redirectToUser) {
			return <Redirect to={`/lesbians}`} />;
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
						marginLeft: '30px',
						marginBottom: '30px',
						marginTop: '50px'
					}}
				>
					{this.state.lesbians.map((lesbian) => {
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
										key={lesbian._id}
										className="text-center hidden"
										style={{
                                            color: 'white',
											width: '16.8rem',
											marginLeft: '30px',
											marginRight: '30px',
											backgroundColor: '#86074e'
										}}
									>
										<Card.Img
											className="text-center zoom"
											style={{ height: '250px', width: '267px' }}
											variant="top"
											src={lesbian.photoUrl}
										/>

										<Card.Body>
											<Card.Title style={{ color: 'white' }}>{lesbian.firstName}</Card.Title>
											<Card.Title style={{ color: 'white' }}>{lesbian.age}</Card.Title>
											{/* <Card.Text style={{ color: 'white' }}>{lesfemale.bio}</Card.Text> */}
											<Card.Text style={{ color: 'white' }}>{lesbian.location}</Card.Text>
											{/* <div key={user._id}>
												<Link to={`/users/${user._id}`} key={user._id}>
													<button style={{ marginRight: '16px' }}>Interested</button>
												</Link>
												<button style= {{color: 'black'}} data-toggle="collapse">Not Interested</button>
											</div> */}
											<div key={lesbian._id}>
												<Link to={`/lesbians/${lesbian._id}`} key={lesbian._id}>
													<button style={{ marginRight: '16px' }}>Interested</button>
												</Link>
												<button
												    key={lesbian._id}
													onClick={(e) => this.deleteLesbian(e, lesbian)}
													type="button"
													
													style={{ color: 'black' }}
												>
													Not Interested
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

// export default class LesfemaleList extends Component {
// 	state = {
// 		lesfemales: [],
// 		newLesfemale: {
// 			_id: '',
// 			firstName: '',
// 			lastName: '',
// 			age: '',
// 			photoUrl: '',
// 			location: '',
// 			bio: ''
// 		},
// 		redirectToUser: false,
// 		displayUserForm: false,
// 		lesfemaleId: this.props.match.params.lesfemaleId
// 	};

// 	componentDidMount = () => {
// 		this.findAllLesfemales();
// 	};

// 	findAllLesfemales = () => {
// 		axios.get('/api/lesfemales/').then((res) => {
// 			this.setState({ lesfemales: res.data });
// 		});
// 	};

// 	deleteLesfemale = (e, lesfemale) => {
// 		e.preventDefault()
// 		axios.delete(`/api/lesfemales/${lesfemale._id}`).then((res) => {
// 			this.findAllLesfemales()
// 		});
// 	};

// 	render() {
// 		if (this.state.redirectToUser) {
// 			return <Redirect to={`/lesfemales}`} />;
// 		}
// 		return (
// 			<div>
// 				{/* <Jumbotron fluid className="man" style={{ height: '26rem' }}>
// 					<Container className="homefont" style={{ marginTop: '210px' }}>
// 						<h1 style={{ fontSize: '50px', fontWeight: 'bold', color: 'white' }}>Let it Breathe</h1>
// 					</Container>
// 				</Jumbotron> */}
// 				<div
// 					className="row"
// 					style={{
// 						marginLeft: '30px',
// 						marginBottom: '30px',
// 						marginTop: '50px'
// 					}}
// 				>
// 					{this.state.lesfemales.map((lesfemale) => {
// 						return (
// 							<div
// 								className="row text-center"
// 								style={{
// 									marginLeft: '20px',
// 									marginBottom: '20px',
// 									marginTop: '30px'
// 								}}
// 							>
// 								<CardGroup className="collapse-show" id="collapseExample">
// 									<Card
// 										key={lesfemale._id}
// 										className="text-center hidden"
// 										style={{
//                                             color: 'white',
// 											width: '16.8rem',
// 											marginLeft: '30px',
// 											marginRight: '30px',
// 											backgroundColor: '#86074e'
// 										}}
// 									>
// 										<Card.Img
// 											className="text-center zoom"
// 											style={{ height: '250px', width: '267px' }}
// 											variant="top"
// 											src={lesfemale.photoUrl}
// 										/>

// 										<Card.Body>
// 											<Card.Title style={{ color: 'white' }}>{lesfemale.firstName}</Card.Title>
// 											<Card.Title style={{ color: 'white' }}>{lesfemale.age}</Card.Title>
// 											{/* <Card.Text style={{ color: 'white' }}>{lesfemale.bio}</Card.Text> */}
// 											<Card.Text style={{ color: 'white' }}>{lesfemale.location}</Card.Text>
// 											{/* <div key={user._id}>
// 												<Link to={`/users/${user._id}`} key={user._id}>
// 													<button style={{ marginRight: '16px' }}>Interested</button>
// 												</Link>
// 												<button style= {{color: 'black'}} data-toggle="collapse">Not Interested</button>
// 											</div> */}
// 											<div key={lesfemale._id}>
// 												<Link to={`/lesfemales/${lesfemale._id}`} key={lesfemale._id}>
// 													<button style={{ marginRight: '16px' }}>Interested</button>
// 												</Link>
// 												<button
// 												    key={lesfemale._id}
// 													onClick={(e) => this.deleteLesfemale(e, lesfemale)}
// 													type="button"
													
// 													style={{ color: 'black' }}
// 												>
// 													Not Interested
// 												</button>
// 											</div>
// 										</Card.Body>
// 									</Card>
// 								</CardGroup>
// 							</div>
// 						);
// 					})}

// 					{/* <ButtonToolbar className="text-center mb-3" aria-label="Toolbar with Button groups">
// 					 <ButtonGroup className= "text-center mr-2" aria-label="First group">
//       					<Button variant="secondary">1</Button>
//       <Button variant="secondary">2</Button>
//       <Button variant="secondary">3</Button>
//       <Button variant="secondary">4</Button>
// 	    <Button variant="secondary">5</Button>
// 		  <Button variant="secondary">6</Button>
// 		    <Button variant="secondary">7</Button>
//     </ButtonGroup>
// 	</ButtonToolbar> */}
// 				</div>
// 			</div>
// 		);
// 	}
// }
