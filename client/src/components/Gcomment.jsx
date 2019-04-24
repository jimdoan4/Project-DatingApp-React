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

export default class Gcomment extends Component {
	state = {
		gaymaleId: this.props.gaymaleId,
		gcomments: [],
		newGcomment: {
			rating: '',
			dateAgain: '',
			review: '',
			withWho: '',
			photoUrl: '',
			lessonLearned: ''
		},
		redirectToGcomment: false,
		displayGcommentForm: false,
		displayReviewForm: false
	};

	getAllGcomments = () => {
		axios.get(`/api/gaymales/${this.state.gaymaleId}/gcomments`).then((res) => {
			console.log(res.data);
			this.setState({ gcomments: res.data });
		});
	};

	componentDidMount = () => {
		this.getAllGcomments();
	};

	toggleGcommentForm = () => {
		this.setState((state, props) => {
			return { displayGcommentForm: !state.displayGcommentForm };
		});
	};

	toggleReviewForm = () => {
		this.setState((state, props) => {
			return { displayReviewForm: !state.displayReviewForm };
		});
	};

	handleChange = (e) => {
		const changeNewGcomment = { ...this.state.newGcomment };
		changeNewGcomment[e.target.name] = e.target.value;
		this.setState({ newGcomment: changeNewGcomment });
	};

	createGcomment = (e) => {
		e.preventDefault();
		axios
			.post(`/api/gaymales/${this.state.gaymaleId}/gcomments`, {
				rating: this.state.newGcomment.rating,
				dateAgain: this.state.newGcomment.dateAgain,
				review: this.state.newGcomment.review,
				withWho: this.state.newGcomment.withWho,
				photoUrl: this.state.newGcomment.photoUrl,
				lessonLearned: this.state.newGcomment.lessonLearned
			})
			.then((res) => {
				const gcommentsList = [ ...this.state.gcomments ];
				gcommentsList.unshift(res.data);
				this.setState({
					newGcomment: {
						rating: '',
						dateAgain: '',
						review: '',
						withWho: '',
						photoUrl: '',
						lessonLearned: ''
					},
					displayGcommentForm: false,
					gcomments: gcommentsList
				});
			});
		this.getAllGcomments();
	};

	handleChange = (e) => {
		const changedGcomment = { ...this.state.newGcomment };
		changedGcomment[e.target.name] = e.target.value;
		this.setState({ newGcomment: changedGcomment });
	};

	updateGcomment = (e) => {
		e.preventDefault();
		axios
			.put(`/api/gaymales/${this.state.gaymaleId}`, {
				rating: this.state.Gcomment.rating,
				dateAgain: this.state.Gcomment.dateAgain,
				review: this.state.Gcomment.review,
				withWho: this.state.Gcomment.withWho,
				photoUrl: this.state.Gcomment.photoUrl,
				lessonLearned: this.state.Gcomment.lessonLearned
			})
			.then((res) => {
				this.setState({ gaymale: res.data, displayGcommentForm: false });
			});
		this.getAllGcomments();
	};

	deleteGcomment = (e, gcomment) => {
		e.preventDefault();
		axios.delete(`/api/gaymales/${this.state.gaymaleId}/gcomments/${gcomment._id}`).then((res) => {
			this.getAllGcomments();
		});
	};

