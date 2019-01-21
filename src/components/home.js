import React, { Component } from "react";
import Header from "./header-slider";
import HowitworksVedio from "./howitworks-video";
import FeatureAndList from "./featureandlist";
import Testimonial from "./testimonial";
import Brands from "./brand";
import Footer from "./footer";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <HowitworksVedio />
        <FeatureAndList />
        <Testimonial />
        <Brands />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
