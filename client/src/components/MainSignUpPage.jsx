import React, { Component } from "react";
import UserLog from "./UserLog";
import MaleSignUp from "./MaleSignUp";

export default class MainSignUpPage extends Component {
  state = {
    userId: this.props.match.params.userId,
    maleId: this.props.match.params.maleId
  };

  render() {
    return (
      <div className="text-center card p-3 bg-info">
        <h1 className="text-center text-light" style={{ marginTop: "13px" }}>FIND YOUR TRUE MATCH!</h1>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-sm-6">
              <UserLog userId={this.state.userId} />
            </div>

            <div className="col-lg-5 col-sm-6">
              <MaleSignUp maleId={this.state.maleId} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
