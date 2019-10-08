import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import { ButtonToolbar } from "react-bootstrap";
import Footer from "./Footer";
import { MaleContainer } from "./styled-components/MaleListStyles";

export default class MaleList extends Component {
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
    axios.get("/api/males/").then(res => {
      this.setState({ males: res.data });
    });
  };

  deleteMale = (e, male) => {
    e.preventDefault();
    axios.delete(`/api/males/${male._id}`).then(res => {
      this.findAllMales();
    });
  };

  render() {
    if (this.state.redirectToUser) {
      return <Redirect to={`/males}`} />;
    }
    return (
      <MaleContainer>
        <div className="row">
          {this.state.males.map(male => {
            return (
              <div
                className="col text-center"
                style={{
                  marginBottom: "1px",
                  marginTop: "20px"
                }}
              >
                <CardGroup>
                  <Card key={male._id} className="text-center male-profile">
                    <Card.Img
                      className="text-center zoom male-img"
                      variant="top"
                      src={male.photoUrl}
                    />

                    <Card.Body>
                      <div key={male._id}>
                        <Link to={`/males/${male._id}`} key={male._id}>
                          <button className="rockstar interest-button">
                            Interested
                          </button>
                        </Link>
                        <button
                          className="rockstar not-interested-button"
                          key={male._id}
                          onClick={e => this.deleteMale(e, male)}
                          type="button"
                        >
                          Not Interested
                        </button>
                      </div>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </div>
            );
          })}
        </div>
      </MaleContainer>
    );
  }
}
