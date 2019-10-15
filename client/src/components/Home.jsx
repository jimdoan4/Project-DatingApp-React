import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HomeContainer } from "./styled-components/HomeStyles";

export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <div className="home-img-wrapper">
          <img src="https://i2-prod.mirror.co.uk/incoming/article12836783.ece/ALTERNATES/s1200b/1_Couple-walking-with-heart-shaped-balloon.jpg" />
          <div className="overlay-desc join-headline">
         
              <Link to="/login/" className="join-text centered">
               JOIN NOW
              </Link>
      
          </div>
        </div>
      </HomeContainer>
    );
  }
}
