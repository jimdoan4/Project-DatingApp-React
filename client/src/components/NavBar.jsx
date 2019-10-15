import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { NavContainer } from "./styled-components/NavStyles";

export default class NavBar extends Component {
  render() {
    return (
      <NavContainer>
        <Navbar
          className="nav-bg-color"
          collapseOnSelect
          variant="dark"
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand className="nav-title" href="/">
            SUAVE
          </Navbar.Brand>
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{ color: "#720F1D" }}
          >
            <Nav className="mr-auto">
              <NavDropdown title="Find Your Match" id="collasible-nav-dropdown">
                <NavDropdown.Item className="text-center">
                  <Link to="/users/">Woman</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="text-center">
                  <Link to="/males/">Men</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Nav.Link>
            <Link className="profile-link" to="/login/">
              Profile Account
            </Link>
          </Nav.Link>
        </Navbar>
      </NavContainer>
    );
  }
}
