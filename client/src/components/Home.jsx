import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HomeContainer } from "./styled-components/HomeStyles";

export default class Home extends Component {
  render() {
    return (
      <HomeContainer className="bg-info p-5 home-body-container">
        <section className="one">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <a href="#">
                  <img src="https://image.freepik.com/free-photo/couple-kissing-isolated-pink-background_1368-27309.jpg" className="zoom"/>
                </a>
              </div>
            </div>

            <div className="row mt-5 text-center text-dark">
              <div className="col-md-4 zoom">
                <a href="#">
                  <img src="https://image.freepik.com/free-photo/valentine-day-young-couple-smiling-with-happy-pleasant-expression-pink-background_1368-26912.jpg" />
                  <div className="product-price">
                  <Link to={`/users/`}>
                    <h4 className="text-dark">REGISTER NOW!</h4>
                    </Link>
                  </div>
                </a>
              </div>
              <div className="col-md-4 zoom">
                <a href="#">
                  <img src="https://drbeckermeyer.com/wp-content/uploads/2017/01/happy-couple.jpg" />
                  <div className="product-price">
                    {" "}
                    <Link to={`/users/`}>
                    <h4 className="text-dark">CREATE A PROFILE!</h4>
                    </Link>
                  </div>
                </a>
              </div>
              <div className="col-md-4 zoom">
                <a href="#">
                  <img src="https://t4.ftcdn.net/jpg/02/12/75/17/240_F_212751741_IH2iyT8gbdo2Oa5RoNsCUwoI1KT7RCza.jpg" />
                  <div className="product-price">
                  <Link to={`/users/`}>
                    <h4 className="text-dark">FIND TRUE LOVE</h4>
                    </Link>
                  </div>
                </a>
              </div>
            </div>
            </div>

       
        </section>
      </HomeContainer>
    );
  }
}
