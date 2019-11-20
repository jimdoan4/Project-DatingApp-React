import React, { Component } from "react";
import MalePage from "./MalePage";
import MeventPage from "./MeventPage";
import McommentPage from "./McommentPage";
import { Container } from "react-bootstrap";


export default class MaleShowPage extends Component {
  state = {
    maleId: this.props.match.params.maleId
  };

  render() {
    return (
      <div className="text-center bg-info">
        <Container className="pt-4 pb-4">
        <p className="bg-dark" style={{ fontWeight: "bold", borderRadius: '6px' }}>
              <a
                 className="btn btn-light ml-5 mr-5 mt-2 mb-2"
                data-toggle="collapse"
                href="#multiCollapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                USER INFO
              </a>
              <button
                className="btn btn-light ml-5 mr-5 mt-2 mb-2"
                type="button"
                data-toggle="collapse"
                data-target="#multiCollapseExample2"
                aria-expanded="false"
                aria-controls="multiCollapseExample2"
              >
                EVENTS
              </button>
              <button
               className="btn btn-light ml-5 mr-5 mt-2 mb-2"
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
                  <MalePage maleId={this.state.maleId} />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="collapse multi-collapse" id="multiCollapseExample2">
                  <div className="card card-body">
                  <MeventPage maleId={this.state.maleId} />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="collapse multi-collapse" id="multiCollapseExample3">
                  <div className="card card-body">
                  <McommentPage maleId={this.state.maleId} />
                  </div>
                </div>
              </div>
            </div>
        </Container>
      </div>
    );
  }
}
