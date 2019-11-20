import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
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
    displayDateForm: true,
    displayEditForm: true
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
        className="text-center bg-light"
      >
        <h3 className="text-light bg-dark m-3 text-uppercase"
          style={{
            fontSize: "18px",
            padding: "12px 1px 12px 1px",
            border: "1px solid white",
            borderRadius: "10px",
            letterSpacing: "1.3px",
            fontWeight: "bold"
          }}
        >
          Schedule a Date
        </h3>
        <Button className="edit-button" onClick={this.toggleDateForm}>
          Scheduled Events
        </Button>
        <div className="row">
        {this.state.mevents.map(mevent => {
          return (
            <div className="col-md-4">
              {this.state.displayDateForm ? (
                  <Card
                    className="text-center pb-3 pt-3 mt-2 text-uppercase"
                    style={{
                      letterSpacing: "1.3px",
                      fontWeight: "bold", 
                      fontSize: "11px"
                    }}
                  >
                    <p>Event Name <br/>{mevent.eventName}</p>
                    <p>Scheduled time<br/>{mevent.time}</p>
                    <p>Event Price <br/>{mevent.price}</p>
                    <p>who is your lucky Date <br/>{mevent.withWho}</p>

                    <Container
                      className="text-center"
                    >
                      <Link key={mevent._id}>
                        <Button
                          className="edit-button"
                          key={mevent._id}
                          onClick={() => this.toggleEditForm(mevent)}
                        >
                          Edit 
                        </Button>
                      </Link>
                      <Button
                        key={mevent._id}
                        onClick={e => this.deleteMevent(e, mevent)}
                        className="edit-button"
                      >
                        Delete 
                      </Button>
                    </Container>
                  </Card>
              ) : null}
            </div>
          );
        })}
        </div>
        <div className="row m-3">
          <Col className="text-center">
            <h3 className="bg-dark text-light text-uppercase" 
            style={{
            fontSize: "18px",
            padding: "12px 1px 12px 1px",
            borderRadius: "10px",
            letterSpacing: "1.3px",
            fontWeight: "bold"
          }} onClick={this.toggleMeventForm}>
              Add an Event
            </h3>
            {this.state.displayMeventForm ? (
              <Container className="text-center">
                <Form
                  className="text-center bg-light text-uppercase"
                  style={{
                      letterSpacing: "1.3px",
                      fontWeight: "bold", 
                      fontSize: "11px"
                  }}
                  onSubmit={this.createMevent}
                >
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label htmlFor="eventName">
                    Event Name{" "}
                      </Form.Label>
                      <Form.Control
                        className="text-center"
                        type="text"
                        name="eventName"
                        onChange={this.handleChange}
                        value={this.state.newMevent.eventName}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label htmlFor="time">
                       Event time
                      </Form.Label>
                      <Form.Control
                        className="text-center"
                        type="number"
                        name="time"
                        onChange={this.handleChange}
                        value={this.state.newMevent.time}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label htmlFor="price">
                       Event Price{" "}
                      </Form.Label>
                      <Form.Control
                        className="text-center"
                        type="number"
                        name="price"
                        onChange={this.handleChange}
                        value={this.state.newMevent.price}
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
                        value={this.state.newMevent.withWho}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row />

                    <Button
                      className="text-center edit-button"
                      variant="primary"
                      type="submit"
                    >
                      Submit 
                    </Button>
              
                </Form>
              </Container>
            ) : null}
        </Col>
        </div>
        <div className="row">
        <Col className="text-center">
        {this.state.displayEditForm ? (
          <Container className="text-center">
            <Form
            onSubmit={this.updateMevent}
            style={{
                      letterSpacing: "1.3px",
                      fontWeight: "bold", 
                      fontSize: "11px"
                  }}
            className="text-center bg-light text-uppercase"
          >
                  <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label
                  htmlFor="firstName"
                >
                  What is the Event Name:
                  </Form.Label>
                  <Form.Control
                  className="text-center"
                  id="eventName"
                  type="text"
                  name="eventName"
                  onChange={this.handleChange}
                  value={this.state.newMevent.eventName}
                />
              </Form.Group>
                  </Form.Row>
                  <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label
                  htmlFor="lastName"
                >
                  What Time is the Event:{" "}
                  </Form.Label>
                  <Form.Control
                  className="text-center"
                  id="time"
                  type="text"
                  name="time"
                  onChange={this.handleChange}
                  value={this.state.newMevent.time}
                />
                </Form.Group>
                  </Form.Row>
                  <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label
                  htmlFor="age"
                >
                  What is the Price of the Event:{" "}
                  </Form.Label>
                  <Form.Control
                  className="text-center"
                  id="price"
                  type="number"
                  name="price"
                  onChange={this.handleChange}
                  value={this.state.newMevent.price}
                />
               </Form.Group>
                  </Form.Row>
                  <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label
                  htmlFor="bio"
                >
                  Who was your Date:
                  </Form.Label>
                  <Form.Control
                  className="text-center"
                  id="withWho"
                  type="text"
                  name="withWho"
                  onChange={this.handleChange}
                  value={this.state.newMevent.withWho}
                />
 </Form.Group>
                  </Form.Row>
              <Button className="text-center edit-button">Submit </Button>
              </Form>
            </Container>
        ) : null}
        </Col>
        </div>
        </div>
 
      
    );
  }
}
