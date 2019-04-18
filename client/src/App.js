import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
// import UserLogin from './components/UserLogin';
import UserList from './components/UserList';
import UserShowPage from './components/UserShowPage';
import SingleEvent from './components/SingleEvent';
import SingleComment from './components/SingleComment';
import Home from './components/Home';

class App extends Component {
	render() {
		return (
			<Router>
				<div style={{ color: 'black' }}>
					<Navbar
						style={{ backgroundColor: 'white', color: 'black' }}
						collapseOnSelect
						expand="lg"
						variant="dark"
					>
						<Navbar.Brand style={{ color: 'black' }} href="/">
							DATER CODER
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ color: 'black' }} />
						<Navbar.Collapse id="responsive-navbar-nav" style={{ color: 'black' }}>
							<Nav className="mr-auto" style={{ backgroundColor: 'GRAY' }}>
								<NavDropdown style={{ color: 'black' }} title="Women" id="collasible-nav-dropdown">
									<NavDropdown.Item style={{ color: 'black' }}>
										<Link to="/users/" style={{ color: 'black' }}>
											Date Woman
										</Link>
									</NavDropdown.Item>

									<NavDropdown.Divider />
								</NavDropdown>
							</Nav>
							<Nav.Link style={{ color: 'black' }}>
								<Link to="/login/" style={{ color: 'black' }}>
									Profile Account
								</Link>
							</Nav.Link>
						</Navbar.Collapse>
					</Navbar>

					<Switch>
						{/* <Route exact path="/login" component={UserLogin} />  */}
						<Route exact path="/" component={Home} />
						<Route exact path="/users" component={UserList} />
						<Route exact path="/users/:userId" component={UserShowPage} />
						<Route exact path="/users/:userId/events/:eventId" component={SingleEvent} />
						<Route exact path="/users/:userId/comments/:commentId" component={SingleComment} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
