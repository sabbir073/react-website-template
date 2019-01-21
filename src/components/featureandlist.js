import React, { Component } from "react";
import { Link } from "react-router-dom";
import Icon4 from "./images/07.png";
import Icon5 from "./images/08.png";
import Icon6 from "./images/09.png";
import Icon7 from "./images/10.png";
import Icon8 from "./images/12.png";
import mokup2 from "./images/mokup-02.png";
import mokup3 from "./images/mokup-03.png";
import mokup4 from "./images/mokup-04.png";
import mokup5 from "./images/mokup-05.png";
class FeatureAndList extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="best-feature-area section-pb">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 ml-auto mr-auto">
                <div className="section-title mb-60 text-center">
                  <h2>The Best Features</h2>
                  <p>
                    Consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut laqua. Ut enim ad minim veniam, quis{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="best-single-feature text-center mt--40">
                  <div className="best-single-feature-icons">
                    <span>
                      <img src={Icon4} alt="icon4" />
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
                      <img src={Icon5} alt="icon5" />
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
                      <img src={Icon6} alt="icon6" />
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
                      <img src={Icon7} alt="icon7" />
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
                      <img src={Icon6} alt="icon" />
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
                      <img src={Icon8} alt="icon8" />
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

        <div
          className="feature-list-area mt-0 section-ptb bg-image"
          style={{
            backgroundImage:
              "url('http://demo.hasthemes.com/streamo-v1/streamo/assets/images/bg/bg-02.jpg')"
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="choose-contents-wrap ">
                  <div className="section-title-two">
                    <h2 className="text-white">Drag &amp; Drop Option</h2>
                  </div>
                  <p className="text-white">
                    eiusmod tempor incididunt ut laqua. Ut enim ad minim vniam,
                    quis nostrud exercitation ullamco la aliquipLorem ipsum
                    dolor sit amet, consectetur .
                  </p>
                  <div className="feature-list">
                    <ul className="text-white">
                      <li>
                        <i className="zmdi zmdi-check" /> Mod tempor incididunt
                        ut laqua.
                      </li>
                      <li>
                        <i className="zmdi zmdi-check" /> Ut enim ad minim quis
                        nostr.
                      </li>
                      <li>
                        <i className="zmdi zmdi-check" /> Nostrud exercitation
                        ullamco
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="choose-image-wrap text-right">
                  <img src={mokup2} alt="mokup2" />
                </div>
              </div>
            </div>
            <div className="row align-items-center feature-list-two">
              <div className="col-lg-6 col-md-12 order-lg-1 order-2">
                <div className="choose-image-wrap">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 mt--30 ">
                      <img src={mokup3} alt="mokup3" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 mt--30">
                      <img src={mokup4} alt="mokup4" />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 mt--30">
                      <img src={mokup5} alt="mokup5" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 order-lg-2 order-1">
                <div className="choose-contents-wrap ml--35">
                  <div className="section-title-two">
                    <h2 className="text-white">Easy &amp; Customizable</h2>
                  </div>
                  <p className="text-white">
                    eiusmod tempor incididunt ut laqua. Ut enim ad minim vniam,
                    quis nostrud exercitation ullamco la aliquipLorem ipsum
                    dolor sit amet, consectetur .
                  </p>
                  <div className="choose-button  two-c-theme">
                    <Link to="/contact" className="default-btn mr--10 bg-tow">
                      Buy Now
                    </Link>
                    <Link to="/pricing" className="primary-btn ml--10">
                      Try Free Trial
                    </Link>
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

export default FeatureAndList;
