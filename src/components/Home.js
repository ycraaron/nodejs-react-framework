import React, { Component } from 'react'
import Map from './Gmap'
import ZoneContainer from './ZoneContainer'
import SearchBar from './SearchBar'

class Home extends Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <SearchBar />
                    </div>
                    <div className="col-md-8">
                        Right Side Map
                        <Map 
                            isMarkerShown
                            zoom = { 15 }
                            center={{lat:40.728199, lng:-73.9894738}} 
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