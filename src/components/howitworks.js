import React, { Component } from "react";
import Navbar from "./navbar";
import Brands from "./brand";
import Footer2 from "./footer2";
import { Link } from "react-router-dom";
import iconn1 from "./images/07.png";
import iconn2 from "./images/08.png";
import iconn3 from "./images/09.png";
import iconn4 from "./images/10.png";
import iconn5 from "./images/12.png";

class HowItWorks extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div
          className="breadcrumb-area bg-image"
          style={{
            backgroundImage:
              "url('http://demo.hasthemes.com/streamo-v1/streamo/assets/images/bg/breadcrumb-bg-01.jpg')"
          }}
        >
          <div className="container">
            <div className="in-breadcrumb">
              <div className="row">
                <div className="col text-center">
                  <h2>Features</h2>

                  <ul className="breadcrumb-list">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Features</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main className="page-content">
          <div>
            <div className="best-feature-area section-pb section-pt-110">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="best-single-feature text-center mt--40">
                      <div className="best-single-feature-icons">
                        <span>
                          <img src={iconn1} alt="pic-icon" />
                        </span>
                      </div>
                      <div className="best-single-feature-contents">
                        <h4>Cloud Security</h4>
                        <p>
                          nostruexercitation ullamco laboris nisi ut pariatur.
                          Excepteur sint occaecdi tempora incidunt .
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="best-single-feature text-center mt--40">
                      <div className="best-single-feature-icons">
                        <span>
                          <img src={iconn2} alt="pic-icon" />
                        </span>
                      </div>
                      <div className="best-single-feature-contents">
                        <h4>Web &amp; Mobile Performence</h4>
                        <p>
                          nostruexercitation ullamco laboris nisi ut pariatur.
                          Excepteur sint occaecdi tempora incidunt .
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="best-single-feature text-center mt--40">
                      <div className="best-single-feature-icons">
                        <span>
                          <img src={iconn3} alt="pic-icon" />
                        </span>
                      </div>
                      <div className="best-single-feature-contents">
                        <h4>Enterprise Security</h4>
                        <p>
                          nostruexercitation ullamco laboris nisi ut pariatur.
                          Excepteur sint occaecdi tempora incidunt .
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="best-single-feature text-center mt--40">
                      <div className="best-single-feature-icons">
                        <span>
                          <img src={iconn4} alt="pic-icon" />
                        </span>
                      </div>
                      <div className="best-single-feature-contents">
                        <h4>Live Streaming Solution</h4>
                        <p>
                          nostruexercitation ullamco laboris nisi ut pariatur.
                          Excepteur sint occaecdi tempora incidunt .
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="best-single-feature text-center mt--40">
                      <div className="best-single-feature-icons">
                        <span>
                          <img src={iconn3} alt="pic-icon" />
                        </span>
                      </div>
                      <div className="best-single-feature-contents">
                        <h4>HD Quality Experience</h4>
                        <p>
                          nostruexercitation ullamco laboris nisi ut pariatur.
                          Excepteur sint occaecdi tempora incidunt .
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="best-single-feature text-center mt--40">
                      <div className="best-single-feature-icons">
                        <span>
                          <img src={iconn5} alt="pic-icon" />
                        </span>
                      </div>
                      <div className="best-single-feature-contents">
                        <h4>Video Apis</h4>
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

            <div className="get-started-area">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <div className="get-started-text">
                      <h2 className="text-white">Get Started</h2>
                      <p className="text-white">
                        t non proident, sunt in culpa qui officia deserunt
                        mollit anim id est laborum. Sed ut perspiciatis unde
                        omnis iste natus error sit voluptatem accusa.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="get-started-buton">
                      <Link to="/">Try Free Trial For 30 Days</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Brands />
          <Footer2 />
        </main>
      </React.Fragment>
    );
  }
}

export default HowItWorks;
