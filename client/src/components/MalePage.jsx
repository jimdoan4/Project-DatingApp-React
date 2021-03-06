import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import { MalePageContainer } from "./styled-components/MalePageStyles";
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
    axios.get(`/api/males/${this.state.maleId}`).then(res => {
      // When the page loads, grab male id from the database
      this.setState({ male: res.data });
    });
  };

  componentDidMount = () => {
    this.getSingleMaleData();
  };

  toggleMaleForm = () => {
    // This toggle the button when clicked
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
      .put(`/api/males/${this.state.maleId}`, {
        // ask the server to update the male in the database
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
    axios.delete(`/api/males/${this.state.maleId}`).then(res => {
      // Ask the server to delete this male id
      this.setState({ redirectToMale: true });
    });
  };

  render() {
    if (this.state.redirectToMale) {
      return <Redirect to={`/males/`} />;
    }
    return (
      <MalePageContainer>
        <div className="container-fluid">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={this.state.male.photoUrl}
                  className="img-fluid zoom male-individual-img"
                  alt="..."
                />
              </div>
              <div
                className="col-md-8 
              bg-light"
              >
                <div
                  className="card-body m-2 text-dark"
                  style={{ fontWeight: "bold" }}
                >
                 <p className="card-title lead bg-info text-light p-1 text-uppercase" style={{ fontWeight: "bold", borderRadius: '6px' }}>
                    {this.state.male.firstName}
                    &nbsp;
                    {this.state.male.lastName}
                  </p>
                  <p className="card-text"><span className="text-left">Age: </span>{this.state.male.age}</p>
                  <p className="card-text"><span className="text-left">Location: </span>{this.state.male.location}</p>
                  <p className="card-text"><span className="text-left">About me: </span>{this.state.male.bio}</p>
                </div>
                <Container>
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
              </div>
            </div>
          </div>
        </div>
        {this.state.displayMaleForm ? (
          <Container className="text-center">
            <Form
                style={{
                letterSpacing: "1.3px",
                fontWeight: "bold",
                fontSize: "11px"
              }}
              onSubmit={this.updateMale}
              className="text-center bg-light text-uppercase"
            >
              <Form.Row>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label htmlFor="firstName">First Name</Form.Label>
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
                  <Form.Label htmlFor="lastName">Last Name </Form.Label>
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
                  <Form.Label htmlFor="age">Age </Form.Label>
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
                  <Form.Label htmlFor="bio">Biography</Form.Label>
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
                  <Form.Label htmlFor="location">Location </Form.Label>
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
                  <Form.Label htmlFor="photoUrl">Photo: </Form.Label>
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
              <Button className="text-center edit-button">Submit</Button>
            </Form>
          </Container>
        ) : null}
      </MalePageContainer>
    );
  }
}
