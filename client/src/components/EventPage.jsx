// import React, { Component } from 'react';
// import { Redirect, Link } from 'react-router-dom';
// import axios from 'axios';
// import { Container } from 'react-bootstrap';
// import { Jumbotron } from 'react-bootstrap';
// import { Card } from 'react-bootstrap';
// import { Form } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
// import { CardGroup } from 'react-bootstrap';
// import { Col } from 'react-bootstrap';

// export default class EventPage extends Component {
// 	state = {
// 		userId: this.props.userId,
// 		events: [],
// 		newEvent: {
// 			    rating: '',
// 	            dateAgain: '',
// 	            review: '',
// 	            withWho: '',
//                 photoUrl: '',
//                 lessonLearned: ''
// 		},
// 		redirectToUser: false,
// 		displayEditForm: false
// 	};

// 	getAllEvents = () => {
// 		axios.get(`/api/users/${this.state.userId}/events`).then((res) => {
// 			console.log(res.data);
// 			this.setState({ events: res.data });
// 		});
// 	};

// 	componentDidMount = () => {
// 		this.getAllEvents();
// 	};

// 	toggleEditForm = () => {
// 		this.setState((state, props) => {
// 			return { displayEditForm: !state.displayEditForm };
// 		});
// 	};

// 	handleChange = (e) => {
// 		const changeNewComment = { ...this.state.newComment };
// 		changeNewComment[e.target.name] = e.target.value;
// 		this.setState({ newComment: changeNewComment });
// 	};

// 	createEvent = (e) => {
// 		e.preventDefault();
// 		axios
// 			.post(`/api/users/${this.state.userId}/comments`, {
// 				rating: this.state.newComment.rating,
//                 dateAgain: this.state.newComment.dateAgain,
//                 review: this.state.newComment.review,
//                 withWho: this.state.newComment.withWho,
//                 photoUrl: this.state.newComment.photoUrl,
// 	            lessonLearned: this.state.newComment.lessonLearned
// 			})
// 			.then((res) => {
// 				const commentsList = [ ...this.state.comments ];
// 				commentsList.unshift(res.data);
// 				this.setState({
// 					newComment: {
// 						    rating: '',
// 	                        dateAgain: '',
// 	                        review: '',
// 	                        withWho: '',
//                             photoUrl: '',
//                             lessonLearned: ''
// 					},
// 					displayCommentForm: false,
// 					comments: commentsList
// 				});
// 			});
// 		this.getAllEvents();
// 	};

// 	handleChange = (e) => {
// 		const changedEvent = { ...this.state.newEvent };
// 		changedEvent[e.target.name] = e.target.value;
// 		this.setState({ newEvent: changedEvent });
// 	};

// 	updateEvent = (e) => {
// 		e.preventDefault();
// 		axios
// 			.put(`/api/users/${this.state.userId}`, {
// 				rating: this.state.newComment.rating,
//                 dateAgain: this.state.newComment.dateAgain,
//                 review: this.state.newComment.review,
//                 withWho: this.state.newComment.withWho,
//                 photoUrl: this.state.newComment.photoUrl,
// 	            lessonLearned: this.state.newComment.lessonLearned
// 			})
// 			.then((res) => {
// 				this.setState({ user: res.data, displayEditForm: false });
// 			});
// 		this.getAllEvents();
// 	};