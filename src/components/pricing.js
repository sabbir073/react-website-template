import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Brands from "./brand";
import Footer2 from "./footer2";
class Pricing extends Component {
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
                  <h2>Pricing</h2>

                  <ul className="breadcrumb-list">
                    <li className="breadcrumb-item">
                      <Link to="index.html">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Our Pricing Plan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main className="page-content">
          <div className="pricing-plan-area section-pt">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 ml-auto mr-auto">
                  <div className="section-title mb-70 text-center">
                    <h2>See Our Pricing Plan</h2>
                    <p>
                      Consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut laqua. Ut enim ad minim veniam, quis
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="pricing-panal-wrap free-panel mt--30">
                    <span>Free Pack</span>
                    <div className="pricing-panel text-center">
                      <div className="pricing-heading">
                        <h2>$0.00</h2>
                        <h4>Free</h4>
                      </div>
                      <div className="pricing-body">
                        <ul>
                          <li>laboris nisi ut pariatur. </li>
                          <li>Secure Service </li>
                          <li>laboris nisi ut pariatur. </li>
                          <li>70 Cup of coffee</li>
                          <li>Awesome Support</li>
                          <li>Offline Download</li>
                          <li>nam aliquam</li>
                        </ul>
                      </div>
                      <div className="pricing-footer">
                        <Link to="/pricing" className="plan-btn">
                          Choose A Plan
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="pricing-panel  mt--30 text-center">
                    <div className="pricing-heading">
                      <h2>$100</h2>
                      <h4>Premium</h4>
                    </div>
                    <div className="pricing-body">
                      <ul>
                        <li>laboris nisi ut pariatur. </li>
                        <li>Secure Service </li>
                        <li>laboris nisi ut pariatur. </li>
                        <li>200 Cup of coffee</li>
                        <li>Awesome Support</li>
                        <li>Offline Download</li>
                        <li>nam aliquam</li>
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <Link to="/pricing" className="plan-btn">
                        Choose A Plan
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="pricing-panel  mt--30 text-center">
                    <div className="pricing-heading">
                      <h2>$200</h2>
                      <h4>Standard</h4>
                    </div>
                    <div className="pricing-body">
                      <ul>
                        <li>laboris nisi ut pariatur. </li>
                        <li>Secure Service </li>
                        <li>laboris nisi ut pariatur. </li>
                        <li>500 Cup of coffee</li>
                        <li>Awesome Support</li>
                        <li>Offline Download</li>
                        <li>nam aliquam</li>
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <Link to="/pricing" className="plan-btn">
                        Choose A Plan
                      </Link>
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

export default Pricing;
