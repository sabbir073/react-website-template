import React, { Component } from "react";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <header className="header-area inner-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-7">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-9 col-5">
              <div className="main-menu">
                <nav className="main-navigation">
                  <ul>
                    <li className="active">
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/howitworks">How it Works</Link>
                    </li>
                    <li>
                      <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
                <div className="login-button">
                  <Link className="login-btn border-r-5 button-c-two" to="/">
                    Log in
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="mobile-menu d-block d-lg-none" />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
