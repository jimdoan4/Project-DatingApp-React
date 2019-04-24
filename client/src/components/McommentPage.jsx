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

export default class McommentPage extends Component {
	state = {
		maleId: this.props.maleId,
		mcommentId: this.props.mcommentId,
		mcomments: [],
		newMcomment: {
			rating: '',
			dateAgain: '',
			review: '',
			withWho: '',
			lessonLearned: ''
		},
		redirectToMcomment: false,
		displayMcommentForm: false,
		displayReviewForm: false,
		displayEditForm: false
	};

	getAllMcomments = () => {
		axios.get(`/api/males/${this.state.maleId}/mcomments`).then((res) => {
			console.log(res.data);
			this.setState({ mcomments: res.data });
		});
	};

	componentDidMount = () => {
		this.getAllMcomments();
	};

	toggleMcommentForm = () => {
		this.setState((state, props) => {
			return { displayMcommentForm: !state.displayMcommentForm };
		});
	};

	toggleReviewForm = () => {
		this.setState((state, props) => {
			return { displayReviewForm: !state.displayReviewForm };
		});
	};

	toggleEditForm = (comment) => {
		this.setState((state, props) => {
			return { displayEditForm: !state.displayEditForm, newMcomment: comment };
		});
	};

	handleChange = (e) => {
		const changeNewMcomment = { ...this.state.newMcomment };
		changeNewMcomment[e.target.name] = e.target.value;
		this.setState({ newMcomment: changeNewMcomment });
	};

	createMcomment = (e) => {
		e.preventDefault();
		axios
			.post(`/api/males/${this.state.maleId}/mcomments`, {
				rating: this.state.newMcomment.rating,
				dateAgain: this.state.newMcomment.dateAgain,
				review: this.state.newMcomment.review,
				withWho: this.state.newMcomment.withWho,
				lessonLearned: this.state.newMcomment.lessonLearned
			})
			.then((res) => {
				const mcommentsList = [ ...this.state.mcomments ];
				mcommentsList.unshift(res.data);
				this.setState({
					newMcomment: {
						rating: '',
						dateAgain: '',
						review: '',
						withWho: '',
						lessonLearned: ''
					},
					displayMcommentForm: false,
					mcomments: mcommentsList
				});
			});
		this.getAllMcomments();
	};

	updateMcomment = (e) => {
		e.preventDefault();
		axios
			.put(`/api/males/${this.state.maleId}/mcomments/${this.state.newMcomment._id}}`, {
				rating: this.state.newMcomment.rating,
				dateAgain: this.state.newMcomment.dateAgain,
				review: this.state.newMcomment.review,
				withWho: this.state.newMcomment.withWho,
				lessonLearned: this.state.newMcomment.lessonLearned
			})
			.then((res) => {
				this.getAllMcomments();
			});
	};

	deleteMcomment = (e, mcomment) => {
		e.preventDefault();
		axios.delete(`/api/males/${this.state.maleId}/mcomments/${mcomment._id}`).then((res) => {
			this.getAllMcomments();
		});
	};

