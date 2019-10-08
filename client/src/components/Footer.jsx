import React, { Component } from "react";
import axios from "axios";
import { Dropdown } from "react-bootstrap";
import { ButtonToolbar } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";
import { FooterContainer } from "./styled-components/FooterStyles";
import Weather from "./Weather";
import InputField from "./InputField";

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
        <footer
          className="page-footer footer-bg-color font-small"
          style={{ paddingBottom: "5px", color: "black" }}
        >
          <div className="text-center">
            <InputField queryWeather={this.queryWeather} />
            <ButtonToolbar style={{ marginRight: "20px" }}>
              {["left"].map(direction => (
                <DropdownButton
                  style={{ color: "black" }}
                  drop={direction}
                  placeholder="x"
                  id={`dropdown-button-drop-${direction}`}
                  key={direction}
                >
                  <Dropdown.Item
                    style={{
                      marginTop: "15px",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      color: "black"
                    }}
                  >
                    <Weather
                      city={this.state.weather.name}
                      temp={this.state.temp}
                      humidity={this.state.humidity}
                      speed={this.state.speed}
                      clouds={this.state.clouds}
                    />
                  </Dropdown.Item>
                </DropdownButton>
              ))}
            </ButtonToolbar>
          </div>

          <div className="text-center">
            © 2019 Copyright:
            <a href="/"> Jim Doan</a>
          </div>
        </footer>
      </FooterContainer>
    );
  }
}
