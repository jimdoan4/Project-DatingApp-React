import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default class McommentPage extends Component {
        // We'll set up the  array as an empty array to begin with
  state = {
    maleId: this.props.maleId,
    mcommentId: this.props.mcommentId,
    mcomments: [],
    newMcomment: {
      rating: "",
      dateAgain: "",
      review: "",
      withWho: "",
      lessonLearned: ""
    },
    redirectToMcomment: false,
    displayMcommentForm: false,
    displayReviewForm: false,
    displayEditForm: false
  };

  getAllMcomments = () => {
    axios.get(`/api/males/${this.state.maleId}/mcomments`).then(res => { // When the page loads, grab all male comment id from the database
      console.log(res.data);
      this.setState({ mcomments: res.data });
    });
  };

  componentDidMount = () => {
    this.getAllMcomments();
  };

  toggleMcommentForm = () => {
    this.setState((state, props) => {
      return { displayMcommentForm: !state.displayMcommentForm };
    });
  };

  toggleReviewForm = () => {  // This toggle the button when clicked
    this.setState((state, props) => {
      return { displayReviewForm: !state.displayReviewForm };
    });
  };

  toggleEditForm = comment => {  // This toggle the button when clicked
    this.setState((state, props) => {
      return { displayEditForm: !state.displayEditForm, newMcomment: comment };
    });
  };

  handleChange = e => {
    const changeNewMcomment = { ...this.state.newMcomment };
    changeNewMcomment[e.target.name] = e.target.value;
    this.setState({ newMcomment: changeNewMcomment });
  };

  createMcomment = e => {
    e.preventDefault();
    axios
      .post(`/api/males/${this.state.maleId}/mcomments`, {  // Ask the server to create a new male comment in the database
        rating: this.state.newMcomment.rating,
        dateAgain: this.state.newMcomment.dateAgain,
        review: this.state.newMcomment.review,
        withWho: this.state.newMcomment.withWho,
        lessonLearned: this.state.newMcomment.lessonLearned
      })
      .then(res => {
        const mcommentsList = [...this.state.mcomments];  // Copy the old male comment list into a new one
        mcommentsList.unshift(res.data);
        this.setState({
          newMcomment: {
            rating: "",
            dateAgain: "",
            review: "",
            withWho: "",
            lessonLearned: ""
          },
          displayMcommentForm: false,
          mcomments: mcommentsList
        });
      });
    this.getAllMcomments();
  };

  updateMcomment = e => {
    e.preventDefault();
    axios
      .put(
        `/api/males/${this.state.maleId}/mcomments/${this.state.newMcomment._id}}`,  // ask the server to update the male comment in the database
        {
          rating: this.state.newMcomment.rating,
          dateAgain: this.state.newMcomment.dateAgain,
          review: this.state.newMcomment.review,
          withWho: this.state.newMcomment.withWho,
          lessonLearned: this.state.newMcomment.lessonLearned
        }
      )
      .then(res => {
        this.getAllMcomments();
      });
  };

  deleteMcomment = (e, mcomment) => {
    e.preventDefault();
    axios
      .delete(`/api/males/${this.state.maleId}/mcomments/${mcomment._id}`)  // Ask the server to delete this male comment id
      .then(res => {
        this.getAllMcomments();
      });
  };

  render() {
    if (this.state.redirectToMcomment) {
      return <Redirect to={`/males/`} />;
    }
    return (
      <Jumbotron
        className="text-center"
        style={{ position: "block", marginTop: "30px" }}
      >
        <h3
          style={{
            marginTop: "30px",
            fontSize: "22px",
            marginBottom: "45px",
            padding: "8px",
            background: "white",
            border: "1px solid black"
          }}
        >
          Write A Review
        </h3>
        <Button className="edit-button" onClick={this.toggleReviewForm}>
          All Reviews
        </Button>
        <div>
          {this.state.mcomments.map(mcomment => {
            return (
              <div>
                {this.state.displayReviewForm ? (
                  <Col>
                    <Card
                      className="text-center"
                      style={{
                        width:"28rem",
                        backgroundColor: "white",
                        paddingLeft: "24px",
                        paddingRight: "24px",
                        paddingTop: "24px",
                        paddingBottom: "7px",
                        marginTop: "26px"
                      }}
                    >
                      <p>Name of your Date: <br/>{mcomment.withWho}</p>
                    <p>Rating: <br/>{mcomment.rating}</p>
                    <p>Would you go on a Second Date: <br/>{mcomment.dateAgain}</p>
                    <p>Review of this Date: <br/>{mcomment.review}</p>
                    <p>
                      Lesson learned from this Date: <br/>{mcomment.lessonLearned}
                    </p>

                      <Container
                        style={{ marginLeft: "0px", textAlign: "center" }}
                        className="text-center"
                      >
                        <Row>
                          <Col>
                            <Link key={mcomment._id}>
                              <Button
                                className="edit-button"
                                key={mcomment._id}
                                onClick={() => this.toggleEditForm(mcomment)}
                              >
                                Edit
                              </Button>
                            </Link>
                          </Col>
                          <Col>
                            <Button
                              key={mcomment._id}
                              onClick={e => this.deleteMcomment(e, mcomment)}
                              className="edit-button"
                            >
                              Delete
                            </Button>
                          </Col>
                        </Row>
                      </Container>
                    </Card>
                  </Col>
                ) : null}
              </div>
            );
          })}

          <Col className="text-center" style={{ marginTop: "30px" }}>
            <Button className="edit-button" onClick={this.toggleMcommentForm}>
              Add a Review
            </Button>
            {this.state.displayMcommentForm ? (
              <Container className="text-center">
                <Form
                  className="text-center"
                  style={{
                    display: "inline-block",
                    backgroundColor: "white",
                    paddingRight: "23px"
                  }}
                  onSubmit={this.createMcomment}
                >
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label htmlFor="rating">
                        How would you Rate your Date:{" "}
                      </Form.Label>
                      <Form.Control
                        className="text-center"
                        type="number"
                        name="rating"
                        onChange={this.handleChange}
                        value={this.state.newMcomment.rating}
                        placeholder="Enter Rating "
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label htmlFor="withWho">
                        Who was your Date:{" "}
                      </Form.Label>
                      <Form.Control
                        className="text-center"
                        type="text"
                        name="withWho"
                        onChange={this.handleChange}
                        value={this.state.newMcomment.withWho}
                        placeholder="Enter Your Date's Name"
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label htmlFor="dateAgain">
                        Would you Date this person again:{" "}
                      </Form.Label>
                      <Form.Control
                        className="text-center"
                        type="text"
                        name="dateAgain"
                        onChange={this.handleChange}
                        value={this.state.newMcomment.dateAgain}
                        placeholder="Enter if you would Date Again "
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label htmlFor="dateAgain">
                        What is the Review of your Date:{" "}
                      </Form.Label>
                      <Form.Control
                        className="text-center"
                        type="text"
                        name="review"
                        onChange={this.handleChange}
                        value={this.state.newMcomment.review}
                        placeholder="Enter Review "
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label htmlFor="lessonLearned">
                        What did you learn from your Date:{" "}
                      </Form.Label>
                      <Form.Control
                        className="text-center"
                        type="text"
                        name="lessonLearned"
                        onChange={this.handleChange}
                        value={this.state.newMcomment.lessonLearned}
                        placeholder="Enter Lesson Learned "
                      />
                    </Form.Group>
                  </Form.Row>
                  <div style={{ marginLeft: "121px" }} className="text-center">
                    <button
                      variant="primary"
                      type="submit"
                      className="edit-button text-center"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              </Container>
            ) : null}
          </Col>

          {this.state.displayEditForm ? (
            <form
              onSubmit={this.updateMcomment}
              style={{ marginTop: "50px" }}
              className="col"
            >
              <Col>
                <div className="col s12 m6 text-center">
                  <label
                    style={{ marginRight: "30px", marginTop: "30px" }}
                    htmlFor="rating"
                  >
                    Rating
                  </label>
                  <input
                    style={{ height: "50px", width: "320px" }}
                    className="text-center"
                    id="rating"
                    type="number"
                    name="rating"
                    onChange={this.handleChange}
                    value={this.state.newMcomment.rating}
                  />
                </div>
                <div className="col s12 m6 text-center">
                  <label
                    style={{ marginRight: "30px", marginTop: "30px" }}
                    htmlFor="withWho"
                  >
                    Who was your DATE:
                  </label>
                  <input
                    style={{ height: "50px", width: "320px" }}
                    className="text-center"
                    id="withWho"
                    type="text"
                    name="withWho"
                    onChange={this.handleChange}
                    value={this.state.newMcomment.withWho}
                  />
                </div>
                <div className="col s12 m6 text-center">
                  <label
                    style={{ marginRight: "30px", marginTop: "40px" }}
                    htmlFor="dateAgain"
                  >
                    Would you date this person again:{" "}
                  </label>
                  <input
                    style={{
                      height: "54px",
                      width: "390px",
                      marginRight: "53px"
                    }}
                    className="text-center"
                    id="dateAgain"
                    type="text"
                    name="dateAgain"
                    onChange={this.handleChange}
                    value={this.state.newMcomment.dateAgain}
                  />
                </div>
                <div className="col s12 m6 text-center">
                  <label
                    style={{ marginRight: "30px", marginTop: "40px" }}
                    htmlFor="review"
                  >
                    Review your Date:{" "}
                  </label>
                  <input
                    style={{
                      height: "54px",
                      width: "390px",
                      marginRight: "53px"
                    }}
                    className="text-center"
                    id="review"
                    type="text"
                    name="review"
                    onChange={this.handleChange}
                    value={this.state.newMcomment.review}
                  />
                </div>
                <div className="col s12 m6 text-center">
                  <label
                    style={{ marginRight: "30px", marginTop: "40px" }}
                    htmlFor="lessonLearned"
                  >
                    What did you learn about your Date?
                  </label>
                  <input
                    style={{
                      height: "54px",
                      width: "390px",
                      marginRight: "53px"
                    }}
                    className="text-center"
                    id="lessonLearned"
                    type="text"
                    name="lessonLearned"
                    onChange={this.handleChange}
                    value={this.state.newMcomment.lessonLearned}
                  />
                </div>
              </Col>
              <div className="text-center" style={{ marginTop: "20px" }}>
                <Button className="edit-button">Submit</Button>
              </div>
            </form>
          ) : null}
        </div>
      </Jumbotron>
    );
  }
}
