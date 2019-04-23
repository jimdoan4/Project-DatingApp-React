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
			<div className="text=center" style={{ marginLeft: '90px' }}>
				<h3>Write A Review about Your DATE</h3>
				<button style={{ marginTop: '14px' }} onClick={this.toggleReviewForm}>
					List of Your date REVIEWS
				</button>
				<div className="row">
					{this.state.gcomments.map((gcomment) => {
						return (
							<div>
								{this.state.displayReviewForm ? (
									<Col>
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
											<p>Rating for this date: {gcomment.rating}</p>
											<p>Would I go on a second date? {gcomment.dateAgain}</p>
											<p>What is your review of this date? {gcomment.review}</p>
											<p>What did I learn from this date? {gcomment.lessonLearned}</p>
											<p>Who was my date? {gcomment.withWho}</p>
											<Container
												style={{ marginLeft: '0px', textAlign: 'center' }}
												className="text-center"
											>
												<Link
													to={`/gaymales/${this.state.gaymaleId}/gcomments/${gcomment._id}`}
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
											</Container>
										</Card>
									</Col>
								) : null}
							</div>
						);
					})}
					<br />
					{/* <br /> */}
					<div className="text-center col" style={{ marginTop: '30px' }}>
						<button style={{ marginBottom: '20px' }} onClick={this.toggleGcommentForm}>
							Add a Review
						</button>
						{this.state.displayGcommentForm ? (
							<div className="container text-center">
								<Card
									className="container"
									style={{ width: '28rem', height: '42.5rem', paddingTop: '15px' }}
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
												<Form.Label htmlFor="withWho">Who was your date? </Form.Label>
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
												<Form.Label htmlFor="rating">Rating? </Form.Label>
												<Form.Control
													className="text-center"
													type="number"
													name="rating"
													onChange={this.handleChange}
													value={this.state.newGcomment.rating}
													placeholder="Enter Rating? "
												/>
											</Form.Group>
										</Form.Row>
										<Form.Row>
											<Form.Group as={Col} controlId="formGridEmail">
												<Form.Label htmlFor="dateAgain">Date Again? </Form.Label>
												<Form.Control
													className="text-center"
													type="text"
													name="dateAgain"
													onChange={this.handleChange}
													value={this.state.newGcomment.dateAgain}
													placeholder="Data Again? "
												/>
											</Form.Group>
										</Form.Row>

										<Form.Row>
											<Form.Group as={Col} controlId="formGridEmail">
												<Form.Label htmlFor="dateAgain">Review of your date? </Form.Label>
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
													What did you learn from your date?{' '}
												</Form.Label>
												<Form.Control
													className="text-center"
													type="text"
													name="lessonLearned"
													onChange={this.handleChange}
													value={this.state.newGcomment.lessonLearned}
													placeholder="Enter Lesson Learned? "
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
													marginBottom: '25px'
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
