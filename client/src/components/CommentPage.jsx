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

export default class CommentPage extends Component {
	state = {
		userId: this.props.userId,
		comments: [],
		newComment: {
			rating: '',
			dateAgain: '',
			review: '',
			withWho: '',
			photoUrl: '',
			lessonLearned: ''
		},
		redirectToComment: false,
		displayEditForm: false,
		displayCommentForm: false
	};

	getAllComments = () => {
		axios.get(`/api/users/${this.state.userId}/comments`).then((res) => {
			console.log(res.data);
			this.setState({ comments: res.data });
		});
	};

	componentDidMount = () => {
		this.getAllComments();
	};

	handleChange = (e) => {
		const changeNewComment = { ...this.state.newComment };
		changeNewComment[e.target.name] = e.target.value;
		this.setState({ newComment: changeNewComment });
	};

	createComment = (e) => {
		e.preventDefault();
		axios
			.post(`/api/users/${this.state.userId}/comments`, {
				rating: this.state.newComment.rating,
				dateAgain: this.state.newComment.dateAgain,
				review: this.state.newComment.review,
				withWho: this.state.newComment.withWho,
				photoUrl: this.state.newComment.photoUrl,
				lessonLearned: this.state.newComment.lessonLearned
			})
			.then((res) => {
				const commentsList = [ ...this.state.comments ];
				commentsList.unshift(res.data);
				this.setState({
					newComment: {
						rating: '',
						dateAgain: '',
						review: '',
						withWho: '',
						photoUrl: '',
						lessonLearned: ''
					},
					displayCommentForm: false,
					comments: commentsList
				});
			});
		this.getAllComments();
	};

	handleChange = (e) => {
		const changedComment = { ...this.state.newComment };
		changedComment[e.target.name] = e.target.value;
		this.setState({ newComment: changedComment });
	};

	updateComment = (e) => {
		e.preventDefault();
		axios
			.put(`/api/users/${this.state.userId}`, {
				rating: this.state.newComment.rating,
				dateAgain: this.state.newComment.dateAgain,
				review: this.state.newComment.review,
				withWho: this.state.newComment.withWho,
				photoUrl: this.state.newComment.photoUrl,
				lessonLearned: this.state.newComment.lessonLearned
			})
			.then((res) => {
				this.setState({ user: res.data, displayEditForm: false });
			});
		this.getAllComments();
	};

	toggleEditForm = () => {
		this.setState((state, props) => {
			return { displayEditForm: !state.displayEditForm };
		});
	};

	toggleCommentForm = () => {
		this.setState((state, props) => {
			return { displayCommentForm: !state.displayCommentForm };
		});
	};

	deleteComment = (e, comment) => {
		e.preventDefault();
		axios.delete(`/api/users/${this.state.userId}/comments/${comment._id}`).then((res) => {
			this.getAllComments();
		});
	};

	render() {
		if (this.state.redirectToComment) {
			return <Redirect to={`/users/`} />;
		}
		return (
			<div className="text=center" style={{ marginLeft: '90px' }}>
				<h3>Write A Review about Your DATE</h3>
				<button style={{ marginTop: '14px' }} onClick={this.toggleCommentForm}>
					List of Your Date REVIEWS
				</button>
				<div className="row">
					{this.state.comments.map((comment) => {
						return (
							<div>
								{this.state.displayCommentForm ? (
									<Col>
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
											<p>Who was my date? {comment.withWho}</p>

											<p>Rating for this date: {comment.rating}</p>
											<p>Would I go on a second date? {comment.dateAgain}</p>
											<p>What is your review of this date? {comment.review}</p>
											<p>What did I learn from this date? {comment.lessonLearned}</p>

											<Container
												style={{ marginLeft: '0px', textAlign: 'center' }}
												className="text-center"
											>
												<Link
													to={`/users/${this.state.userId}/comments/${comment._id}`}
													key={comment._id}
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
													style={{
														backgroundColor: 'white',
														borderColor: 'black',
														color: 'black'
													}}
													key={comment._id}
													onClick={(e) => this.deleteComment(e, comment)}
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

					<div className="text-center col" style={{ marginTop: '30px' }}>
						<button style={{ marginBottom: '20px' }} onClick={this.toggleEditForm}>
							Add a Review
						</button>
						{this.state.displayEditForm ? (
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
										onSubmit={this.createComment}
									>
										<Form.Row>
											<Form.Group as={Col} controlId="formGridPassword">
												<Form.Label htmlFor="withWho">Who is your date? </Form.Label>
												<Form.Control
													className="text-center"
													type="text"
													name="withWho"
													onChange={this.handleChange}
													value={this.state.newComment.withWho}
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
													value={this.state.newComment.rating}
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
													value={this.state.newComment.dateAgain}
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
													value={this.state.newComment.review}
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
													value={this.state.newComment.lessonLearned}
													placeholder="Enter Lesson Learned? "
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
