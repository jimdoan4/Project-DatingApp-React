import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
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
      <MaleContainer className="bg-info p-5">
      <div className="container">
            <div className="row p-3">
              {this.state.males.map(male => {
                return (
                  <div
                    key={male._id}
                    className="col-md-3 col-sm-6 col-xs-12 text-center mb-4"
                  >
                    <div className="card">
                    <Link to={`/males/${male._id}`}>
                      <img
                        src={male.photoUrl}
                        className="img-fluid male-img zoom"
                        width="100%"
                      />
                    </Link>
                    <div className="row">
                        <div className="col-6">
                    <Link to={`/males/${male._id}`} key={male._id}>
                      <button
                        type="button"
                        className="btn btn-default m-3 btn-xs bg-danger"
                      >
                        <i className="p-1 fas fa-heart text-light" aria-hidden="true"></i>
                      </button>
                    </Link>
                    </div>
                        <div className="col-6">
                    <button
                      type="button"
                      key={male._id}
                      onClick={e => this.deleteMale(e, male)}
                      className="btn btn-default m-3 bg-dark text-light btn-xs"
                    >
                      <i className="p-1 fas fa-trash" aria-hidden="true"></i>
                    </button>
                  </div>
                  </div>
                  </div>
                  </div>
                );
              })}
            </div>
          </div>
      
      </MaleContainer>
    );
  }
}
