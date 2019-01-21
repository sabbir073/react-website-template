import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Brands from "./brand";
import Footer2 from "./footer2";
import SimpleMap from "./googlemaps";
class Contact extends Component {
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
                  <h2>Contact Us</h2>

                  <ul className="breadcrumb-list">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main className="page-content">
          <div>
            <div className="contact-us-wrapper section-ptb">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 ml-auto mr-auto">
                    <div className="section-title text-center">
                      <h2>Contact Us</h2>
                      <p>
                        Consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut laqua. Ut enim ad minim veniam, quis{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="contact-form-wrap">
                      <form id="contact-form" action="">
                        <div className="contact-page-form">
                          <div className="row contact-input">
                            <div className="col-lg-6 col-md-6 contact-inner">
                              <input
                                name="name"
                                type="text"
                                placeholder="First Name"
                                id="first-name"
                              />
                            </div>
                            <div className="col-lg-6 col-md-6 contact-inner">
                              <input
                                name="lastname"
                                type="text"
                                placeholder="Last Name"
                                id="last-name"
                              />
                            </div>
                            <div className="col-lg-6 col-md-6 contact-inner">
                              <input
                                type="text"
                                placeholder="Enter Your E-mail"
                                id="email"
                                name="email"
                              />
                            </div>
                            <div className="col-lg-6 col-md-6 contact-inner">
                              <input
                                name="subject"
                                type="text"
                                placeholder="Phone Number"
                                id="subject"
                              />
                            </div>
                            <div className="col-lg-12 col-md-12 contact-inner contact-message">
                              <textarea
                                name="message"
                                placeholder="Message"
                                defaultValue={"Write Your Msg"}
                              />
                            </div>
                          </div>
                          <div className="contact-submit-btn text-center">
                            <button className="submit-btn" type="submit">
                              Send Message
                            </button>
                            <p className="form-messege" />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="map-wrapper">
              <div className="gogle_map">
                <SimpleMap />
              </div>
              <div className="contact-info-area">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-5  ml-auto">
                      <div className="contact-info-inner">
                        <div className="single-contact-info">
                          <div className="contact-info-icon">
                            <i className="zmdi zmdi-home" />
                          </div>
                          <div className="contact-info-text">
                            <p>
                              Home #02 Hangla pur <br /> Dhaka , Bangladesh
                            </p>
                          </div>
                        </div>

                        <div className="single-contact-info">
                          <div className="contact-info-icon">
                            <i className="zmdi zmdi-phone" />
                          </div>
                          <div className="contact-info-text">
                            <p>
                              <Link to="/contact">+022222222</Link>
                              <Link to="/contact">+01111109999</Link>
                            </p>
                          </div>
                        </div>

                        <div className="single-contact-info">
                          <div className="contact-info-icon">
                            <i className="zmdi zmdi-email" />
                          </div>
                          <div className="contact-info-text">
                            <p>
                              <Link to="/contact">example@e-mail.com</Link>
                              <Link to="/contact">example@e-mail.com</Link>
                            </p>
                          </div>
                        </div>

                        <div className="single-contact-info">
                          <div className="contact-info-icon">
                            <i className="zmdi zmdi-globe-alt" />
                          </div>
                          <div className="contact-info-text">
                            <p>
                              <Link to="http://amicritas.com">
                                www.amicritas.com
                              </Link>
                            </p>
                          </div>
                        </div>
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

export default Contact;
