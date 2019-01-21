import React, { Component } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import Footer from "./footer";
class NotFound extends Component {
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
                  <h2>404 Not Found</h2>
                  <ul className="breadcrumb-list">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">404 Not Found</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <center>
          <h3 className="card-body" style={{ padding: 100 }}>
            The page you are finding was not found on server.
            <br /> Please go back to home page, otherwise you will be hacked.
          </h3>
        </center>
        <Footer />
      </React.Fragment>
    );
  }
}

export default NotFound;
