import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { MaleLogContainer } from "./styled-components/MaleLogStyles";

export default class MaleSignUp extends Component {
        // We'll set up the  array as an empty array to begin with
  state = {
    males: [],
    newMale: {
      firstName: "",
      lastName: "",
      age: "",
      photoUrl: "",
      location: "",
      bio: "",
      mcomments: [],
      mevents: []
    },
    displayMaleForm: true,
    redirectToMale: false
  };

  componentDidMount = () => {
    this.findAllMales();
  };

  findAllMales = () => {
    axios.get("/api/males/").then(res => {
      this.setState({ males: res.data });
    });
  };

  createMale = e => {
    axios
      .post("/api/males/", {  // Ask the server to create a new male in the database
        password: this.state.newMale.password,
        userName: this.state.newMale.userName,
        firstName: this.state.newMale.firstName,
        lastName: this.state.newMale.lastName,
        age: this.state.newMale.age,
        photoUrl: this.state.newMale.photoUrl,
        location: this.state.newMale.location,
        bio: this.state.newMale.bio
      })
      .then(res => {
        const malesList = [this.state.males]; // Copy the old males list into a new one
        malesList.unshift(res.data);
        this.setState({
          newMale: {
            userName: "",
            password: "",
            firstName: "",
            lastName: "",
            age: "",
            photoUrl: "",
            location: "",
            bio: ""
          },
          displayMaleForm: false,
          males: malesList
        });
      });
    this.findAllMales();
  };

  handleChange = e => {
    const changeNewMale = { ...this.state.newMale };
    changeNewMale[e.target.name] = e.target.value;
    this.setState({ newMale: changeNewMale });
  };

  toggleEditForm = () => {   // This toggle the button when clicked
    this.setState((state, props) => {
      return { displayMaleForm: !state.displayMaleForm };
    });
  };

  handleMaleSignUp = e => {
    e.preventDefault();
    this.createMale();
  };

  render() {
    if (this.state.redirectToMale) {
      return <Redirect to={`/males/:maleId`} />;
    }

    return (
      <MaleLogContainer>
        {this.state.males.map(male => {
          return <div />;
        })}
        <br />
        <Button
        className="man-signup-button"
          onClick={this.toggleEditForm}
        >
        Men
        </Button>
        {this.state.displayMaleForm ? (
          <Container>
            
              <Form
                className="text-center bg-light man-form animated slideInRight"
                onSubmit={this.handleMaleSignUp}
              >
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label
                      htmlFor="firstName"
                    >
                      First Name
                    </Form.Label>
                    <Form.Control
                      className="text-center"
                      name="firstName"
                      onChange={this.handleChange}
                      value={this.state.newMale.firstName}
                      type="text"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label
                      htmlFor="lastName"
                    >
                      Last Name
                    </Form.Label>
                    <Form.Control
                      className="text-center"
                      name="lastName"
                      onChange={this.handleChange}
                      value={this.state.newMale.lastName}
                      type="text"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridEmail">
                  <Form.Label htmlFor="photoUrl">
                    Photo
                  </Form.Label>
                  <Form.Control
                    className="text-center"
                    name="photoUrl"
                    onChange={this.handleChange}
                    value={this.state.newMale.photoUrl}
                    type="text"
                  />
                </Form.Group>

                <Form.Group controlId="formGridAddress1">
                  <Form.Label htmlFor="age">
                    Age
                  </Form.Label>
                  <Form.Control
                    className="text-center"
                    name="age"
                    type="number"
                    onChange={this.handleChange}
                    value={this.state.newMale.age}
                  />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                  <Form.Label htmlFor="location">
                    Location
                  </Form.Label>
                  <Form.Control
                    className="text-center"
                    name="location"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.newMale.location}
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label htmlFor="bio">
                      Biography
                    </Form.Label>
                    <Form.Control
                      className="text-center"
                      name="bio"
                      type="text"
                      onChange={this.handleChange}
                      value={this.state.newMale.bio}
                    />
                  </Form.Group>
                </Form.Row>

                <div className="text-center">
                  <Button
                    onclick={this.createMale}
                    className="register-button"
                    type="submit"
                  >
                    Register
                  </Button>
                </div>
              </Form>
          </Container>
        ) : null}
      </MaleLogContainer>
    );
  }
}
