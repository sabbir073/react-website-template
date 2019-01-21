import React, { Component } from "react";
import Navbar from "./navbar";
import Brands from "./brand";
import Footer2 from "./footer2";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import mokup6 from "./images/mokup-06.png";
import aboutimg from "./images/about/01.jpg";
import count1 from "./images/cout-01.png";
import count2 from "./images/cout-02.png";
import count3 from "./images/cout-03.png";
import count4 from "./images/cout-04.png";
import team1 from "./images/team-01.png";
import team2 from "./images/team-02.png";
import team3 from "./images/team-03.png";
import team4 from "./images/team-04.png";

class About extends Component {
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
                  <h2>About Us</h2>

                  <ul className="breadcrumb-list">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">About</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main class="page-content">
          <div>
            <div className="about-us-cont-area section-ptb">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="about-cont">
                      <div className="about-us-title">
                        <h2>Why Choose Us</h2>
                        <p>
                          Consectetur adipisicing elit, sed do eiusmod tempor
                          incididunt ut laqua. Ut enim ad minim veniam, quis{" "}
                        </p>
                      </div>
                      <p>
                        Lorem ipsut amet, consectetur adipisicing elit, sed do
                        irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        oecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum. Sed ut perspiciatis
                        unde omnis
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="about-images s--mt--30">
                      <img src={aboutimg} alt="aboutus" />
                    </div>
                  </div>
                </div>
                <div className="row about-list-content">
                  <div className="col-lg-4">
                    <div className="single-about-area">
                      <h4>Our Mission</h4>
                      <p>
                        Lorem ipsut amet, consectetur adipisicing elit, sed do
                        irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        oecat cupidatat non proident, sununt .
                      </p>
                      <ul className="about-feature-list">
                        <li>
                          <i className="zmdi zmdi-check" /> Mod tempor
                          incididunt ut laqua.
                        </li>
                        <li>
                          <i className="zmdi zmdi-check" /> Ut enim ad minim
                          quis nostr.
                        </li>
                        <li>
                          <i className="zmdi zmdi-check" /> Nostrud exercitation
                          ullamco
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="single-about-area">
                      <h4>Our Objective</h4>
                      <p>
                        Lorem ipsut amet, consectetur adipisicing elit, sed do
                        irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        oecat cupidatat non proident, sununt .
                      </p>
                      <p>
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="single-about-area">
                      <h4>Our Achievement</h4>
                      <p>
                        Lorem ipsut amet, consectetur adipisicing elit, sed do
                        irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        oecat cupidatat non proident,
                      </p>
                      <p>
                        sunt in culpa qui officia deserunt mollit anim id est
                        laborum. Sed ut perspiciatis unde omnis Lorem ipsum
                        dolor sit amet, consectetur adipisicin, sed do eiusmod
                        tempor incididunt ut labore et dolor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="video-area section-pt section-pb-b bg-image"
              style={{
                backgroundImage:
                  "url('http://demo.hasthemes.com/streamo-v1/streamo/assets/images/bg/bg-01.jpg')"
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 ml-auto mr-auto">
                    {/* Section Title */}
                    <div className="section-title text-center">
                      <h2 className="text-white">See Videos How It Works</h2>
                      <p className="text-white">
                        Adminim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut pariatur. Excepteur t labore et dolore
                        magnam aliquam quaerat
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <div className="video-inner-wrap">
                      <img src={mokup6} alt="about" />
                      <Link to="#Video-three" className="afterglow video-btn">
                        <i className="zmdi zmdi-play" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="counterup_area section-pb section-pt-120">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-6 single_counter text-center mt--30">
                    <div className="counter_image">
                      <img src={count1} alt="count" />
                    </div>
                    <CountUp className="count odometer" end={240} />
                    <h5>Satisfied Customer</h5>
                  </div>

                  <div className="col-lg-3 col-md-6 single_counter text-center mt--30">
                    <div className="counter_image">
                      <img src={count2} alt="count" />
                    </div>
                    <CountUp className="count odometer" end={546} />
                    <h5>project Completed</h5>
                  </div>

                  <div className="col-lg-3 col-md-6 single_counter text-center mt--30">
                    <div className="counter_image">
                      <img src={count3} alt="count" />
                    </div>
                    <CountUp className="count odometer" end={350} />
                    <h5>Cup of coffee</h5>
                  </div>

                  <div className="col-lg-3 col-md-6 single_counter text-center mt--30">
                    <div className="counter_image">
                      <img src={count4} alt="count" />
                    </div>
                    <CountUp className="count odometer" end={156} />
                    <h5>Award Winning</h5>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="our-best-team-area section-ptb bg-image-two"
              style={{
                backgroundImage:
                  "url('http://demo.hasthemes.com/streamo-v1/streamo/assets/images/bg/bg-03.jpg')"
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 ml-auto mr-auto">
                    <div className="section-title mb-70 text-center">
                      <h2>Best Team</h2>
                      <p>
                        Adminim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut pariatur. Excepteur t labore et dolore
                        magnam aliquam quaerat
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="single-team text-center">
                      <div className="team-image">
                        <img src={team1} alt="team" />
                        <div className="team-socail">
                          <ul>
                            <li>
                              <Link to="/">
                                <i className="zmdi zmdi-facebook" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="zmdi zmdi-twitter" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="zmdi zmdi-linkedin" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="zmdi zmdi-instagram" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-info">
                        <h4>Marl Joni</h4>
                        <h5>Designer</h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6">
                    <div className="single-team text-center">
                      <div className="team-image">
                        <img src={team2} alt="team" />
                        <div className="team-socail">
                          <ul>
                            <li>
                              <Link to="/">
                                <i className="zmdi zmdi-facebook" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="zmdi zmdi-twitter" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="zmdi zmdi-linkedin" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="zmdi zmdi-instagram" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-info">
                        <h4>Shan Morbel</h4>
                        <h5>Designation</h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6">
                    <div className="single-team text-center">
                      <div className="team-image">
                        <img src={team3} alt="team" />
                        <div className="team-socail">
                          <ul>
                            <li>
                              <Link to="/">
                                <i className="zmdi zmdi-facebook" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="zmdi zmdi-twitter" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="zmdi zmdi-linkedin" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="zmdi zmdi-instagram" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-info">
                        <h4>Marland lorem </h4>
                        <h5>Designation</h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6">
                    <div className="single-team text-center">
                      <div className="team-image">
                        <img src={team4} alt="team" />
                        <div className="team-socail">
                          <ul>
                            <li>
                              <Link to="/">
                                <i className="zmdi zmdi-facebook" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="zmdi zmdi-twitter" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="zmdi zmdi-linkedin" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="zmdi zmdi-instagram" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-info">
                        <h4>Jack Marland</h4>
                        <h5>Designation</h5>
                      </div>
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

export default About;
