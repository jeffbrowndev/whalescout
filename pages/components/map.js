import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

class Map extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDsXO57NZVMNtNJMNWVOGmwW9y0M-GMK7c' }}
          defaultCenter={{
            // Center map on the Puget Sound
            lat: 47.608013,
            lng: -122.335167
          }}
          defaultZoom={9}
        >
          <Marker lat={47.608013} lng={-122.335167} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
