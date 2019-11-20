import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default class EventPage extends Component {
  // We'll set up the  array as an empty array to begin with
  state = {
    userId: this.props.userId,
    eventId: this.props.eventId,
    events: [],
    newEvent: {
      eventName: "",
      time: "",
      price: "",
      withWho: ""
    },
    redirectToEvent: false,
    displayEditForm: true,
    displayEventForm: true
  };

  getAllEvents = () => {
    axios.get(`/api/users/${this.state.userId}/events`).then(res => {
      // When the page loads, grab all events from the database
      console.log(res.data);
      this.setState({ events: res.data });
    });
  };

  componentDidMount = () => {
    this.getAllEvents();
  };

  toggleEditForm = () => {
    // This toggle the button when clicked
    this.setState((state, props) => {
      return { displayEditForm: !state.displayEditForm };
    });
  };

  toggleEventForm = () => {
    // This toggle the button when clicked
    this.setState((state, props) => {
      return { displayEventForm: !state.displayEventForm };
    });
  };

  handleChange = e => {
    const changeNewEvent = { ...this.state.newEvent };
    changeNewEvent[e.target.name] = e.target.value;
    this.setState({ newEvent: changeNewEvent });
  };

  createEvent = e => {
    e.preventDefault();
    axios
      .post(`/api/users/${this.state.userId}/events`, {
        // Ask the server to create a new user event in the database
        eventName: this.state.newEvent.eventName,
        time: this.state.newEvent.time,
        price: this.state.newEvent.price,
        withWho: this.state.newEvent.withWho
      })
      .then(res => {
        const eventsList = [...this.state.events]; // Copy the old events list into a new one
        eventsList.unshift(res.data);
        this.setState({
          newEvent: {
            eventName: "",
            time: "",
            price: "",
            withWho: ""
          },
          displayEventForm: false,
          events: eventsList
        });
      });
    this.getAllEvents();
  };

  handleChange = e => {
    const changedEvent = { ...this.state.newEvent };
    changedEvent[e.target.name] = e.target.value;
    this.setState({ newEvent: changedEvent });
  };

  updateEvent = e => {
    e.preventDefault();
    axios
      .put(`/api/users/${this.state.userId}/events`, {
        // ask the server to update the event in the database
        eventName: this.state.newEvent.eventName,
        time: this.state.newEvent.time,
        price: this.state.newEvent.price,
        withWho: this.state.newEvent.withWho
      })
      .then(res => {
        this.setState({ user: res.data, displayEditForm: false });
      });
    this.getAllEvents();
  };

  deleteEvent = (e, event) => {
    e.preventDefault();
    axios
      .delete(`/api/users/${this.state.userId}/events/${event._id}`) // Ask the server to delete this event id
      .then(res => {
        this.getAllEvents();
      });
  };

  render() {
    if (this.state.redirectToUser) {
      return <Redirect to={`/users/`} />;
    }
    return (
      <Jumbotron
        className="text-center bg-light"
      >
        <h3
          style={{
            fontSize: "18px",
            marginBottom: "36px",
            padding: "12px 1px 12px 1px",
            background: "white",
            border: "1px solid white",
            borderRadius: "10px",
            color: "black",
            textTransform: "uppercase",
            letterSpacing: "1.3px",
            fontWeight: "bold"
          }}
        >
          Schedule a Date
        </h3>
        <Button className="edit-button" onClick={this.toggleEventForm}>
          Scheduled Events
        </Button>
        <div>
          {this.state.events.map(event => {
            return (
              <div>
                {this.state.displayEventForm ? (
                  <Container className="text-center">
                  <Card
                    className="text-center"
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      paddingTop: "20px",
                      paddingBottom: "20px",
                      marginTop: "26px",
                      textTransform: "uppercase",
                      letterSpacing: "1.3px",
                      fontWeight: "bold", 
                      fontSize: "11px"
                    }}
                  >
                    <p>
                      Event Name <br />
                      {event.eventName}
                    </p>
                    <p>
                      Scheduled time <br />
                      {event.time}
                    </p>
                    <p>
                    Event Price <br />
                      {event.price}
                    </p>
                    <p>
                      who is your lucky Date <br />
                      {event.withWho}
                    </p>

                    <Container
                      style={{ textAlign: "center" }}
                      className="text-center"
                    >
                      <Link
                        to={`/users/${this.state.userId}/events/${event._id}`}
                        key={event._id}
                      >
                        <Button className="edit-button">Edit Event</Button>
                      </Link>
                      <Button
                        className="edit-button"
                        key={event._id}
                        onClick={e => this.deleteEvent(e, event)}
                      >
                        Delete Event
                      </Button>
                    </Container>
                  </Card>
                  </Container>
                ) : null}
              </div>
            );
          })}
      
          <Col className="text-center" style={{ marginTop: "30px" }}>
            <Button className="edit-button" onClick={this.toggleEditForm}>
              Add an Event
            </Button>
            {this.state.displayEditForm ? (
              <Container className="text-center">
                <Form
                  className="text-center bg-light"
                  style={{
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      paddingTop: "20px",
                      paddingBottom: "20px",
                      marginTop: "26px",
                      textTransform: "uppercase",
                      letterSpacing: "1.3px",
                      fontWeight: "bold",
                      fontSize: "11px"
                  }}
                  onSubmit={this.createEvent}
                >
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label htmlFor="eventName">Event Name</Form.Label>
                      <Form.Control
                        className="text-center"
                        type="text"
                        name="eventName"
                        onChange={this.handleChange}
                        value={this.state.newEvent.eventName}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label htmlFor="time">Event Time</Form.Label>
                      <Form.Control
                        className="text-center"
                        type="number"
                        name="time"
                        onChange={this.handleChange}
                        value={this.state.newEvent.time}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label htmlFor="price">Event Price</Form.Label>
                      <Form.Control
                        className="text-center"
                        type="number"
                        name="price"
                        onChange={this.handleChange}
                        value={this.state.newEvent.price}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label htmlFor="withWho">
                        Who is your lucky date{" "}
                      </Form.Label>
                      <Form.Control
                        className="text-center"
                        type="text"
                        name="withWho"
                        onChange={this.handleChange}
                        value={this.state.newEvent.withWho}
                      />
                    </Form.Group>
                  </Form.Row>
                    <Button
                      className="edit-button"
                      variant="primary"
                      type="submit"
                    >
                      Submit Event
                    </Button>
                </Form>
              </Container>
            ) : null}
          </Col>
        </div>
      </Jumbotron>
    );
  }
}