	render() {
		if (this.state.redirectToMcomment) {
			return <Redirect to={`/males/`} />;
		}
		return (
			<div className="text-center" style={{ position: 'block' }}>
				<h3 style= {{marginTop: '30px'}}>Write A Review about Your DATE</h3>
				<button
					style={{
						marginTop: '14px',
						backgroundColor: 'white',
						borderColor: 'black',
						color: 'black'
					}}
					onClick={this.toggleReviewForm}
				>
					Lists of Your Date Reviews
				</button>
<div className="">
				{this.state.mcomments.map((mcomment) => {
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
									<p>Who was my date? {mcomment.withWho}</p>
										<p>Rating for this date: {mcomment.rating}</p>
										<p>Would I go on a second date? {mcomment.dateAgain}</p>
										<p>What is your review of this date? {mcomment.review}</p>
										<p>What did I learn from this date? {mcomment.lessonLearned}</p>
										
										<Container
											style={{ marginLeft: '0px', textAlign: 'center' }}
											className="text-center"
										>
										<Row>
											<Col>
											<Link key={mcomment._id}>
												<button
													style={{
														backgroundColor: 'white',
														borderColor: 'black',
														color: 'black',
														marginRight: '10px'
													}}
													key={mcomment._id}
													onClick={() => this.toggleEditForm(mcomment)}
												>
													Edit Review
												</button>
											</Link>
											</Col>
											<Col>
											<button
												key={mcomment._id}
												onClick={(e) => this.deleteMcomment(e, mcomment)}
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
									
								</Col>
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
							onClick={this.toggleMcommentForm}
						>
							Add a Review
						</button>
						{this.state.displayMcommentForm ? (
							<div className="container text-center">
								<Card
									className="container"
									style={{ width: '28rem', height: '41.5rem', paddingTop: '15px', backgroundColor: '#d4d5d5' }}
								>
									<Form
										className="text-center"
										style={{
											display: 'inline-block',
											backgroundColor: 'white',
											paddingRight: '23px'
										}}
										onSubmit={this.createMcomment}
									>
										<Form.Row>
											<Form.Group as={Col} controlId="formGridEmail">
												<Form.Label htmlFor="rating">Rating? </Form.Label>
												<Form.Control
													className="text-center"
													type="number"
													name="rating"
													onChange={this.handleChange}
													value={this.state.newMcomment.rating}
													placeholder="Enter Rating? "
												/>
											</Form.Group>
										</Form.Row>
										<Form.Row>
											<Form.Group as={Col} controlId="formGridPassword">
												<Form.Label htmlFor="withWho">Who was your date? </Form.Label>
												<Form.Control
													className="text-center"
													type="text"
													name="withWho"
													onChange={this.handleChange}
													value={this.state.newMcomment.withWho}
													placeholder="Enter Your Date's Name"
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
													value={this.state.newMcomment.dateAgain}
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
													value={this.state.newMcomment.review}
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
													value={this.state.newMcomment.lessonLearned}
													placeholder="Enter Lesson Learned? "
												/>
											</Form.Group>
										</Form.Row>
										<div style={{ marginLeft: '121px' }} className="text-center">
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
												Add Review
											</button>
										</div>
									</Form>
								</Card>
							</div>
						) : null}
					</div>
			

				{this.state.displayEditForm ? (
					<form
						onSubmit={this.updateMcomment}
						style={{ marginTop: '50px', marginRight: '50px' }}
						className="col"
					>
						<div className="col">
							<div className="col s12 m6 text-center">
								<label style={{ marginRight: '30px', marginTop: '30px' }} htmlFor="rating">
									Rating
								</label>
								<input
									style={{ height: '50px', width: '320px' }}
									className="text-center"
									id="rating"
									type="number"
									name="rating"
									onChange={this.handleChange}
									value={this.state.newMcomment.rating}
								/>
							</div>
							<div className="col s12 m6 text-center">
								<label style={{ marginRight: '30px', marginTop: '30px' }} htmlFor="withWho">
									Who was your DATE:
								</label>
								<input
									style={{ height: '50px', width: '320px' }}
									className="text-center"
									id="withWho"
									type="text"
									name="withWho"
									onChange={this.handleChange}
									value={this.state.newMcomment.withWho}
								/>
							</div>
							<div className="col s12 m6 text-center">
								<label style={{ marginRight: '30px', marginTop: '40px' }} htmlFor="dateAgain">
									Would you date this person again:{' '}
								</label>
								<input
									style={{ height: '54px', width: '390px', marginRight: '53px' }}
									className="text-center"
									id="dateAgain"
									type="text"
									name="dateAgain"
									onChange={this.handleChange}
									value={this.state.newMcomment.dateAgain}
								/>
							</div>
							<div className="col s12 m6 text-center">
								<label style={{ marginRight: '30px', marginTop: '40px' }} htmlFor="review">
									Review your Date: {' '}
								</label>
								<input
									style={{ height: '54px', width: '390px', marginRight: '53px' }}
									className="text-center"
									id="review"
									type="text"
									name="review"
									onChange={this.handleChange}
									value={this.state.newMcomment.review}
								/>
							</div>
							<div className="col s12 m6 text-center">
								<label style={{ marginRight: '30px', marginTop: '40px' }} htmlFor="lessonLearned">
									What did you learn about your Date?
								</label>
								<input
									style={{ height: '54px', width: '390px', marginRight: '53px' }}
									className="text-center"
									id="lessonLearned"
									type="text"
									name="lessonLearned"
									onChange={this.handleChange}
									value={this.state.newMcomment.lessonLearned}
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
			</div>
		);
	}
}
