import React, { Component } from "react";
import { render } from "react-dom";
import { Redirect, Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import { HomeContainer } from "./styled-components/HomeStyles";

export default class Home extends Component {
  render() {
    return (
      <HomeContainer style={{ height: "100%" }}>
        <Jumbotron className="main-page-image">
          <div className="text-center">
            <Link className="" to="/login/">
              <button className="join-button">Join Now</button>
            </Link>
          </div>
        </Jumbotron>
      </HomeContainer>
    );
  }
}
