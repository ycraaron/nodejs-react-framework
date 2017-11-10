import React, { Component } from 'react'
import Map from './Gmap'
import SearchBar from './SearchBar'
import superagent from 'superagent'
import Autocomplete from 'react-google-autocomplete'

class Home extends Component {

    constructor(){
        super()
        this.state = {
            markers: [
            {
                location: {
                    lat:37.775550, 
                    lng:-122.419395
                }
            },
            {
                location: {
                    lat:37.772550, 
                    lng:-122.420395
                }
            }]
        }
    }

    
    componentDidMount(){
        console.log('component did mount in Home')
        let newState = this.state
        superagent
        .get('/api/load-all-markers')
        .query(null)
        .set('Accept', 'application/json')
        .end((err, response) =>{
            if(err)
                alert('error loading markers')
            //console.log(JSON.stringify(response))
            // console.log(JSON.parse(response.text).results)
            let results = JSON.parse(response.text).results
            let markers = []
            console.log('length of results', results.length)
            results.forEach(function(movie) {
                console.log(typeof(movie))
                console.log(typeof(movie.locations))
                console.log(movie.locations)
                let lat = movie.locations[0].coord.lat
                let lng = movie.locations[0].coord.lng
                let dic_location = {location:{lat:lat, lng:lng}}
                markers.push(dic_location)
            }, this);
            this.setState({
                markers: markers
            })
        })
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

        // const markers = [
        //     {
        //         location: {
        //             lat:37.775550, 
        //             lng:-122.419395
        //         }
        //     }
        // ]
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
                            markers={this.state.markers}
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