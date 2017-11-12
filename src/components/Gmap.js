import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import superagent from 'superagent'
import styles from './styles'

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
        let marker = {
            position:{
                lat: item.location.lat,
                lng: item.location.lng
            },
            active: item.active,
            title: item.title,
            red: item.red
        }
        if(marker.active == '1')
          if(marker.red == '1')
            return <Marker key={i} position = {marker.position} icon={'./images/marker-red.png'} />
          else
            return <Marker key={i} position = {marker.position} icon={'./images/marker-blue.png'} />
    })
    let center = this.props.center;
    let zoom = this.props.zoom;
    return (
        <GoogleMap
          ref = {this.mapLoaded.bind(this)}
          onDragEnd={this.mapMoved.bind(this)}
          defaultZoom={ zoom }
          defaultCenter={ center }
          defaultOptions={{ styles: styles.map }}>
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
