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

export default class McommentPage extends Component {
	state = {
		maleId: this.props.maleId,
		mcomments: [],
		newMcomment: {
			rating: '',
			dateAgain: '',
			review: '',
			withWho: '',
			photoUrl: '',
			lessonLearned: ''
		},
		redirectToMcomment: false,
		displayMcommentForm: false
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
				photoUrl: this.state.newMcomment.photoUrl,
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
						photoUrl: '',
						lessonLearned: ''
					},
					displayMcommentForm: false,
					mcomments: mcommentsList
				});
			});
		this.getAllMcomments();
	};

	handleChange = (e) => {
		const changedMcomment = { ...this.state.newMcomment };
		changedMcomment[e.target.name] = e.target.value;
		this.setState({ newMcomment: changedMcomment });
	};

	updateMcomment = (e) => {
		e.preventDefault();
		axios
			.put(`/api/males/${this.state.maleId}`, {
				rating: this.state.Mcomment.rating,
				dateAgain: this.state.Mcomment.dateAgain,
				review: this.state.Mcomment.review,
				withWho: this.state.Mcomment.withWho,
				photoUrl: this.state.Mcomment.photoUrl,
				lessonLearned: this.state.Mcomment.lessonLearned
			})
			.then((res) => {
				this.setState({ male: res.data, displayMcommentForm: false });
			});
		this.getAllMcomments();
	};

	deleteMcomment = () => {
		axios.delete(`/api/males/${this.state.maleId}/mcomments/${this.state.mcommentId}`).then((res) => {
			this.setState({ redirectToMcomment: true });
		});
	};

	render() {
		if (this.state.redirectToMcomment) {
			return <Redirect to={`/males/`} />;
		}
		return (
			<div>
				{this.state.mcomments.map((mcomment) => {
					return (
						<div>
							<Card>
								<Card className="text-center" style={{ backgroundColor: 'white', paddingLeft: '24px', paddingRight: '24px', paddingTop: '24px', paddingBottom: '7px' }}>
									<p>
										<Link
											to={`/males/${this.state.maleId}/mcomments/${mcomment._id}`}
											key={mcomment._id}
										>
											Who was my date? {mcomment.withWho}
										</Link>
									</p>
									<p>Rating for this date: {mcomment.rating}</p>
									<p>Would I go on a second date? {mcomment.dateAgain}</p>
									<p>What is your review of this date? {mcomment.review}</p>
									<p>What did I learn from this date? {mcomment.lessonLearned}</p>
								</Card>
							</Card>
						</div>
					);
				})}
				<br />
				{/* <br /> */}
				<button style= {{marginBottom: '20px'}} onClick={this.toggleMcommentForm}>Add a Review</button>
				   {
          this.state.displayMcommentForm ?
				<div className="container text-center">
					<Card className="container" style={{ width: '28rem', height: '42.5rem', paddingTop: '15px' }}>
						<Form
							className="text-center"
							style={{ display: 'inline-block', backgroundColor: 'white', paddingRight: '23px' }}
							onSubmit={this.createMcomment}
						>
						<Form.Row>
								<Form.Group as={Col} controlId="formGridPassword">
									<Form.Label htmlFor="withWho">Who is your date? </Form.Label>
									<Form.Control
									className= 'text-center'
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
									<Form.Label htmlFor="rating">Rating? </Form.Label>
									<Form.Control
									className= 'text-center'
										type="number"
										name="rating"
										onChange={this.handleChange}
										value={this.state.newMcomment.rating}
										placeholder="Enter Rating? "
									/>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group as={Col} controlId="formGridEmail">
									<Form.Label htmlFor="dateAgain">Date Again? </Form.Label>
									<Form.Control
									className= 'text-center'
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
									className= 'text-center'
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
									<Form.Label htmlFor="lessonLearned">What did you learn from your date?  </Form.Label>
									<Form.Control
									className= 'text-center'
										type="text"
										name="lessonLearned"
										onChange={this.handleChange}
										value={this.state.newMcomment.lessonLearned}
										placeholder="Enter Lesson Learned? "
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
										marginTop: '10px',
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
				: null
						}
			</div>
		);
	}
}