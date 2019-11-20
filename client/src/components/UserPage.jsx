import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { UserPageContainer } from "./styled-components/UserPageStyles";
import CommentPage from "./CommentPage";
import EventPage from "./EventPage";

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
    axios.get(`/api/users/${this.state.userId}`).then(res => {
      // When the page loads, grab user id from the database
      this.setState({ user: res.data });
    });
  };

  componentDidMount = () => {
    this.getSingleUserData();
  };

  toggleUserForm = () => {
    // This toggle the button when clicked
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
      .put(`/api/users/${this.state.userId}`, {
        // ask the server to update the user in the database
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
    axios.delete(`/api/users/${this.state.userId}`).then(res => {
      // Ask the server to delete this user
      this.setState({ redirectToUser: true });
    });
  };

  render() {
    if (this.state.redirectToUser) {
      return <Redirect to={`/users/`} />;
    }
    return (
      <UserPageContainer>
        <div className="container">
          <div className="card m-3">
            <div className="row no-gutters">
              <div className="col-lg-3">
                <img
                  src={this.state.user.photoUrl}
                  className="card-img img-fluid zoom"
                  alt="..."
                />
              </div>
              <div className="col-lg-9 bg-light">
                <div className="card-body m-4 text-dark" style={{ fontWeight: "bold" }}>
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {this.state.user.firstName}
                    &nbsp;
                    {this.state.user.lastName}
                  </h5>
                  <p className="card-text">{this.state.user.age}</p>
                  <p className="card-text">{this.state.user.location}</p>
                  <p className="card-text">{this.state.user.bio}</p>
                </div>
                <Container
            >
              <Button
                className="text-center edit-button"
                onClick={this.toggleUserForm}
              >
                Edit Account
              </Button>
              <Button className="edit-button" onClick={this.deleteUser}>
                Delete Account
              </Button>
            </Container>
              </div>
            </div>
          </div>
        </div>
        {this.state.displayUserForm ? (
          <Container className="text-center">
          <Form
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
            onSubmit={this.updateUser}
            className="text-center bg-light"
          >
            <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label
                  htmlFor="firstName"
                >
                  First Name{" "}
                  </Form.Label>
                  <Form.Control
                  className="text-center"
                  id="firstName"
                  type="text"
                  name="firstName"
                  onChange={this.handleChange}
                  value={this.state.user.firstName}
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
                  value={this.state.user.lastName}
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
                  value={this.state.user.age}
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
                  value={this.state.user.bio}
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
                  value={this.state.user.location}
                />
        </Form.Group>
                  </Form.Row>
                  <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label
                  htmlFor="photoUrl"
                >
                  Photo{" "}
                  </Form.Label>
                  <Form.Control
                  className="text-center"
                  id="photoUrl"
                  type="text"
                  name="photoUrl"
                  onChange={this.handleChange}
                  value={this.state.user.photoUrl}
                />
           </Form.Group>
                  </Form.Row>
              <Button className="text-center edit-button">Submit UPDATE</Button>
              </Form>
            </Container>
        ) : null}
      </UserPageContainer>
    );
  }
}
