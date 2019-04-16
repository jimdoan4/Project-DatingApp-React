import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import UserLogin from './components/UserLogin';
import Home from './components/Home';
class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Navbar
						style={{ backgroundColor: '#a00c54' }}
						collapseOnSelect
						expand="lg"
						// bg="dark"
						variant="dark"
					>
						<Navbar.Brand href="/">W-Oder</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="mr-auto">
								<NavDropdown title="Women" id="collasible-nav-dropdown">
									<NavDropdown.Item>
										<Link to="/apparels" style={{ color: 'black ' }}>
											Date Woman
										</Link>
									</NavDropdown.Item>

									<NavDropdown.Divider />
								</NavDropdown>
							</Nav>
							<Nav.Link>
								<Link to="/users" style={{ color: 'white ' }}>
									Profile Account
								</Link>
							</Nav.Link>
						</Navbar.Collapse>
					</Navbar>

					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/users" component={UserLogin} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
