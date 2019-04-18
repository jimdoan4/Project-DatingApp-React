import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

export default class NavBar extends Component {
	render() {
		return (
			<Navbar style={{ backgroundColor: 'white', color: 'black' }} collapseOnSelect expand="lg" variant="dark">
				<Navbar.Brand style={{ color: 'black' }} href="/">
					DATA CODER
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ color: 'black' }} />
				<Navbar.Collapse id="responsive-navbar-nav" style={{ color: 'black' }}>
					<Nav className="mr-auto" style={{ backgroundColor: 'GRAY' }}>
						<NavDropdown style={{ color: 'black' }} title="Find Your Date" id="collasible-nav-dropdown">
							<NavDropdown.Item style={{ color: 'black' }}>
								<Link to="/users/" style={{ color: 'black' }}>
									Date Woman
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item style={{ color: 'black' }}>
								<Link to="/users/" style={{ color: 'black' }}>
									Date Men
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item style={{ color: 'black' }}>
								<Link to="/users" style={{ color: 'black' }}>
									Date Gay Men
								</Link>
							</NavDropdown.Item>
								<NavDropdown.Divider />
							<NavDropdown.Item style={{ color: 'black' }}>
								<Link to="/users" style={{ color: 'black' }}>
									Date Lesbian Woman
								</Link>
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav.Link style={{ color: 'black' }}>
						<Link to="/login/" style={{ color: 'black' }}>
							Profile Account
						</Link>
					</Nav.Link>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
