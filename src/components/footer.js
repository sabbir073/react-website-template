import React, { Component } from "react";
import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <footer className="footer-area">
        <div
          className="footer-top-tow bg-image-two"
          style={{
            backgroundImage:
              "url('http://demo.hasthemes.com/streamo-v1/streamo/assets/images/bg/footer-bg-02.jpg')"
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-custom-4 mt--50">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">About Streamo</h4>
                  <div className="footer-contet">
                    <p>
                      Eiusmod tempor incididunt ut la abore et minim ven exerc
                      itation ulla mco lboris naliquip ex ea comm.
                    </p>
                    <ul className="fotter-socail">
                      <li>
                        <Link to="http://facebook.com" target="_blank">
                          <i className="zmdi zmdi-facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link to="http://twitter.com" target="_blank">
                          <i className="zmdi zmdi-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="http://linkedin.com" target="_blank">
                          <i className="zmdi zmdi-linkedin" />
                        </Link>
                      </li>
                      <li>
                        <Link to="http://instagram.com" target="_blank">
                          <i className="zmdi zmdi-instagram" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-custom-3 mt--50">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">Company</h4>
                  <div className="footer-contet">
                    <ul className="footer-list">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/howitworks">Service</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-custom-3 mt--50">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">Services</h4>
                  <div className="footer-contet">
                    <ul className="footer-list">
                      <li>
                        <Link to="/">Video</Link>
                      </li>
                      <li>
                        <Link to="/">Movie</Link>
                      </li>
                      <li>
                        <Link to="/">Tv Series</Link>
                      </li>
                      <li>
                        <Link to="/">Live</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-custom-3 mt--50">
                <div className="footer-widget">
                  <h4 className="footer-widget-title">Contact</h4>
                  <div className="footer-contet">
                    <ul className="footer-contact-list">
                      <li>
                        <i className="zmdi zmdi-phone" />
                        <Link to="/">+022222222</Link>
                      </li>
                      <li>
                        <i className="zmdi zmdi-home" />
                        <Link to="/">Queen meri street abc/23 Bangladesh</Link>
                      </li>
                      <li>
                        <i className="zmdi zmdi-email" />
                        <Link to="/">demo@gmail.com</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <p className="copyright-text">
                  © 2018 All right reserved | Template: hasthemes | React:
                  Amicritas
                </p>
              </div>
              <div className="col-lg-6 col-md-6">
                <ul className="footer-bottom-list">
                  <li>
                    <Link to="/">Help</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/">support</Link>
                  </li>
                  <li>
                    <Link to="/contact">contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
