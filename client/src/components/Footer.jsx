import React from "react";
import { FooterContainer } from "./styled-components/FooterStyles";

function Footer () {
    return (
      <FooterContainer>
         <section className="one">
          <div className="container footer">
        <div className="row mt-5 contact">
              <div className="col-md-3">
                <h4>SAUVE Match Maker</h4>
                <p>
                  Explore your chances <br /> Leave with a great memory
                </p>
              </div>
              <div className="col-md-2">
                <h4>Social Media</h4>
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
              </div>
              <div className="col-md-3">
                <h4>Contact</h4>
                <a href="#">678-468-6012</a>
                <a href="#">Date@sauve.com</a>
              </div>
              <div className="col-md-4">
                <h4>Enter your email address and submit to subscribe</h4>
                <form>
                  <input
                    className="textField"
                    type="text"
                    placeholder="Your Email Here"
                  />
                  <input className="submitBtn" type="submit" name="" />
                </form>
              </div>
            </div>
            <div className="row copyright">
              <div className="col-md-12">
                <p>&copy; 2019 SUAVE Match Maker</p>
              </div>
            </div>
            </div>
            </section>
      </FooterContainer>
    );
  }
export default Footer;
