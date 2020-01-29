import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { UserPageContainer } from "./styled-components/UserPageStyles";

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
        <div className="container-fluid">
          <div className="card"> 
            <div className="row no-gutters">
              <div className="col-lg-4">
                <img
                  src={this.state.user.photoUrl}
                  className="img-fluid zoom female-individual-img"
                  alt="..."
                />
              </div>
              <div className="col-lg-8 bg-light">
                <div className="card-body m-2 text-dark" style={{ fontWeight: "bold" }}>
                  <p className="card-title lead bg-info text-light p-1 text-uppercase" style={{ fontWeight: "bold", borderRadius: '6px' }}>
                    {this.state.user.firstName}
                    &nbsp;
                    {this.state.user.lastName}
                  </p>
                  <p className="card-text"><span className="text-left">Age: </span> {this.state.user.age}</p>
                  <p className="card-text"><span className="text-left">Location: </span>{this.state.user.location}</p>
                  <p className="card-text"><span className="text-left">About me: </span>{this.state.user.bio}</p>
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
                      letterSpacing: "1.3px",
                      fontWeight: "bold", 
                      fontSize: "11px"
                  }}
            onSubmit={this.updateUser}
            className="text-center bg-light text-uppercase"
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
              <Button className="text-center edit-button">Submit</Button>
              </Form>
            </Container>
        ) : null}
      </UserPageContainer>
    );
  }
}
