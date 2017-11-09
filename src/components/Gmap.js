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
    // const markers = this.props.markers.map((venue, i )=>{
    //     const marker = {
    //         position:{
    //             lat: venue.location.lat,
    //             lng: venue.location.lng
    //         }
    //     }
    //     return <Marker key={i} position = {marker.position} />
    // })
    const markers = this.props.markers || []
    console.log(markers);
    let center = this.props.center;
    let zoom = this.props.zoom;

    // markers.map((marker, index) =>(
    //     console.log(marker.location.lat)
    // ))

    return (
        <GoogleMap
          ref = {this.mapLoaded.bind(this)}
          onDragEnd={this.mapMoved.bind(this)}
          defaultZoom={ zoom }
          defaultCenter={ center }>
          {markers.map((marker, index) => (
            <Marker
                key = {index} 
                position={{ lat: marker.location.lat, lng: marker.location.lng }}
            />
            ))}
        </GoogleMap>
    );
  }
}

export default withGoogleMap(Map);
