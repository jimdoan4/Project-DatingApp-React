import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default class SingleEvent extends Component {
        // We'll set up the  array as an empty array to begin with
  state = {
    event: {
      eventName: "",
      time: "",
      price: "",
      withWho: "",
      photoUrl: ""
    },
    redirectToEvent: false,
    displayEditForm: false,
    userId: this.props.match.params.userId,
    eventId: this.props.match.params.eventId
  };

  getSingleEventData = () => {
    axios
      .get(`/api/users/${this.state.userId}/events/${this.state.eventId}`) // When the page loads, grab all user event id from the database
      .then(res => {
        this.setState({ event: res.data });
      });
  };

  componentDidMount = () => {
    this.getSingleEventData();
  };

  toggleEditForm = () => {  // This toggle the button when clicked
    this.setState((state, props) => {
      return { displayEditForm: !state.displayEditForm };
    });
  };

  handleChange = e => {
    const updateEvent = { ...this.state.event };
    updateEvent[e.target.name] = e.target.value;
    this.setState({ event: updateEvent });
  };

  updateEvent = e => {
    e.preventDefault();
    axios
      .put(`/api/users/${this.state.userId}/events/${this.state.eventId}`, {  // ask the server to update the user event in the database
        eventName: this.state.event.eventName,
        time: this.state.event.time,
        price: this.state.event.price,
        withWho: this.state.event.withWho,
        photoUrl: this.state.event.photoUrl
      })
      .then(res => {
        this.setState({ event: res.data, displayEditForm: false });
      });
    this.getSingleEventData();
  };

  deleteEvent = () => {
    axios
      .delete(`/api/users/${this.state.userId}/events/${this.state.eventId}`)  // Ask the server to delete this user event id
      .then(res => {
        this.setState({ redirectToEvent: true });
      });
  };

  render() {
    if (this.state.redirectToEvent) {
      return <Redirect to={`/users/`} />;
    }
    return (
      <div className="text-center">
        <h3 style={{ marginTop: "30px" }} className="text-center">
          {this.state.event.eventName}
        </h3>
        {this.state.displayEditForm ? (
          <Form onSubmit={this.updateEvent} className="col s12">
            <Col>
              <div className="col s12 m6 text-center">
                <label
                  style={{ marginRight: "30px", marginTop: "30px" }}
                  htmlFor="eventName"
                >
                  Event Name
                </label>
                <input
                  style={{ height: "50px", width: "320px" }}
                  className="text-center"
                  id="eventName"
                  type="text"
                  name="eventName"
                  onChange={this.handleChange}
                  value={this.state.event.eventName}
                />
              </div>
              <div className="col s12 m6 text-center">
                <label
                  style={{ marginRight: "30px", marginTop: "40px" }}
                  htmlFor="time"
                >
                  Time
                </label>
                <input
                  style={{
                    height: "54px",
                    width: "390px",
                    marginRight: "53px"
                  }}
                  className="text-center"
                  id="time"
                  type="text"
                  name="time"
                  onChange={this.handleChange}
                  value={this.state.event.time}
                />
              </div>
              <div className="col s12 m6 text-center">
                <label
                  style={{ marginRight: "30px", marginTop: "40px" }}
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  style={{
                    height: "54px",
                    width: "390px",
                    marginRight: "53px"
                  }}
                  className="text-center"
                  id="price"
                  type="text"
                  name="price"
                  onChange={this.handleChange}
                  value={this.state.event.price}
                />
              </div>
              <div className="col s12 m6 text-center">
                <label
                  style={{ marginRight: "30px", marginTop: "40px" }}
                  htmlFor="withWho"
                >
                  Your Date:{" "}
                </label>
                <input
                  style={{
                    height: "54px",
                    width: "390px",
                    marginRight: "53px"
                  }}
                  className="text-center"
                  id="withWho"
                  type="text"
                  name="withWho"
                  onChange={this.handleChange}
                  value={this.state.event.withWho}
                />
              </div>
            </Col>
            <div className="text-center" style={{ marginTop: "20px" }}>
              <Button className="text-center edit-button">Submit</Button>
            </div>
          </Form>
        ) : (
          <div>
            <div className="text-center">
              <Button
                onClick={this.toggleEditForm}
                className="edit-button"
              >
                Edit Event
              </Button>
              <Button
                 className="edit-button"
                onClick={this.deleteEvent}
              >
                Delete Event
              </Button>
            </div>
          </div>
        )}
        <div className="text-center" style={{ marginTop: "18px" }}>
          <Link className="text-center" to={`/users/${this.state.userId}/`}>
          <Button className="edit-button">
            Back To User
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
