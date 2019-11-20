import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Footer from "./Footer";
import { UserContainer } from "./styled-components/UserListStyles";

export default class UserList extends Component {
  // We'll set up the  array as an empty array to begin with
  state = {
    users: [],
    newUser: {
      _id: "",
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
    displayUserForm: false,
    userId: this.props.match.params.userId
  };

  componentDidMount = () => {
    this.findAllUsers();
  };

  findAllUsers = () => {
    axios.get("/api/users").then(res => {
      // When the page loads, grab all users from the database
      this.setState({ users: res.data });
    });
  };

  createUser = e => {
    axios
      .post("/api/users", {
        // Ask the server to create a new user in the database
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
        const usersList = [this.state.users]; // Copy the old users list into a new one
        usersList.unshift(res.data);
        this.setState({
          newUser: {
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

  deleteUser = (e, user) => {
    e.preventDefault();
    axios.delete(`/api/users/${user._id}`).then(res => {
      // Ask the server to delete this user
      this.findAllUsers();
    });
  };

  handleChange = e => {
    const changeNewUser = { ...this.state.newUser };
    changeNewUser[e.target.name] = e.target.value;
    this.setState({ newUser: changeNewUser });
  };

  toggleUserForm = () => {
    // This toggle the button when clicked
    this.setState((state, props) => {
      return { displayUserForm: !state.displayUserForm };
    });
  };

  render() {
    if (this.state.redirectToUser) {
      return <Redirect to={`/users}`} />;
    }
    return (
      <UserContainer className="bg-info p-5">
        <div className="container">
            <div className="row p-3">
              {this.state.users.map(user => {
                return (
                  <div
                    key={user._id}
                    className="col-md-3 col-sm-6 col-xs-12 text-center mb-4"
                  >
                    <div className="card">
                      <Link to={`/users/${user._id}`}>
                        <img
                          src={user.photoUrl}
                          className="img-fluid female-img zoom"
                          width="100%"
                        />
                      </Link>
                      <div className="row">
                        <div className="col-6">
                          <Link to={`/users/${user._id}`} key={user._id}>
                            <button
                              type="button"
                              className="btn btn-default m-4 btn-xs bg-danger"
                            >
                              <i
                                className="p-2 fas fa-heart text-light"
                                aria-hidden="true"
                              ></i>
                            </button>
                          </Link>
                        </div>
                        <div className="col-6">
                          <button
                            type="button"
                            key={user._id}
                            onClick={e => this.deleteUser(e, user)}
                            className="btn btn-default m-4 bg-dark text-light btn-xs"
                          >
                            <i className="p-2 fas fa-trash" aria-hidden="true"></i>
                      
                          </button>
                        
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
      </UserContainer>
    );
  }
}
