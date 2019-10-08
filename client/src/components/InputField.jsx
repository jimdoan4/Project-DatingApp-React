import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const InputField = props => (
  <Form style={{ color: "black" }} onSubmit={""}>
    <Form.Group style={{ color: "black" }} controlId="">
      <Form.Control
        style={{ color: "black" }}
        type="text"
        placeholder="Enter Your City Name To Check the Current Weather"
        onKeyDown={props.queryWeather}
      />
    </Form.Group>
  </Form>
);

export default InputField;
