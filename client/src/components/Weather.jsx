import React, { Component } from "react";

const Weather = props => (
  <div className="weather">
    <div>
      City:
      <p>{props.city}</p>
    </div>

    <div>
      Temperature:
      <p>{props.temp}</p>
    </div>

    <div>
      Humidity:
      <p>{props.humidity}</p>
    </div>

    <div>
      Speed:
      <p>{props.speed}</p>
    </div>

    <div>
      Sky:
      <p>{props.clouds}</p>
    </div>
  </div>
);

export default Weather;
