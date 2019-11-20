import React, { Component } from "react";
import axios from "axios";
import { FooterContainer } from "./styled-components/FooterStyles";

export default class Footer extends Component {
  constructor() {
    super();
    this.state = {
      weather: [],
      temp: [],
      humidity: [],
      speed: [],
      clouds: []
    };
  }

  getWeather = query => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/find?q=${query}&units=imperial&appid=f92c1f4990b0574d4a4e4d3dd556f388`
      )
      .then(response => {
        this.setState({
          weather: response.data.list[0],
          temp: response.data.list[0].main.temp,
          humidity: response.data.list[0].main.humidity,
          speed: response.data.list[0].wind.speed,
          clouds: response.data.list[0].weather[0].description
        });
      })
      .catch(error => {
        console.log("Error", error);
      });
  };

  queryWeather = (event, cityName) => {
    if (event.key === "Enter") {
      event.preventDefault();
      cityName = event.target.value;
      this.getWeather(cityName);
    }
  };
  render() {
    return (
      <FooterContainer>
         <section className="one">
          <div className="container" >
        <div className="row mt-5 contact">
              <div className="col-md-3">
                <h4>SAUVE</h4>
                <p>
                  Lorem ipsum hit me a bum, <br /> connector has done it a bit
                </p>
              </div>
              <div className="col-md-2">
                <h4>Social Media</h4>
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
              </div>
              <div className="col-md-3">
                <h4>Contact</h4>
                <a href="#">678-468-6012</a>
                <a href="#">Date@sauve.com</a>
              </div>
              <div className="col-md-4">
                <h4>Enter your email address and submit to subscribe</h4>
                <form>
                  <input
                    className="textField"
                    type="text"
                    placeholder="Your Email Here"
                  />
                  <input className="submitBtn" type="submit" name="" />
                </form>
              </div>
            </div>
            <div className="row copyright">
              <div className="col-md-12">
                <p>&copy; 2019 SUAVE DATING</p>
              </div>
            </div>
            </div>
            </section>
      </FooterContainer>
    );
  }
}
