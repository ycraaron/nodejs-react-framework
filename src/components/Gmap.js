import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import superagent from 'superagent'

class Map extends Component {

  constructor(){
    super();
    this.state = {
      map: null
    }
  }

  componentDidMount(){
    console.log("component mounted in Map")

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
    let markers = this.props.markers.map((item, i )=>{
        // console.log('111')
        // console.log(item.location)
        // console.log(item.location.lat)
        // console.log(item.location.title)
        // console.log(item.locaiton.lat)
        // console.log(item.location.lng)
        // console.log(item.location.active)
        let marker = {
            position:{
                lat: item.location.lat,
                lng: item.location.lng
            },
            active: item.active,
            title: item.title
        }
        // console.log(marker)
        if(marker.active == '1')
          return <Marker key={i} position = {marker.position} />
    })
    // const markers = this.props.markers || []
    // console.log(markers);
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
          {markers}
          {/* {markers.map((marker, index) => (
            <Marker
                key = {index} 
                position={{ lat: marker.location.lat, lng: marker.location.lng }}
            />
            ))} */}
        </GoogleMap>
    );
  }
}

export default withGoogleMap(Map);
