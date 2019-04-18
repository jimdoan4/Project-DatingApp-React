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

	deleteComment = () => {
		axios.delete(`/api/users/${this.state.userId}/comments/${this.state.commentId}`).then((res) => {
			this.setState({ redirectToComment: true });
		});
	};

	render() {
		if (this.state.redirectToUser) {
			return <Redirect to={`/users/`} />;
		}
		return (
			<div>
				{this.state.comments.map((comment) => {
					return (
						<div>
							<Card>
								<Card className="text-center" style={{ backgroundColor: '#efe8e8' }}>
									<p>
										<Link
											to={`/users/${this.state.userId}/comments/${comment._id}`}
											key={comment._id}
										>
											Review: {comment.review}
										</Link>
									</p>
									<p>{comment.rating}</p>
									<p>{comment.dateAgain}</p>
									<p>{comment.lessonLearned}</p>
								</Card>
							</Card>
						</div>
					);
				})}
				<br />
				<br />
				<div className="container">
					<Card className="container" style={{ width: '25rem', height: '20.5rem', paddingTop: '15px' }}>
						<Form
							className="text-center"
							style={{ display: 'inline-block', backgroundColor: '#efe8e8' }}
							onSubmit={this.createComment}
						>
							<Form.Row>
								<Form.Group as={Col} controlId="formGridEmail">
									<Form.Label htmlFor="dateAgain">Date Again? </Form.Label>
									<Form.Control
										type="text"
										name="dateAgain"
										onChange={this.handleChange}
										value={this.state.newComment.dateAgain}
										placeholder="Data Again? "
									/>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group as={Col} controlId="formGridPassword">
									<Form.Label htmlFor="withWho">Who is your date? </Form.Label>
									<Form.Control
										type="withWho"
										name="withWho"
										onChange={this.handleChange}
										value={this.state.newComment.withWho}
										placeholder="Enter Your Date's Name"
									/>
								</Form.Group>
							</Form.Row>
							<div style={{ marginLeft: '120px' }} className="text-center">
								<button
									className="text-center"
									variant="primary"
									type="submit"
									style={{
										marginRight: '140px',
										paddingLeft: '30px',
										paddingRight: '30px',
										marginTop: '15px',
										marginBottom: '25px'
									}}
								>
									Add Comment
								</button>
								{/* <Button
								onClick = {this.deleteComment}
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
								Delete Comment
							</Button> */}
							</div>
						</Form>
					</Card>
				</div>
			</div>
		);
	}
}
