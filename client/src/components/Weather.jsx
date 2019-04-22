import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Weather = props =>
  <div className='weather'>
     {/* <p>City: </p>
    <p>{props.location}</p>  */}

    <div>City: 
    <p>{props.city}</p>
    </div>

    <div>Temperature: 
    <p>{props.temp}</p>
    </div>

    <div>Sky: 
    <p>{props.clouds}</p>
  </div>
  </div>
  
export default Weather;
