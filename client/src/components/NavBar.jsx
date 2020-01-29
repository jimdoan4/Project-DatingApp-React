import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavContainer } from "./styled-components/NavStyles";

export default class NavBar extends Component {
  render() {
    return (
      <NavContainer>
        <header>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="/">
                SUAVE Match <span><i className="fas fa-heart text-danger"></i></span>
              </a>
              <button
                className="navbar-toggler close"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Close"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link
                      to="/users/"
                      className="nav-link text-dark lead font-weight-bold"
                    >
                      Women
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/males/"
                      className="nav-link text-dark lead font-weight-bold"
                    >
                      Men
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/login/"
                      className="nav-link text-dark lead font-weight-bold"
                    >
                      SIGN UP 
                   
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </NavContainer>
    );
  }
}
