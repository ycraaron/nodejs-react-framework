import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {

  constructor(){
    super();
    this.state = {
      map: null
    }
  }

  mapMoved(){
    if(this.state.map!=null)
      console.log('move finished' + JSON.stringify(this.state.map.getCenter()));
  }

  mapLoaded(map){
    if(this.state.map != null)
      return;
    this.setState({
      map: map
    });
  }

  render() {
    const markers = this.props.markers || [];
    let center = this.props.center;
    let zoom = this.props.zoom;

    return (
        <GoogleMap
          ref = {this.mapLoaded.bind(this)}
          onDragEnd={this.mapMoved.bind(this)}
          defaultZoom={ zoom }
          defaultCenter={ center }>
         {this.props.isMarkerShown && <Marker position={center} />}
        </GoogleMap>
    );
  }
}

export default withGoogleMap(Map);
