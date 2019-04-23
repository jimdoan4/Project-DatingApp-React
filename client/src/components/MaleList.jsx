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

export default class MaleList extends Component {
	state = {
		males: [],
		newMale: {
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
		maleId: this.props.match.params.maleId
	};

	componentDidMount = () => {
		this.findAllMales();
	};

	findAllMales = () => {
		axios.get('/api/males/').then((res) => {
			this.setState({ males: res.data });
		});
	};

	deleteMale = (e, male) => {
		e.preventDefault()
		axios.delete(`/api/males/${male._id}`).then((res) => {
			this.findAllMales()
		});
	};

	render() {
		if (this.state.redirectToUser) {
			return <Redirect to={`/males}`} />;
		}
		return (
			<div>
			
				<div
					className="row"
					style={{
						marginLeft: '20px',
						marginBottom: '30px',
						marginTop: '50px'
					}}
				>
					{this.state.males.map((male) => {
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
										key={male._id}
										className="text-center hidden"
										style={{
											width: '16.8rem',
											marginLeft: '30px',
											marginRight: '30px',
											backgroundColor: '#1e3959'
										}}
									>
										<Card.Img
											className="text-center zoom"
											style={{ height: '250px', width: '267px' }}
											variant="top"
											src={male.photoUrl}
										/>

										<Card.Body>
											<Card.Title style={{ color: 'white' }}>{male.firstName}</Card.Title>
											<Card.Title style={{ color: 'white' }}>{male.age}</Card.Title>
									
											<Card.Text style={{ color: 'white' }}>{male.location}</Card.Text>
									
											<div key={male._id}>
												<Link to={`/males/${male._id}`} key={male._id}>
													<button style={{ marginRight: '16px' }}>Interested</button>
												</Link>
												<button
												    key={male._id}
													onClick={(e) => this.deleteMale(e, male)}
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

		
				</div>
			</div>
		);
	}
}
