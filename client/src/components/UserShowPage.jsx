import React, { Component } from "react";
import UserPage from "./UserPage";
import CommentPage from "./CommentPage";
import EventPage from "./EventPage";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default class UserShowPage extends Component {
  state = {
    userId: this.props.match.params.userId
  };

  render() {
    return (
      <div className="text-center bg-info p-5">
        <Container>
            <p className="bg-dark">
              <a
                className="btn btn-light m-2"
                data-toggle="collapse"
                href="#multiCollapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                USER INFO
              </a>
              <button
                className="btn btn-light  m-2"
                type="button"
                data-toggle="collapse"
                data-target="#multiCollapseExample2"
                aria-expanded="false"
                aria-controls="multiCollapseExample2"
              >
                EVENTS
              </button>
              <button
                className="btn btn-light  m-2"
                type="button"
                data-toggle="collapse"
                data-target="#multiCollapseExample3"
                aria-expanded="false"
                aria-controls="multiCollapseExample3"
              >
                REVIEWS
              </button>
            </p>
            <div className="row">
            <div className="col-lg-12">
                <div className="collapse show multi-collapse" id="multiCollapseExample1">
                  <div className="card card-body">
                  <UserPage userId={this.state.userId} />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="collapse multi-collapse" id="multiCollapseExample2">
                  <div className="card card-body">
                    <EventPage userId={this.state.userId} />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="collapse multi-collapse" id="multiCollapseExample3">
                  <div className="card card-body">
                    <CommentPage userId={this.state.userId} />
                  </div>
                </div>
              </div>
            </div>
        </Container>
      </div>
    );
  }
}
