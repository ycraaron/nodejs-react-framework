import React, { Component } from 'react'
import Map from './Gmap'
import SearchBar from './SearchBar'
import superagent from 'superagent'
import ReactAutocomplete from 'react-autocomplete'

class Home extends Component {

    constructor(){
        super()
        this.state = {
            titles:[
                { id: 'foo', label: 'foo' },
                { id: 'bar', label: 'bar' },
                { id: 'baz', label: 'baz' },
            ],
            zoom: 12,
            center: {
                lat:37.755550, 
                lng:-122.405395,
            },
            markers: [
            {
                location: {
                    lat:37.775550, 
                    lng:-122.419395,
                },
                title:'1',
                active:1
            }]
        }
    }

    
    componentDidMount(){
        console.log('component did mount in Home')


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
            // console.log('length of results', results.length)
            results.forEach(function(movie) {
                // console.log(typeof(movie))
                // console.log(typeof(movie.locations))
                // console.log(movie.locations)
                let title = movie.title
                let lat = movie.locations[0].coord.lat
                let lng = movie.locations[0].coord.lng
                let dic_location = {location:{lat:lat, lng:lng}, title:title, active:1}
                markers.push(dic_location)
            }, this);
            console.log('before')
            console.log(markers)
            this.setState({
                markers: markers
            })
        })


        let newState = this.state
        let newTitles = []
        superagent
        .get('/api/load-movie-names')
        .query(null)
        .set('Accept', 'application/json')
        .end((err,response) => {
            if(err)
                alert('error loading movie names')
            let results = JSON.parse(response.text).results
            console.log(results)
            let i = 1
            results.forEach(function(title){
                let dic_title = {id:i, label:title}
                newTitles.push(dic_title)
                i += 1
            },this)
        })
        this.setState({
            titles: newTitles
        })

    }

    searchFilm(title){
        let newMarkers = this.state.markers
        newMarkers.forEach(function(marker){
            if(marker.title != title)
                marker.active = 0
            else if(marker.title == title)
                marker.active = 1
        },this)
        console.log('new markers')
        console.log(newMarkers)
        this.setState({
            markers: newMarkers
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
                        <ReactAutocomplete
                            items={this.state.titles}
                            shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                            getItemValue={item => item.label}
                            renderItem={(item, highlighted) =>
                            <div
                                key={item.id}
                                style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                            >
                                {item.label}
                            </div>
                            }
                            value={this.state.value}
                            onChange={e => this.setState({ value: e.target.value })}
                            onSelect={value => this.searchFilm(value)}
                        />
                        <br />
                        <button 
                        onClick={this.searchFilm.bind(this)} 
                        className="btn btn-info"> Search </button>
                        <br />
                        {/* <Autocomplete
                            style={{width:'90%'}}
                            onPlaceSelected={(place) => {
                                console.log(place);
                            }}
                            types={['(regions)']}
                            componentRestrictions = {{country:"us"}}
                        /> */}
                    </div>


                    <div className="col-md-8">
                        Right Side Map
                        <Map 
                            isMarkerShown
                            zoom = { this.state.zoom }
                            center={ this.state.center } 
                            markers={ this.state.markers }
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `800px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home