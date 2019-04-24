import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
import { Nav } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';


export default class NavBar extends Component {
	render() {
		return (
			<Navbar style={{ backgroundColor: 'GREY', color: 'black' }} collapseOnSelect expand="lg" variant="dark">
				<Navbar.Brand className ='rockstar' style={{ color: 'black' }} href="/">
					SUAVE
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ color: 'black' }} />
				<Navbar.Collapse id="responsive-navbar-nav" style={{ color: '#720F1D' }}>
					<Nav className="mr-auto" style={{ backgroundColor: 'grey', color: 'black' }}>
						<NavDropdown style={{ color: 'black' }} title="Find Your Match" id="collasible-nav-dropdown">
							<NavDropdown.Item className="text-center" style={{ color: 'black' }}>
								<Link to="/users/" style={{ color: 'black' }}>
									Woman
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item className="text-center" style={{ color: 'black' }}>
								<Link to="/males/" style={{ color: 'black' }}>
									Men
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item className="text-center" style={{ color: 'black' }}>
								<Link className="text-center" to="/gaymales/" style={{ color: 'black' }}>
									Gay Men
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item className="text-center" style={{ color: 'black' }}>
								<Link to="/lesbians/" style={{ color: 'black' }}>
									Lesbian Women
								</Link>
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
				<Nav.Link style={{ color: 'black' }}>
					<Link to="/login/" style={{ color: 'black' }}>
						Profile Account
					</Link>
				</Nav.Link>
			</Navbar>
		);
	}
}
