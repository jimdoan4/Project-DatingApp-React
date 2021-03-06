import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
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
    displayReviewForm: true,
    displayEditForm: true
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
      <div
        className="text-center bg-light"
      >
     <h3 className="text-light bg-dark m-3 text-uppercase"
          style={{
            fontSize: "18px",
            padding: "12px 1px 12px 1px",
            border: "1px solid white",
            borderRadius: "10px",
            letterSpacing: "1.3px",
            fontWeight: "bold"
          }}
        >
          Write A Review
        </h3>
        <Button className="edit-button" onClick={this.toggleReviewForm}>
          All Reviews
        </Button>
        <div className="row">
          {this.state.mcomments.map(mcomment => {
            return (
              <div className="col-md-4">
                {this.state.displayReviewForm ? (
                    <Card
                   className="text-center pb-3 pt-3 mt-2 text-uppercase"
                    style={{
                      letterSpacing: "1.3px",
                      fontWeight: "bold", 
                      fontSize: "11px"
                    }}
                    >
                      <p>Name of your Date <br/>{mcomment.withWho}</p>
                    <p>How would you rate this date <br/>{mcomment.rating}</p>
                    <p>Would you go on a Second Date<br/>{mcomment.dateAgain}</p>
                    <p>Review of this Date <br/>{mcomment.review}</p>
                    <p>
                    Lesson learned from this Date <br/>{mcomment.lessonLearned}
                    </p>

                      <Container
                        className="text-center"
                      >
                            <Link key={mcomment._id}>
                              <Button
                                className="edit-button"
                                key={mcomment._id}
                                onClick={() => this.toggleEditForm(mcomment)}
                              >
                                Edit 
                              </Button>
                            </Link>
                       
                            <Button
                              key={mcomment._id}
                              onClick={e => this.deleteMcomment(e, mcomment)}
                              className="edit-button"
                            >
                              Delete 
                            </Button>
                      </Container>
                    </Card>
                ) : null}
              </div>
            );
          })}
          </div>
          <div className="row m-3">
          <Col className="text-center">
            <h3 className="bg-dark text-light text-uppercase" 
            style={{
            fontSize: "18px",
            padding: "12px 1px 12px 1px",
            borderRadius: "10px",
            letterSpacing: "1.3px",
            fontWeight: "bold"
          }} onClick={this.toggleMcommentForm}>
              Add a Review
            </h3>
            {this.state.displayMcommentForm ? (
              <Container className="text-center">
                <Form
                  className="text-center bg-light text-uppercase"
                  style={{
                      letterSpacing: "1.3px",
                      fontWeight: "bold", 
                      fontSize: "11px"
                  }}
                  onSubmit={this.createMcomment}
                >
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label htmlFor="rating">
                      How would you rate this Date{" "}
                      </Form.Label>
                      <Form.Control
                        className="text-center"
                        type="number"
                        name="rating"
                        onChange={this.handleChange}
                        value={this.state.newMcomment.rating}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label htmlFor="withWho">
                      Who was your Date{" "}
                      </Form.Label>
                      <Form.Control
                        className="text-center"
                        type="text"
                        name="withWho"
                        onChange={this.handleChange}
                        value={this.state.newMcomment.withWho}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label htmlFor="dateAgain">
                      Would you Date this person again{" "}
                      </Form.Label>
                      <Form.Control
                        className="text-center"
                        type="text"
                        name="dateAgain"
                        onChange={this.handleChange}
                        value={this.state.newMcomment.dateAgain}
                      />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label htmlFor="dateAgain">
                      What is the Review of this Date{" "}
                      </Form.Label>
                      <Form.Control
                        className="text-center"
                        type="text"
                        name="review"
                        onChange={this.handleChange}
                        value={this.state.newMcomment.review}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label htmlFor="lessonLearned">
                      What did you learn from this Date{" "}
                      </Form.Label>
                      <Form.Control
                        className="text-center"
                        type="text"
                        name="lessonLearned"
                        onChange={this.handleChange}
                        value={this.state.newMcomment.lessonLearned}
                      />
                    </Form.Group>
                  </Form.Row>
                    <Button
                      variant="primary"
                      type="submit"
                      className="edit-button text-center"
                    >
                      Submit 
                    </Button>
                </Form>
              </Container>
            ) : null}
          </Col>
          </div>
        <div className="row">
        <Col className="text-center">
          {this.state.displayEditForm ? (
            <Container className="text-center">
            <Form
              onSubmit={this.updateMcomment}
              style={{
                      letterSpacing: "1.3px",
                      fontWeight: "bold", 
                      fontSize: "11px"
                  }}
            className="text-center bg-light text-uppercase"
          >
                             <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label
                    htmlFor="rating"
                  >
                    How would you rate this Date{" "}
                  </Form.Label>
                  <Form.Control
                    className="text-center"
                    id="rating"
                    type="number"
                    name="rating"
                    onChange={this.handleChange}
                    value={this.state.newMcomment.rating}
                  />
                 </Form.Group>
                  </Form.Row>
                  <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label
                    htmlFor="withWho"
                  >
                     Who was your Date
                  </Form.Label>
                  <Form.Control
                    className="text-center"
                    id="withWho"
                    type="text"
                    name="withWho"
                    onChange={this.handleChange}
                    value={this.state.newMcomment.withWho}
                  />
       </Form.Group>
                  </Form.Row>
                  <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label
                    htmlFor="dateAgain"
                  >
                     Would you Date this person again{" "}
                  </Form.Label>
                  <Form.Control
                    className="text-center"
                    id="dateAgain"
                    type="text"
                    name="dateAgain"
                    onChange={this.handleChange}
                    value={this.state.newMcomment.dateAgain}
                  />
                  </Form.Group>
                  </Form.Row>
                  <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label
                    htmlFor="review"
                  >
                    What is the Review of this Date{" "}
                  </Form.Label>
                  <Form.Control
                    className="text-center"
                    id="review"
                    type="text"
                    name="review"
                    onChange={this.handleChange}
                    value={this.state.newMcomment.review}
                  />
                 </Form.Group>
                  </Form.Row>
                  <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label
                    htmlFor="lessonLearned"
                  >
                   What did you learn from this Date{" "}
                  </Form.Label>
                  <Form.Control
                    className="text-center"
                    id="lessonLearned"
                    type="text"
                    name="lessonLearned"
                    onChange={this.handleChange}
                    value={this.state.newMcomment.lessonLearned}
                  />
                   </Form.Group>
                  </Form.Row>

                <Button className="edit-button">Submit </Button>
            
            </Form>
            </Container>
          ) : null}
          </Col>
        </div>
      </div>
    );
  }
}
