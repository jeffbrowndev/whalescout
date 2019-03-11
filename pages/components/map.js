import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./marker";

class Map extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "75vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.MAP_API_KEY }}
          defaultCenter={{
            // Center map on the Puget Sound
            lat: 47.608013,
            lng: -122.335167
          }}
          defaultZoom={9}
        >
          {/* Owen Beach */}
          <Marker lat={47.31337} lng={-122.528747} />
          {/* Alki Lighthouse */}
          <Marker lat={47.57631} lng={-122.420616} />
          {/* Carkeek Park */}
          <Marker lat={47.711623} lng={-122.372174} />
          {/* Edmonds Marine Park */}
          <Marker lat={47.805092} lng={-122.393978} />
          {/* Point No Point */}
          <Marker lat={47.912095} lng={-122.525999} />
          {/* Seahurst Park */}
          <Marker lat={47.47621} lng={-122.360278} />
          {/* Golden Gardens */}
          <Marker lat={47.691779} lng={-122.404014} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
