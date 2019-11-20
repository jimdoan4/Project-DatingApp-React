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
      <div className="text-center bg-info main-signup-body" style={{height: "110vh"}}>
        <h1 className="text-center text-light pt-4">FIND YOUR TRUE MATCH!</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <UserLog userId={this.state.userId} />
            </div>

            <div className="col-md-6">
              <MaleSignUp maleId={this.state.maleId} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
