import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

export default class CommentPage extends Component {
  // We'll set up the  array as an empty array to begin with
  state = {
    userId: this.props.userId,
    comments: [],
    newComment: {
      rating: "",
      dateAgain: "",
      review: "",
      withWho: "",
      photoUrl: "",
      lessonLearned: ""
    },
    redirectToComment: false,
    displayEditForm: false,
    displayCommentForm: false
  };

  getAllComments = () => {
    axios.get(`/api/users/${this.state.userId}/comments`).then(res => {
      // When the page loads, grab all Comments from the database
      console.log(res.data);
      this.setState({ comments: res.data });
    });
  };

  componentDidMount = () => {
    this.getAllComments();
  };

  handleChange = e => {
    const changeNewComment = { ...this.state.newComment };
    changeNewComment[e.target.name] = e.target.value;
    this.setState({ newComment: changeNewComment });
  };

  createComment = e => {
    e.preventDefault();
    axios
      .post(`/api/users/${this.state.userId}/comments`, {
        // Ask the server to create a new user comment in the database
        rating: this.state.newComment.rating,
        dateAgain: this.state.newComment.dateAgain,
        review: this.state.newComment.review,
        withWho: this.state.newComment.withWho,
        photoUrl: this.state.newComment.photoUrl,
        lessonLearned: this.state.newComment.lessonLearned
      })
      .then(res => {
        const commentsList = [...this.state.comments]; // Copy the old comments list into a new one
        commentsList.unshift(res.data);
        this.setState({
          newComment: {
            rating: "",
            dateAgain: "",
            review: "",
            withWho: "",
            photoUrl: "",
            lessonLearned: ""
          },
          displayCommentForm: false,
          comments: commentsList
        });
      });
    this.getAllComments();
  };

  handleChange = e => {
    const changedComment = { ...this.state.newComment };
    changedComment[e.target.name] = e.target.value;
    this.setState({ newComment: changedComment });
  };

  updateComment = e => {
    e.preventDefault();
    axios
      .put(`/api/users/${this.state.userId}`, {
        // ask the server to update the comment in the database
        rating: this.state.newComment.rating,
        dateAgain: this.state.newComment.dateAgain,
        review: this.state.newComment.review,
        withWho: this.state.newComment.withWho,
        photoUrl: this.state.newComment.photoUrl,
        lessonLearned: this.state.newComment.lessonLearned
      })
      .then(res => {
        this.setState({ user: res.data, displayEditForm: false });
      });
    this.getAllComments();
  };

  toggleEditForm = () => {
    // This toggle the button when clicked
    this.setState((state, props) => {
      return { displayEditForm: !state.displayEditForm };
    });
  };

  toggleCommentForm = () => {
    // This toggle the button when clicked
    this.setState((state, props) => {
      return { displayCommentForm: !state.displayCommentForm };
    });
  };

  deleteComment = (e, comment) => {
    e.preventDefault();
    axios
      .delete(`/api/users/${this.state.userId}/comments/${comment._id}`) // Ask the server to delete this comment id
      .then(res => {
        this.getAllComments();
      });
  };

  render() {
    if (this.state.redirectToComment) {
      return <Redirect to={`/users/`} />;
    }
    return (
      <Jumbotron
        className="text-center"
        style={{ position: "relative", marginTop: "30px" }}
      >
        <h3
          style={{
            fontSize: "18px",
            marginBottom: "36px",
            padding: "12px 1px 12px 1px",
            background: "black",
            border: "1px solid black",
            borderRadius: "30px",
            color: "white",
            textTransform: "uppercase",
            letterSpacing: "1.3px",
            fontWeight: "bold"
          }}
        >
          Write A Review
        </h3>
        <Button className="edit-button" onClick={this.toggleCommentForm}>
          All Reviews
        </Button>
        <div>
          {this.state.comments.map(comment => {
            return (
              <div>
                {this.state.displayCommentForm ? (
                  <Container className="text-center">
                  <Card
                    className="text-center"
                    style={{
                      width: "33rem",
                      backgroundColor: "white",
                      paddingLeft: "24px",
                      paddingRight: "24px",
                      paddingTop: "24px",
                      paddingBottom: "24px",
                      marginTop: "26px",
                      textTransform: "uppercase",
                      letterSpacing: "1.3px",
                      fontWeight: "bold", 
                      fontSize: "13.5px"
                    }}
                  >
                    <p>Name of your Date <br/>{comment.withWho}</p>
                    <p>How would you rate this date <br/>{comment.rating}</p>
                    <p>Would you go on a Second Date <br/>{comment.dateAgain}</p>
                    <p>Review of this Date <br/>{comment.review}</p>
                    <p>
                      Lesson learned from this Date <br/>{comment.lessonLearned}
                    </p>

                    <Container
                      style={{ textAlign: "center" }}
                      className="text-center"
                    >
                          <Link
                            to={`/users/${this.state.userId}/comments/${comment._id}`}
                            key={comment._id}
                          >
                            <Button className="edit-button">Edit Review</Button>
                          </Link>
                          <Button
                            className="edit-button"
                            key={comment._id}
                            onClick={e => this.deleteComment(e, comment)}
                          >
                            Delete Review
                          </Button>
                    </Container>
                  </Card>
                  </Container>
                ) : null}
              </div>
            );
          })}

          <Col className="text-center" style={{ marginTop: "30px" }}>
            <Button className="edit-button" onClick={this.toggleEditForm}>
              Add a Review
            </Button>
            {this.state.displayEditForm ? (
              <Container className="text-center">
                <Form
                  className="text-center"
                  style={{
                    position: "relative",
                    width: "33rem",
                      backgroundColor: "white",
                      paddingLeft: "24px",
                      paddingRight: "24px",
                      paddingTop: "24px",
                      paddingBottom: "24px",
                      marginTop: "26px",
                      textTransform: "uppercase",
                      letterSpacing: "1.3px",
                      fontWeight: "bold"
                  }}
                  onSubmit={this.createComment}
                >
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
                        value={this.state.newComment.withWho}
                      />
                    </Form.Group>
                  </Form.Row>
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
                        value={this.state.newComment.rating}
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
                        value={this.state.newComment.dateAgain}
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
                        value={this.state.newComment.review}
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
                        value={this.state.newComment.lessonLearned}
                      />
                    </Form.Group>
                  </Form.Row>
                    <Button
                      className="edit-button"
                      variant="primary"
                      type="submit"
                    >
                      Submit
                    </Button>
                </Form>
              </Container>
            ) : null}
          </Col>
        </div>
      </Jumbotron>
    );
  }
}
