import React, { Component } from "react";
import styles from "../scss/app.scss";
import GoogleMapReact from "google-map-react";
import Marker from "./marker";

class Map extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly
      <div>
        <a className={styles.anchor} id="map" />
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
            <Marker
              lat={47.3133567}
              lng={-122.529672}
              location="Owen Beach"
              map_link="https://www.google.com/maps/place/Owen+Beach/@47.3133567,-122.529672,18z/data=!3m1!4b1!4m5!3m4!1s0x5490530cf2532fff:0xdf518fbdeabf51dc!8m2!3d47.3133552!4d-122.5287473"
            />
            {/* Alki Point */}
            <Marker
              lat={47.5768976}
              lng={-122.4171908}
              location="Alki Point"
              map_link="https://www.google.com/maps/place/Alki+Point+Lighthouse/@47.5768976,-122.4171908,14z/data=!4m13!1m7!3m6!1s0x54904089f02ed333:0x9aed4b8c925151c0!2sAlki,+Seattle,+WA+98116!3b1!8m2!3d47.5754629!4d-122.4106578!3m4!1s0x5490409a91d15747:0xbc1d4abecf0530e2!8m2!3d47.5762663!4d-122.4206052"
            />
            {/* Browns Point Lighthouse Park */}
            <Marker
              lat={47.3056642}
              lng={-122.4458238}
              location="Browns Point Lighthouse Park"
              map_link="https://www.google.com/maps/place/Browns+Point+Lighthouse+Park/@47.3056642,-122.4458238,17z/data=!3m1!4b1!4m5!3m4!1s0x5490541b32b54d35:0x9efd45835ade6ae2!8m2!3d47.3056642!4d-122.4436351"
            />
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
      </div>
    );
  }
}

export default Map;
