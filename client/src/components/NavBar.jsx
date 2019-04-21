import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

export default class NavBar extends Component {
	render() {
		return (
			<Navbar style={{ backgroundColor: 'white', color: 'black' }} collapseOnSelect expand="lg" variant="dark">
				<Navbar.Brand style={{ color: '#720F1D' }} href="/">
					SUAVE
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ color: '#720F1D' }} />
				<Navbar.Collapse id="responsive-navbar-nav" style={{ color: '#720F1D' }}>
					<Nav className="mr-auto" style={{ backgroundColor: '#720F1D', color: '#720F1D' }}>
						<NavDropdown style={{ color: '#720F1D' }} title="Find Your Match" id="collasible-nav-dropdown">
							<NavDropdown.Item className="text-center" style={{ color: '#720F1D' }}>
								<Link to="/users/" style={{ color: '#720F1D' }}>
									Woman
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item className="text-center" style={{ color: 'black' }}>
								<Link to="/males/" style={{ color: '#720F1D' }}>
									Men
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item className="text-center" style={{ color: 'black' }}>
								<Link className="text-center" to="/gaymales/" style={{ color: '#720F1D' }}>
									Gay Men
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item className="text-center" style={{ color: 'black' }}>
								<Link to="/lesfemales/" style={{ color: '#720F1D' }}>
									Lesbian Women
								</Link>
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav.Link style={{ color: 'black' }}>
						<Link to="/login/" style={{ color: '#720F1D' }}>
							Profile Account
						</Link>
					</Nav.Link>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
