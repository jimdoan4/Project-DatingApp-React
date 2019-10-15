import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";

import Footer from "./Footer";
import { MaleContainer } from "./styled-components/MaleListStyles";

export default class MaleList extends Component {
        // We'll set up the  array as an empty array to begin with
  state = {
    males: [],
    newMale: {
      _id: "",
      firstName: "",
      lastName: "",
      age: "",
      photoUrl: "",
      location: "",
      bio: ""
    },
    redirectToUser: false,
    displayUserForm: false,
    maleId: this.props.match.params.maleId
  };

  componentDidMount = () => {
    this.findAllMales();
  };

  findAllMales = () => {
    axios.get("/api/males/").then(res => { // When the page loads, grab all males from the database
      this.setState({ males: res.data });
    });
  };

  deleteMale = (e, male) => {
    e.preventDefault();
    axios.delete(`/api/males/${male._id}`).then(res => {  // Ask the server to delete this male id
      this.findAllMales();
    });
  };

  render() {
    if (this.state.redirectToUser) {
      return <Redirect to={`/males}`} />;
    }
    return (
      <MaleContainer>
        <Row>
          {this.state.males.map(male => {
            return (
              <Col
              >
                <CardGroup>
                  <Card key={male._id} className="male-profile">
                    <Card.Img
                      className="zoom male-img"
                      variant="top"
                      src={male.photoUrl}
                    />

                    <Card.Body>
                      <div key={male._id}>
                        <Link to={`/males/${male._id}`} key={male._id}>
                          <Button className="interest-button">
                            Interested
                          </Button>
                        </Link>
                        <Button
                          className="not-interested-button"
                          key={male._id}
                          onClick={e => this.deleteMale(e, male)}
                          type="button"
                        >
                          Not Interested
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Col>
            );
          })}
        </Row>
      </MaleContainer>
    );
  }
}
