import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)"
    }}
  >
    {text}
  </div>
);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 23.76,
      lng: 90.42
    },
    zoom: 12
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ width: "100%", height: "670px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCfmCVTjRI007pC1Yk2o2d_EhgkjTsFVN8" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={23.761226} lng={90.420766} text={"Dhaka"} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
