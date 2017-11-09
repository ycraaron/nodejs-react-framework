import React, { Component } from 'react'
import Map from './Gmap'
import SearchBar from './SearchBar'
import superagent from 'superagent'
import Autocomplete from 'react-google-autocomplete'

class Home extends Component {

    
    componentDidMount(){
        console.log('component did mount')
    }

    render(){

        // let geocoder = new google.maps.Geocoder()
        // geocoder.geocode({'address': "Mason & California Streets (Nob Hill)"}, function(results, status) {
        //     if (status == 'OK') {
        //         console.log(results[0].geometry.location.lat())
        //         console.log(results[0].geometry.location.lng())                
        //     } else {
        //       alert('Geocode was not successfull because ' + status)
        //     }
        //   })
    
        const centerLocation = {
            lat:37.775550, 
            lng:-122.419395
        }

        const markers = [
            {
                location: {
                    lat:37.775550, 
                    lng:-122.419395
                }
            }
        ]
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        
                        <SearchBar />
                        <br />
                        <Autocomplete
                            style={{width:'90%'}}
                            onPlaceSelected={(place) => {
                                console.log(place);
                            }}
                            types={['(regions)']}
                            componentRestrictions = {{country:"us"}}
                        />
                    </div>

                    <div className="col-md-8">
                        Right Side Map
                        <Map 
                            isMarkerShown
                            zoom = { 15 }
                            center={centerLocation} 
                            markers={markers}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `400px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home