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
		e.preventDefault();
		axios.delete(`/api/lesbians/${lesbian._id}`).then((res) => {
			this.findAllLesbians();
		});
	};

	render() {
		if (this.state.redirectToUser) {
			return <Redirect to={`/lesbians}`} />;
		}
		return (
			<div>
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

											<Card.Text style={{ color: 'white' }}>{lesbian.location}</Card.Text>

											<div key={lesbian._id}>
												<Link to={`/lesbians/${lesbian._id}`} key={lesbian._id}>
													<button
														style={{
															backgroundColor: 'white',
															borderColor: 'black',
															color: 'black',
															marginRight: '10px'
														}}
													>
														Interested
													</button>
												</Link>
												<button
													key={lesbian._id}
													onClick={(e) => this.deleteLesbian(e, lesbian)}
													type="button"
													style={{
														backgroundColor: 'white',
														borderColor: 'black',
														color: 'black'
													}}
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
				</div>
			</div>
		);
	}
}
