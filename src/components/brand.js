import React, { Component } from "react";
import { Link } from "react-router-dom";
import brands1 from "./images/brands/01.png";
import brands2 from "./images/brands/02.png";
import brands3 from "./images/brands/03.png";
import brands4 from "./images/brands/04.png";
import brands5 from "./images/brands/05.png";
import brands6 from "./images/brands/06.png";
class Brands extends Component {
  state = {};
  render() {
    return (
      <div className="our-brand-area section-ptb">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ml-auto mr-auto">
              <div className="section-title text-center">
                <h2>Our Sponsor &amp; Partner</h2>
                <p>
                  Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut laqua. Ut enim ad minim veniam, quis
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="row sponsor-brand-active ">
                <div className="col-lg-2 text-center">
                  <div className="single-brand">
                    <Link to="/">
                      <img src={brands1} alt="brands" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-2 text-center">
                  <div className="single-brand">
                    <Link to="/">
                      <img src={brands2} alt="brands" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-2 text-center">
                  <div className="single-brand">
                    <Link to="/">
                      <img src={brands3} alt="brands" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-2 text-center">
                  <div className="single-brand">
                    <Link to="/">
                      <img src={brands4} alt="brands" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-2 text-center">
                  <div className="single-brand">
                    <Link to="/">
                      <img src={brands5} alt="brands" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-2 text-center">
                  <div className="single-brand">
                    <Link to="/">
                      <img src={brands6} alt="brands" />
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

export default Brands;
