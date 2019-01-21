import React, { Component } from "react";

import Testimonial2 from "./images/testimonal-02.png";

class Testimonial extends Component {
  state = {};
  render() {
    return (
      <div className="testimonial-area section-pt">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ml-auto mr-auto">
              <div className="section-title text-center">
                <h2>What People Say</h2>
                <p>
                  Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut laqua. Ut enim ad minim veniam, quis
                </p>
              </div>
            </div>
          </div>
          <div className="row testimonial-slider">
            <div className="col-lg-4">
              <div className="slider-item text-center">
                <div className="testimonial">
                  <div className="testimonial-header">
                    <span className="bg-inner-image">
                      <img src={Testimonial2} alt="testimonial" />
                      <i className="zmdi zmdi-quote" />
                    </span>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      Lorem ipsum dolor sit amet, ctetarchitecto beatae
                      vitouptatem.
                    </p>
                    <h5>Jasica satthy</h5>
                    <h6>Client</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="slider-item text-center">
                <div className="testimonial">
                  <div className="testimonial-header">
                    <span className="bg-inner-image">
                      <img src={Testimonial2} alt="testimocial" />
                      <i className="zmdi zmdi-quote" />
                    </span>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      Lorem ipsum dolor sit amet, ctetarchitecto beatae
                      vitouptatem.
                    </p>
                    <h5>Priya Mehazabin</h5>
                    <h6>Client</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="slider-item text-center">
                <div className="testimonial">
                  <div className="testimonial-header">
                    <span className="bg-inner-image">
                      <img src={Testimonial2} alt="testimonial" />
                      <i className="zmdi zmdi-quote" />
                    </span>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      Lorem ipsum dolor sit amet, ctetarchitecto beatae
                      vitouptatem.
                    </p>
                    <h5>Adnan Rowshan</h5>
                    <h6>Client</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
