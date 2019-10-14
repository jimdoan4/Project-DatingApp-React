import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default class UserPage extends Component {
        // We'll set up the  array as an empty array to begin with
  state = {
    userId: this.props.userId,
    users: [],
    user: {
      userName: "",
      password: "",
      firstName: "",
      lastName: "",
      age: "",
      photoUrl: "",
      location: "",
      bio: "",
      comments: [],
      events: []
    },

    redirectToUser: false,
    displayUserForm: false
  };

  getSingleUserData = () => {
    axios.get(`/api/users/${this.state.userId}`).then(res => {  // When the page loads, grab user id from the database
      this.setState({ user: res.data });
    });
  };

  componentDidMount = () => {
    this.getSingleUserData();
  };

  toggleUserForm = () => {  // This toggle the button when clicked
    this.setState((state, props) => {
      return { displayUserForm: !state.displayUserForm };
    });
  };

  handleChange = e => {
    const updateUser = { ...this.state.user };
    updateUser[e.target.name] = e.target.value;
    this.setState({ user: updateUser });
  };

  handleChange = e => {
    const newUser = { ...this.state.user };
    newUser[e.target.name] = e.target.value;
    this.setState({ user: newUser });
  };

  updateUser = e => {
    e.preventDefault();
    axios
      .put(`/api/users/${this.state.userId}`, {  // ask the server to update the user in the database
        firstName: this.state.user.firstName,
        lastName: this.state.user.lastName,
        age: this.state.user.age,
        photoUrl: this.state.user.photoUrl,
        location: this.state.user.location,
        bio: this.state.user.bio,
        comments: {},
        events: {}
      })
      .then(res => {
        this.setState({ user: res.data, displayUserForm: false });
      });
    this.getSingleUserData();
  };

  deleteUser = () => {
    axios.delete(`/api/users/${this.state.userId}`).then(res => {  // Ask the server to delete this user
      this.setState({ redirectToUser: true });
    });
  };

  render() {
    if (this.state.redirectToUser) {
      return <Redirect to={`/users/`} />;
    }
    return (
      <div>
        <div style={{ marginTop: "30px", marginBottom: "40px" }}>
          <Card
            className="text-center"
            style={{
              width: "23rem",
              backgroundColor: "#efe8e8",
              height: "600px"
            }}
          >
            <Card.Img
              style={{ height: "300px" }}
              className="zoom"
              variant="top"
              src={this.state.user.photoUrl}
              alt="top"
            />
            <Card.Body>
              <Card.Title style={{ fontSize: "17px" }}>
                {this.state.user.firstName}
                &nbsp;
                {this.state.user.lastName}
              </Card.Title>
              <Card.Title style={{ fontSize: "17px" }}>
                {this.state.user.age}
              </Card.Title>
              <Card.Title style={{ fontSize: "17px" }}>
                {this.state.user.bio}
              </Card.Title>
              <Card.Title style={{ fontSize: "17px" }}>
                {this.state.user.location}
              </Card.Title>
            </Card.Body>

            <Container
              style={{
                textAlign: "center",
                marginBottom: "30px",
                marginTop: "8px"
              }}
            >
              <Button className="edit-button" onClick={this.toggleUserForm}>
                Edit Account
              </Button>

              <Button className="delete-button" onClick={this.deleteUser}>
                Delete Account
              </Button>
            </Container>
          </Card>
        </div>

        {this.state.displayUserForm ? (
          <Form
            style={{ marginTop: "10px" }}
            onSubmit={this.updateUser}
            className="col text-center"
          >
            <Col className="text-center">
              <div className="col s12 m6 text-center">
                <label
                  style={{ marginRight: "0px", marginTop: "30px" }}
                  htmlFor="firstName"
                >
                  First Name{" "}
                </label>
                <p></p>
                <input
                  style={{ height: "50px", width: "320px" }}
                  className="text-center"
                  id="firstName"
                  type="text"
                  name="firstName"
                  onChange={this.handleChange}
                  value={this.state.user.firstName}
                />
              </div>
              <div className="col s12 m6 text-center">
                <label
                  style={{ marginRight: "30px", marginTop: "40px" }}
                  htmlFor="lastName"
                >
                  Last Name{" "}
                </label>
                <input
                  style={{
                    height: "54px",
                    width: "390px",
                    marginRight: "53px"
                  }}
                  className="text-center"
                  id="lastName"
                  type="text"
                  name="lastName"
                  onChange={this.handleChange}
                  value={this.state.user.lastName}
                />
              </div>
              <div className="col s12 m6 text-center">
                <label
                  style={{ marginRight: "30px", marginTop: "40px" }}
                  htmlFor="age"
                >
                  Age{" "}
                </label>
                <input
                  style={{
                    height: "54px",
                    width: "390px",
                    marginRight: "53px"
                  }}
                  className="text-center"
                  id="age"
                  type="number"
                  name="age"
                  onChange={this.handleChange}
                  value={this.state.user.age}
                />
              </div>
              <div className="col s12 m6 text-center">
                <label
                  style={{ marginRight: "30px", marginTop: "40px" }}
                  htmlFor="bio"
                >
                  Biography
                </label>
                <input
                  style={{
                    height: "54px",
                    width: "390px",
                    marginRight: "53px"
                  }}
                  className="text-center"
                  id="bio"
                  type="text"
                  name="bio"
                  onChange={this.handleChange}
                  value={this.state.user.bio}
                />
              </div>
              <div className="col s12 m6 text-center">
                <label
                  style={{ marginRight: "30px", marginTop: "40px" }}
                  htmlFor="location"
                >
                  Location{" "}
                </label>
                <input
                  style={{
                    height: "54px",
                    width: "390px",
                    marginRight: "53px"
                  }}
                  className="text-center"
                  id="location"
                  type="text"
                  name="location"
                  onChange={this.handleChange}
                  value={this.state.user.location}
                />
              </div>
              <div className="col s12 m6 text-center">
                <label
                  style={{ marginRight: "30px", marginTop: "40px" }}
                  htmlFor="photoUrl"
                >
                  Photo{" "}
                </label>
                <input
                  style={{
                    height: "54px",
                    width: "390px",
                    marginRight: "53px"
                  }}
                  className="text-center"
                  id="photoUrl"
                  type="text"
                  name="photoUrl"
                  onChange={this.handleChange}
                  value={this.state.user.photoUrl}
                />
              </div>
            </Col>
            <div className="text-center" style={{ marginTop: "20px" }}>
              <Button className="text-center edit-button">Submit</Button>
            </div>
          </Form>
        ) : null}
      </div>
    );
  }
}