	render() {
		if (this.state.redirectToGcomment) {
			return <Redirect to={`/gaymales/`} />;
		}
		return (
			<div className="text-center" style={{ position: 'block' }}>
				<h3 style={{ marginTop: '30px' }}>Write A Review about Your DATE</h3>
				<button
					style={{
						marginTop: '14px',
						backgroundColor: 'white',
						borderColor: 'black',
						color: 'black'
					}}
					onClick={this.toggleReviewForm}
				>
					List of Your date Reviews
				</button>
				<div className="col">
					{this.state.gcomments.map((gcomment) => {
						return (
							<div>
								{this.state.displayReviewForm ? (
									<Card
										className="text-center"
										style={{
											backgroundColor: 'white',
											paddingLeft: '24px',
											paddingRight: '24px',
											paddingTop: '24px',
											paddingBottom: '7px',
											marginTop: '26px'
										}}
									>
										<p>Who was your Date: {gcomment.withWho}</p>
										<p>What is the Rating for your Date: {gcomment.rating}</p>
										<p>Would you go on a second Date: {gcomment.dateAgain}</p>
										<p>What is your review of this Date: {gcomment.review}</p>
										<p>What did you learn from this Date: {gcomment.lessonLearned}</p>

										<Container
											style={{ marginLeft: '0px', textAlign: 'center' }}
											className="text-center"
										>
											<Row>
												<Col>
													<Link
														to={`/gaymales/${this.state
															.gaymaleId}/gcomments/${gcomment._id}`}
														key={gcomment._id}
													>
														<button
															style={{
																backgroundColor: 'white',
																borderColor: 'black',
																color: 'black',
																marginRight: '10px'
															}}
														>
															Edit Review
														</button>
													</Link>
												</Col>
												<Col>
													<button
														key={gcomment._id}
														onClick={(e) => this.deleteGcomment(e, gcomment)}
														style={{
															backgroundColor: 'white',
															borderColor: 'black',
															color: 'black'
														}}
													>
														Delete Review
													</button>
												</Col>
											</Row>
										</Container>
									</Card>
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
							onClick={this.toggleGcommentForm}
						>
							Add a Review
						</button>
						{this.state.displayGcommentForm ? (
							<div className="container text-center">
								<Card
									className="container"
									style={{
										width: '28rem',
										height: '42.6rem',
										paddingTop: '15px',
										backgroundColor: '#d4d5d5'
									}}
								>
									<Form
										className="text-center"
										style={{
											display: 'inline-block',
											backgroundColor: 'white',
											paddingRight: '23px'
										}}
										onSubmit={this.createGcomment}
									>
										<Form.Row>
											<Form.Group as={Col} controlId="formGridPassword">
												<Form.Label htmlFor="withWho">Who was your Date: </Form.Label>
												<Form.Control
													className="text-center"
													type="text"
													name="withWho"
													onChange={this.handleChange}
													value={this.state.newGcomment.withWho}
													placeholder="Enter Your Date's Name"
												/>
											</Form.Group>
										</Form.Row>
										<Form.Row>
											<Form.Group as={Col} controlId="formGridEmail">
												<Form.Label htmlFor="rating">Rating: </Form.Label>
												<Form.Control
													className="text-center"
													type="number"
													name="rating"
													onChange={this.handleChange}
													value={this.state.newGcomment.rating}
													placeholder="Enter Rating "
												/>
											</Form.Group>
										</Form.Row>
										<Form.Row>
											<Form.Group as={Col} controlId="formGridEmail">
												<Form.Label htmlFor="dateAgain">
													Would you Date this person again:{' '}
												</Form.Label>
												<Form.Control
													className="text-center"
													type="text"
													name="dateAgain"
													onChange={this.handleChange}
													value={this.state.newGcomment.dateAgain}
													placeholder="Enter Data Again "
												/>
											</Form.Group>
										</Form.Row>

										<Form.Row>
											<Form.Group as={Col} controlId="formGridEmail">
												<Form.Label htmlFor="dateAgain">
													What is the Review of your Date:{' '}
												</Form.Label>
												<Form.Control
													className="text-center"
													type="text"
													name="review"
													onChange={this.handleChange}
													value={this.state.newGcomment.review}
													placeholder="Enter Review "
												/>
											</Form.Group>
										</Form.Row>
										<Form.Row>
											<Form.Group as={Col} controlId="formGridEmail">
												<Form.Label htmlFor="lessonLearned">
													What did you learn from your Date: {' '}
												</Form.Label>
												<Form.Control
													className="text-center"
													type="text"
													name="lessonLearned"
													onChange={this.handleChange}
													value={this.state.newGcomment.lessonLearned}
													placeholder="Enter Lesson Learned "
												/>
											</Form.Group>
										</Form.Row>
										<div style={{ marginLeft: '146px' }} className="text-center">
											<button
												onClick={this.createGcomment}
												className="text-center"
												variant="primary"
												type="submit"
												style={{
													marginRight: '140px',
													paddingLeft: '30px',
													paddingRight: '30px',
													marginTop: '10px',
													marginBottom: '25px',
													backgroundColor: 'white',
													borderColor: 'black',
													color: 'black'
												}}
											>
												Add Comment
											</button>
										</div>
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
