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

export default class CommentPage extends Component {
	state = {
		userd: this.props.userId,
		comments: [],
		newComment: {
			    rating: '',
	            dateAgain: '',
	            review: '',
	            withWho: '',
                photoUrl: '',
                lessonLearned: ''
		},
		redirectToUser: false,
		displayEditForm: false
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

	toggleEditForm = () => {
		this.setState((state, props) => {
			return { displayEditForm: !state.displayEditForm };
		});
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

	render() {
		return (
			<div>
				{this.state.comments.map((comment) => {
					return (
						<div key={comment._id}>
							<Card
								className="container"
								style={{ width: '80rem', marginTop: '0px', marginBottom: '50px' }}
							>
								<Card.Body className="container">
									<Card.Title className="container">
										<Link
											to={`/users/${this.state.userId}/comments/${comment._id}`}
											key={comment._id}
										>
											<p style={{ fontSize: '20px', color: 'black' }} className="text-center">
												{comment.rating}
											</p>
											<p style={{ fontSize: '20px', color: 'black' }} className="text-center">
												{comment.dateAgain}
											</p>

											<p style={{ fontSize: '20px', color: 'black' }} className="text-center">
												{comment.review}
											</p>
                                            <p style={{ fontSize: '20px', color: 'black' }} className="text-center">
												{comment.withWho}
											</p>
                                            <p style={{ fontSize: '20px', color: 'black' }} className="text-center">
												{comment.lessonLearned}
											</p>
                                            <p style={{ fontSize: '20px', color: 'black' }} className="text-center">
												{comment.photoUrl}
											</p>
										</Link>
									</Card.Title>
								</Card.Body>
								</Card>
							
								<div>
								<Form onSubmit={this.createComment}>
									<Form.Row>
										<Form.Group as={Col} controlId="formGridEmail" className= 'text-center'>
											<Form.Label htmlFor="rating">Rating</Form.Label>
											<Form.Control
												className= 'container'
												type="text"
												name="rating"
												onChange={this.handleChange}
												value={this.state.newComment.rating}
												placeholder="Enter Rating"
											/>
										</Form.Group>
									</Form.Row>
									<Form.Row>
										<Form.Group as={Col} controlId="formGridEmail" className= 'text-center'>
											<Form.Label  htmlFor="lessonLearned">Lesson Learned: </Form.Label>
											<Form.Control
												className= 'container'
												type="text"
												name="lessonLearned"
												onChange={this.handleChange}
												value={this.state.newComment.lessonLearned}
												placeholder="Enter Lesson Learned"
											/>
										</Form.Group>
									</Form.Row>

									<div className="row">
										<Button
											className="container"
											type="submit"
											style={{
												marginTop: '20px',
												width: '12rem',
												backgroundColor: 'white',
												borderColor: 'white',
												color: 'black',
												borderColor: 'black'
											}}
										>
											Review this item
										</Button>
									</div>
									<div className="text-center">
										<Link
											className="text-center"
											to={`/users/${this.state.userId}/comments/${comment._id}`}
										>
											<Button
												className="text-center"
												type="submit"
												style={{
													width: '12rem',
													marginBottom: '30px',
													backgroundColor: 'white',
													borderColor: 'white',
													color: 'black',
													borderColor: 'black',
													marginTop: '13px'
												}}
											>
												Edit Review
											</Button>
										</Link>
									</div>
								</Form>
								</div>
						</div>
							
					);
				})}
			
			</div>
			
		);
	}
}


