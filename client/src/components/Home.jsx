import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HomeContainer } from "./styled-components/HomeStyles";

export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
      <div className="wrapper">
        <div className="bg"></div>
        <div className="img-wrapper01">
          <div className="img01"></div>
          <div className="block"></div>
        </div>
        <div className="img-wrapper02">
          <div className="img02"></div>
          <div className="block"></div>
        </div>
        <div className="text">
          <h1>
            <span className="hidetext">SUAVE DATING</span>
          </h1>
          <p>
            <span className="hidetext">Find your match</span>
          </p>
          <div className="m-5 ml-5">
            <Link to="/login/" className="join-text">
              JOIN NOW
            </Link>
          </div>
        </div>
        <div className="bottomnav">
          <div className="next">up next</div>
          <div className="nav">
            <ul>
              <li>
                <ion-icon name="ios-arrow-up"></ion-icon>
              </li>
              <li>
                <ion-icon name="ios-arrow-down"></ion-icon>
              </li>
            </ul>
            <div className="bottomnav-img"></div>
          </div>
        </div>
        </div>
      </HomeContainer>
    );
  }
}
