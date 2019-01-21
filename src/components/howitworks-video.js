import React, { Component } from "react";
import { Link } from "react-router-dom";
import mokupimg from "./images/mokup-07.png";

class HowitworksVedio extends Component {
  state = {};
  render() {
    return (
      <div className="videos-area section-pb section-bg-shape-2">
        <div className="container">
          <div className="row videos-main-area align-items-center">
            <div className="col-lg-5 col-md-7 order-md-1 order-2 s--mt--30">
              <div className="videos-contents-wrap">
                <div className="section-title-two">
                  <h2>See Videos How It Works</h2>
                </div>
                <p>
                  unde omnis iste natus error sit volupt atem accus antiumij
                  doloremque laudantium, totam rem aperiam, quia voptas Neque
                  porro quisquam est, qui dolosum quia dmet, consectetur,
                  adipisci velit.
                </p>
                <div className="choose-button  two-c-theme">
                  <Link to="/about" className="default-btn mr--10 bg-tow">
                    Learn More
                  </Link>
                  <Link to="/pricing" className="primary-btn ml--10">
                    Try Free Trial
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-5 order-md-2 order-1">
              <div className="videos-image-wrap text-center mb--35">
                <img src={mokupimg} alt="mockup" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HowitworksVedio;
