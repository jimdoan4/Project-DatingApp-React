// import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
// import axios from 'axios';

// export default class SingleUser extends Component {
// 	state = {
// 		userId: this.props.userId,
// 		currentUser: {
// 			// _id: '',
// 			userName: '',
// 			password: '',
// 			firstName: '',
// 			lastName: '',
// 			age: '',
// 			photoUrl: '',
// 			location: '',
// 			bio: '',
// 			comments: [],
// 			events: []
// 		},
// 		redirectToHome: false,
//         displayEditForm: false
//         // userId: this.props.match.params.userId,
// 	};

// 	getUserData = () => {
// 		axios.get(`/api/users/${this.state.userId}`).then((res) => {
// 			this.setState({ currentUser: res.data });
// 		});
// 	};

// 	componentDidMount = () => {
// 		this.getUserData();
// 	};

// 	toggleEditForm = () => {
// 		this.setState((state, props) => {
// 			return { displayEditForm: !state.displayEditForm };
// 		});
// 	};

// 	handleChange = (e) => {
// 		const updatedUser = { ...this.state.currentUser };
// 		updatedUser[e.target.name] = e.target.value;
// 		this.setState({ currentUser: updatedUser });
// 	};

// 	updateUser = (e) => {
// 		e.preventDefault();
// 		axios
// 			.put(`/api/users/${this.state.userId}`, {
// 				password: this.state.currentUser.password,
// 				userName: this.state.currentUser.userName,
// 				firstName: this.state.currentUser.firstName,
// 				lastName: this.state.currentUser.lastName,
// 				age: this.state.currentUser.age,
// 				bio: this.state.currentUser.bio,
// 				photoUrl: this.state.currentUser.photoUrl,
// 				location: this.state.currentUser.location
// 			})
// 			.then((res) => {
// 				this.setState({ user: res.data, displayEditForm: false });
// 			});
// 		this.getUserData();
// 	};

// 	// deleteUser = () => {
// 	// 	axios.delete(`/api/users/${this.state.userId}`).then((res) => {
// 	// 		this.setState({ redirectToHome: true });
// 	// 	});
// 	// };

// 	render() {
// 		if (this.state.redirectToHome) {
// 			return <Redirect to="/users/" />;
// 		}
// return (
// 			<div className="container">
// 				<h3 className="text-center">{this.state.currentUser.userName}</h3>
// 				{this.state.displayEditForm ? (
// 					<form onSubmit={this.updateUser} className="container">
// 						<div className="container" style={{ textAlign: 'center' }}>
// 							<label htmlFor="userName" style={{ textAlign: 'center' }}>
// 								Username
// 							</label>
// 							<input
// 								className="container"
// 								id="userName"
// 								type="text"
// 								name="userName"
// 								onChange={this.handleChange}
// 								value={this.state.currentUser.userName}
// 							/>
// 						</div>

// 						<div style={{ textAlign: 'center' }}>
// 							<label style={{ marginTop: '10px' }} htmlFor="password" className="container">
// 								Password
// 							</label>
// 							<input
// 								id="password"
// 								type="password"
// 								name="password"
// 								onChange={this.handleChange}
// 								value={this.state.currentUser.password}
// 							/>
// 						</div>
// 						<div style={{ marginTop: '20px' }} className="text-center">
// 							<button className="text-center">Update</button>
// 						</div>
// 					</form>

// 				) : (
// 					<div />
// 				)}
// 				<div className="col">
// 					<button style={{ marginTop: '20px' }} className="col text-center">
// 						Edit User
// 					</button>
// 					{/* <button style={{ marginTop: '30px' }} onClick={this.deleteUser} className=" col text-center">
// 						Delete
// 					</button> */}
// 				</div>
// 			</div>
// 		);
// 	}
// }