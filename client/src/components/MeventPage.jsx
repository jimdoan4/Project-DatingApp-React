import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default class MeventPage extends Component {
        // We'll set up the  array as an empty array to begin with
  state = {
    maleId: this.props.maleId,
    meventId: this.props.meventId,
    mevents: [],
    newMevent: {
      eventName: "",
      time: "",
      price: "",
      withWho: ""
    },

    redirectToMevent: false,
    displayMeventForm: false,
    displayDateForm: false,
    displayEditForm: false
  };

  getAllMevents = () => {
    axios.get(`/api/males/${this.state.maleId}/mevents`).then(res => { // When the page loads, grab all male event id from the database
      console.log(res.data);
      this.setState({ mevents: res.data });
    });
  };

  componentDidMount = () => {
    this.getAllMevents();
  };

  toggleMeventForm = () => {
    this.setState((state, props) => {
      return { displayMeventForm: !state.displayMeventForm };
    });
  };

  toggleDateForm = () => {  // This toggle the button when clicked
    this.setState((state, props) => {
      return { displayDateForm: !state.displayDateForm };
    });
  };

  toggleEditForm = event => { // This toggle the button when clicked
    this.setState((state, props) => {
      return { displayEditForm: !state.displayEditForm, newMevent: event };
    });
  };

  handleChange = e => {
    const changeNewMevent = { ...this.state.newMevent };
    changeNewMevent[e.target.name] = e.target.value;
    this.setState({ newMevent: changeNewMevent });
  };

  createMevent = e => {
    e.preventDefault();
    axios
      .post(`/api/males/${this.state.maleId}/mevents`, {  // Ask the server to create a new male event in the database
        eventName: this.state.newMevent.eventName,
        time: this.state.newMevent.time,
        price: this.state.newMevent.price,
        withWho: this.state.newMevent.withWho
      })
      .then(res => {
        const meventsList = [...this.state.mevents];  // Copy the old male event list into a new one
        meventsList.unshift(res.data);
        this.setState({
          newMevent: {
            eventName: "",
            time: "",
            price: "",
            withWho: ""
          },
          displayMeventForm: false,
          mevents: meventsList
        });
      });
    this.getAllMevents();
  };

  updateMevent = e => {
    e.preventDefault();
    axios
      .put(
        `/api/males/${this.state.maleId}/mevents/${this.state.newMevent._id}`,  // ask the server to update the male event in the database
        {
          eventName: this.state.newMevent.eventName,
          time: this.state.newMevent.time,
          price: this.state.newMevent.price,
          withWho: this.state.newMevent.withWho
        }
      )
      .then(res => {
        this.getAllMevents();
      });
  };

  deleteMevent = (e, mevent) => {
    e.preventDefault();
    axios
      .delete(`/api/males/${this.state.maleId}/mevents/${mevent._id}`)  // Ask the server to delete this male event id
      .then(res => {
        this.getAllMevents();
      });
  };

  render() {
    if (this.state.redirectToMevent) {
      return <Redirect to={`/males/`} />;
    }
    return (
      <div
        className="text-center jumbotron"
        style={{ position: "block", marginTop: "30px" }}
      >
        <h3
          style={{
            marginTop: "30px",
            fontSize: "22px",
            background: "white",
            border: "1px solid black"
          }}
        >
          Set up a date
        </h3>
        <button className="edit-button" onClick={this.toggleDateForm}>
          Scheduled Events
        </button>
        {this.state.mevents.map(mevent => {
          return (
            <div>
              {this.state.displayDateForm ? (
                <Col>
                  <Card
                    className="text-center"
                    style={{
                      backgroundColor: "white",
                      paddingLeft: "24px",
                      paddingRight: "24px",
                      paddingTop: "24px",
                      paddingBottom: "24px",
                      marginTop: "26px"
                    }}
                  >
                    <p>What is the Event Name: {mevent.eventName}</p>
                    <p>What Time is the Event: {mevent.time}</p>
                    <p>What is the Price of the Event: {mevent.price}</p>
                    <p>Who is your Date: {mevent.withWho}</p>

                    <Container
                      style={{ marginLeft: "0px", textAlign: "center" }}
                      className="text-center"
                    >
                      <Link key={mevent._id}>
                        <button
                          className="edit-button"
                          key={mevent._id}
                          onClick={() => this.toggleEditForm(mevent)}
                        >
                          Edit
                        </button>
                      </Link>
                      <button
                        key={mevent._id}
                        onClick={e => this.deleteMevent(e, mevent)}
                        className="edit-button"
                      >
                        Delete
                      </button>
                    </Container>
                  </Card>
                </Col>
              ) : null}
            </div>
          );
        })}

        <Col>
          <div className="text-center" style={{ marginTop: "30px" }}>
            <button className="edit-button" onClick={this.toggleMeventForm}>
              Add an Event
            </button>
            {this.state.displayMeventForm ? (
              <div className="container">
                {/* <Card
									className="container"
									style={{ width: '25rem', height: '34.4rem', backgroundColor: '#d4d5d5' }}
								> */}
                <Form
                  className="text-center"
                  style={{
                    display: "inline-block",
                    backgroundColor: "white",
                    paddingRight: "25px",
                    marginTop: "14px"
                  }}
                  onSubmit={this.createMevent}
                >
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label htmlFor="eventName">
                        What is the Event Name:{" "}
                      </Form.Label>
                      <Form.Control
                        className="text-center"
                        type="text"
                        name="eventName"
                        onChange={this.handleChange}
                        value={this.state.newMevent.eventName}
                        placeholder="Enter Event"
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label htmlFor="time">
                        What Time is the Event:{" "}
                      </Form.Label>
                      <Form.Control
                        className="text-center"
                        type="number"
                        name="time"
                        onChange={this.handleChange}
                        value={this.state.newMevent.time}
                        placeholder="What Time is your Event"
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label htmlFor="price">
                        What is the Price of the Event:{" "}
                      </Form.Label>
                      <Form.Control
                        className="text-center"
                        type="number"
                        name="price"
                        onChange={this.handleChange}
                        value={this.state.newMevent.price}
                        placeholder="Enter the price"
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label htmlFor="withWho">
                        Who was your Date:{" "}
                      </Form.Label>
                      <Form.Control
                        className="text-center"
                        type="text"
                        name="withWho"
                        onChange={this.handleChange}
                        value={this.state.newMevent.withWho}
                        placeholder="Enter your date's name"
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row />
                  <div style={{ marginLeft: "100px" }} className="text-center">
                    <button
                      className="text-center edit-button"
                      variant="primary"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
                {/* </Card> */}
              </div>
            ) : null}
          </div>
        </Col>
        {this.state.displayEditForm ? (
          <form
            onSubmit={this.updateMevent}
            style={{ marginTop: "50px", marginRight: "50px" }}
            className="col"
          >
            <div className="col">
              <div className="col s12 m6 text-center">
                <label
                  style={{ marginRight: "30px", marginTop: "30px" }}
                  htmlFor="firstName"
                >
                  What is the Event Name:
                </label>
                <input
                  style={{ height: "50px", width: "320px" }}
                  className="text-center"
                  id="eventName"
                  type="text"
                  name="eventName"
                  onChange={this.handleChange}
                  value={this.state.newMevent.eventName}
                />
              </div>
              <div className="col s12 m6 text-center">
                <label
                  style={{ marginRight: "30px", marginTop: "40px" }}
                  htmlFor="lastName"
                >
                  What Time is the Event:{" "}
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
                  value={this.state.newMevent.time}
                />
              </div>
              <div className="col s12 m6 text-center">
                <label
                  style={{ marginRight: "30px", marginTop: "40px" }}
                  htmlFor="age"
                >
                  What is the Price of the Event:{" "}
                </label>
                <input
                  style={{
                    height: "54px",
                    width: "390px",
                    marginRight: "53px"
                  }}
                  className="text-center"
                  id="price"
                  type="number"
                  name="price"
                  onChange={this.handleChange}
                  value={this.state.newMevent.price}
                />
              </div>
              <div className="col s12 m6 text-center">
                <label
                  style={{ marginRight: "30px", marginTop: "40px" }}
                  htmlFor="bio"
                >
                  Who was your Date:
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
                  value={this.state.newMevent.withWho}
                />
              </div>
            </div>
            <div className="text-center" style={{ marginTop: "20px" }}>
              <button className="text-center edit-button">Submit</button>
            </div>
          </form>
        ) : null}
      </div>
    );
  }
}
