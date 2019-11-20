import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { UserLogContainer } from "./styled-components/UserLogStyles";

export default class UserLog extends Component {
        // We'll set up the  array as an empty array to begin with
  state = {
    users: [],
    newUser: {
      firstName: "",
      lastName: "",
      age: "",
      photoUrl: "",
      location: "",
      bio: "",
      comments: [],
      events: []
    },
    displayUserForm: true,
    redirectToUser: false
  };

  componentDidMount = () => {
    this.findAllUsers();
  };

  findAllUsers = () => {
    axios.get("/api/users/").then(res => {  // When the page loads, grab all users from the database
      this.setState({ users: res.data });
    });
  };

  createUser = e => {
    axios
      .post("/api/users/", {  // Ask the server to create a new user in the database
        password: this.state.newUser.password,
        userName: this.state.newUser.userName,
        firstName: this.state.newUser.firstName,
        lastName: this.state.newUser.lastName,
        age: this.state.newUser.age,
        photoUrl: this.state.newUser.photoUrl,
        location: this.state.newUser.location,
        bio: this.state.newUser.bio,
        comments: [],
        events: []
      })
      .then(res => {
        const usersList = [this.state.users];  // Copy the old users list into a new one
        usersList.unshift(res.data);
        this.setState({
          newUser: {
            userName: "",
            password: "",
            firstName: "",
            lastName: "",
            age: "",
            photoUrl: "",
            location: "",
            bio: "",
            comments: {},
            events: {}
          },
          displayUserForm: false,
          users: usersList
        });
      });
    this.findAllUsers();
  };

  handleChange = e => {
    const changeNewUser = { ...this.state.newUser };
    changeNewUser[e.target.name] = e.target.value;
    this.setState({ newUser: changeNewUser });
  };

  toggleEditForm = () => {  // This toggle the button when clicked
    this.setState((state, props) => {
      return { displayUserForm: !state.displayUserForm };
    });
  };

  handleSignUp = e => {
    e.preventDefault();
    this.createUser();
  };

  render() {
    if (this.state.redirectToUser) {
      return <Redirect to={`/users/:userId`} />;
    }

    return (
      <UserLogContainer>
        {this.state.users.map(user => {
          return <div/>;
        })}
        <br />
        <br />
        <Button
        className="woman-signup-button"
          onClick={this.toggleEditForm}
        >
         Women
        </Button>
        {this.state.displayUserForm ? (
          <Container>
              <Form
                className="text-center card bg-light woman-form"
                onSubmit={this.handleSignUp}
              >
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label
                      style={{ fontSize: "16px" }}
                      htmlFor="firstName"
                    >
                      First Name
                    </Form.Label>
                    <Form.Control
                      className="text-center"
                      name="firstName"
                      onChange={this.handleChange}
                      value={this.state.newUser.firstName}
                      type="text"
                      placeholder="Enter First Name"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label
                      style={{ fontSize: "16px " }}
                      htmlFor="lastName"
                    >
                      Last Name
                    </Form.Label>
                    <Form.Control
                      className="text-center"
                      name="lastName"
                      onChange={this.handleChange}
                      value={this.state.newUser.lastName}
                      type="text"
                      placeholder="Enter Last Name"
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridEmail">
                  <Form.Label style={{ fontSize: "16px " }} htmlFor="photoUrl">
                    Photo
                  </Form.Label>
                  <Form.Control
                    className="text-center"
                    name="photoUrl"
                    onChange={this.handleChange}
                    value={this.state.newUser.photoUrl}
                    type="text"
                    placeholder="Enter a Photo of Yourself"
                  />
                </Form.Group>

                <Form.Group controlId="formGridAddress1">
                  <Form.Label style={{ fontSize: "16px " }} htmlFor="age">
                    Age
                  </Form.Label>
                  <Form.Control
                    className="text-center"
                    name="age"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.newUser.age}
                    placeholder="Enter your Age"
                  />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                  <Form.Label style={{ fontSize: "16px " }} htmlFor="location">
                    Location
                  </Form.Label>
                  <Form.Control
                    className="text-center"
                    name="location"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.newUser.location}
                    placeholder="Apartment, studio, or floor"
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label style={{ fontSize: "16px " }} htmlFor="bio">
                      Biography
                    </Form.Label>
                    <Form.Control
                      className="text-center"
                      name="bio"
                      type="text"
                      onChange={this.handleChange}
                      value={this.state.newUser.bio}
                      placeholder="Enter Facts about yourself"
                    />
                  </Form.Group>
                </Form.Row>

                <div className="text-center">
                  <Button
                    onclick={this.createUser}
                    className="register-button"
                    type="submit"
                  >
                    Register
                  </Button>
                </div>
              </Form>
            </Container>
        ) : null}
      </UserLogContainer>
    );
  }
}
