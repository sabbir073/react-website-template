import React, { Component } from "react";
import sliderimage from "./images/slider-inner-02.png";
import Icon1 from "./images/04.png";
import Icon2 from "./images/05.png";
import Icon3 from "./images/06.png";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <div className="hero-slider">
          <div
            className="single-slide-2 bg-image-two d-flex align-items-center"
            style={{
              backgroundImage:
                "url('http://demo.hasthemes.com/streamo-v1/streamo/assets/images/slider/background-image-1.jpg')"
            }}
          >
            <div className="hero-content-two container">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-7">
                  <div className="slider-text-info">
                    <h3 className="text-white">WELCOME TO STREAMO</h3>
                    <h1 className="text-white"> Best Streaming</h1>
                    <p className="text-white">
                      Lorem ipsum dolor sit amet, coectetur adipisicing elit,
                      sed do eiusmod tempor incidiunt ut laqua. Ut enim ad minim
                      veniam, quis nullamco laboris
                    </p>
                    <div className="slider-button two-c-theme">
                      <Link to="/about" className="default-btn mr--10 bg-tow">
                        Learn More
                      </Link>
                      <Link to="/pricing" className="primary-btn ml--10">
                        Try Free Trial
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5">
                  <div className="slider-image">
                    <img src={sliderimage} alt="slider" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="feature-area section-pb section-pt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-feature text-center mt--30">
                  <div className="single-feature-icons border-b-two">
                    <span>
                      <img src={Icon1} alt="icon" />
                    </span>
                  </div>
                  <div className="single-feature-contents">
                    <h4>Global Infrastructure</h4>
                    <p>
                      nostruexercitation ullamco laboris nisi ut pariatur.
                      Excepteur sint occaecdi tempora incidunt .
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-feature text-center mt--30">
                  <div className="single-feature-icons border-b-two">
                    <span>
                      <img src={Icon2} alt="icon" />
                    </span>
                  </div>
                  <div className="single-feature-contents">
                    <h4>Scalability</h4>
                    <p>
                      nostruexercitation ullamco laboris nisi ut pariatur.
                      Excepteur sint occaecdi tempora incidunt .
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-feature text-center mt--30">
                  <div className="single-feature-icons border-b-two">
                    <span>
                      <img src={Icon3} alt="tcon" />
                    </span>
                  </div>
                  <div className="single-feature-contents">
                    <h4>Streaming Expertise</h4>
                    <p>
                      nostruexercitation ullamco laboris nisi ut pariatur.
                      Excepteur sint occaecdi tempora incidunt .
                    </p>
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

export default Header;
