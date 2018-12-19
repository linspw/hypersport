import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}
      initialCenter={{
        lat: -23.199651,
        lng: -45.895396
      }}
      >

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAlLLgWnNjy-ArLJZx9v9vypDll5gQj9Xo')
})(MapContainer)