import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";


export default class MalePage extends Component {
        // We'll set up the  array as an empty array to begin with
  state = {
    maleId: this.props.maleId,
    males: [],
    male: {
      _id: "",
      firstName: "",
      lastName: "",
      age: "",
      photoUrl: "",
      location: "",
      bio: "",
      mcomments: [],
      mevents: []
    },
    redirectToMale: false,
    displayMaleForm: false
  };

  getSingleMaleData = () => {
    axios.get(`/api/males/${this.state.maleId}`).then(res => { // When the page loads, grab male id from the database
      this.setState({ male: res.data });
    });
  };

  componentDidMount = () => {
    this.getSingleMaleData();
  };

  toggleMaleForm = () => {  // This toggle the button when clicked
    this.setState((state, props) => {
      return { displayMaleForm: !state.displayMaleForm };
    });
  };

  handleChange = e => {
    const updateMale = { ...this.state.male };
    updateMale[e.target.name] = e.target.value;
    this.setState({ male: updateMale });
  };

  handleChange = e => {
    const newMale = { ...this.state.male };
    newMale[e.target.name] = e.target.value;
    this.setState({ male: newMale });
  };

  updateMale = e => {
    e.preventDefault();
    axios
      .put(`/api/males/${this.state.maleId}`, {  // ask the server to update the male in the database
        firstName: this.state.male.firstName,
        lastName: this.state.male.lastName,
        age: this.state.male.age,
        photoUrl: this.state.male.photoUrl,
        location: this.state.male.location,
        bio: this.state.male.bio,
        mcomments: {},
        mevents: {}
      })
      .then(res => {
        this.setState({ male: res.data, displayMaleForm: false });
      });
    this.getSingleMaleData();
  };

  deleteMale = () => {
    axios.delete(`/api/males/${this.state.maleId}`).then(res => {  // Ask the server to delete this male id
      this.setState({ redirectToMale: true });
    });
  };

  render() {
    if (this.state.redirectToMale) {
      return <Redirect to={`/males/`} />;
    }
    return (
      <div>
        <div style={{ marginTop: "30px", marginBottom: "40px" }}>
          <Card   
          className="text-center"
            style={{
              width: "25rem",
              backgroundColor: "white",
              borderRadius: "20px"
            }}>
            <Card.Img
              style={{ height: "50vh", borderRadius: "5px" }}
              className="zoom"
              variant="top"
              src={this.state.male.photoUrl}
              alt="top"
            />
            <Card.Body>
              <Card.Title style={{ fontSize: "17px" }}>
                {this.state.male.firstName}
                &nbsp;
                {this.state.male.lastName}
              </Card.Title>
              <Card.Title style={{ fontSize: "17px" }}>
                {this.state.male.age}
              </Card.Title>
              <Card.Title style={{ fontSize: "17px" }}>
                {this.state.male.bio}
              </Card.Title>
              <Card.Title style={{ fontSize: "17px" }}>
                {this.state.male.location}
              </Card.Title>
            </Card.Body>
            <Container
              style={{
                textAlign: "center",
                marginBottom: "30px",
                marginTop: "8px"
              }}
            >
              <Button
                className="text-center edit-button"
                onClick={this.toggleMaleForm}
              >
                Edit Account
              </Button>
              <Button className="edit-button" onClick={this.deleteMale}>
                Delete Account
              </Button>
            </Container>
          </Card>
        </div>

        {this.state.displayMaleForm ? (
          <Container className="text-center">
          <Form
             style={{
                    position: "relative",
                    width: "33rem",
                      backgroundColor: "white",
                      paddingLeft: "24px",
                      paddingRight: "24px",
                      paddingTop: "24px",
                      paddingBottom: "24px",
                      marginTop: "26px",
                      textTransform: "uppercase",
                      letterSpacing: "1.3px",
                      fontWeight: "bold"
                  }}
            onSubmit={this.updateMale}
            className="text-center"
          >
             <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label htmlFor="firstName">
                  First Name
                  </Form.Label>
                  <Form.Control
                  className="text-center"
                  id="firstName"
                  type="text"
                  name="firstName"
                  onChange={this.handleChange}
                  value={this.state.male.firstName}
                />
       </Form.Group>
                  </Form.Row>
                  <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label
                  htmlFor="lastName"
                >
                  Last Name{" "}
                  </Form.Label>
                  <Form.Control
                  className="text-center"
                  id="lastName"
                  type="text"
                  name="lastName"
                  onChange={this.handleChange}
                  value={this.state.male.lastName}
                />
         </Form.Group>
                  </Form.Row>
                  <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label
                  htmlFor="age"
                >
                  Age{" "}
                  </Form.Label>
                  <Form.Control
                  className="text-center"
                  id="age"
                  type="number"
                  name="age"
                  onChange={this.handleChange}
                  value={this.state.male.age}
                />
     </Form.Group>
                  </Form.Row>
                  <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label
                  htmlFor="bio"
                >
                  Biography
                  </Form.Label>
                  <Form.Control
                  className="text-center"
                  id="bio"
                  type="text"
                  name="bio"
                  onChange={this.handleChange}
                  value={this.state.male.bio}
                />
    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label
                  htmlFor="location"
                >
                  Location{" "}
                  </Form.Label>
                  <Form.Control
                  className="text-center"
                  id="location"
                  type="text"
                  name="location"
                  onChange={this.handleChange}
                  value={this.state.male.location}
                />
      </Form.Group>
                  </Form.Row>
                  <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label
                  htmlFor="photoUrl"
                >
                  Photo:{" "}
                  </Form.Label>
                  <Form.Control
                  className="text-center"
                  id="photoUrl"
                  type="text"
                  name="photoUrl"
                  onChange={this.handleChange}
                  value={this.state.male.photoUrl}
                />
         </Form.Group>
                  </Form.Row>
              <Button className="text-center edit-button">Submit Update</Button>
              </Form>
            </Container>
        ) : null}
        </div>
    );
  }
}
