import React, { Component } from 'react'
import Map from './Gmap'
import superagent from 'superagent'
import styles from './styles'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AutoComplete from 'material-ui/AutoComplete';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/FlatButton';
import APImanager from '../utils/APImanager'
import { callback } from '@google/maps/lib/internal/cli';

class Home extends Component {

    constructor(){
        super()
        this.state = {
            titles:[
                { id: 'foo', label: 'foo' },
                { id: 'bar', label: 'bar' },
                { id: 'baz', label: 'baz' },
            ],
            movies:[

            ],
            zoom: 13,
            center: {
                lat:37.755550, 
                lng:-122.445395,
            },
            markers: [
            {
                location: {
                    lat:37.775550, 
                    lng:-122.419395,
                },
                title:'1',
                active:1,
                red:'0'
            }]
        }
    }

    loadMovieNames(callback){
        //load movie names        
        APImanager.get('/api/load-movie-names', null, (err, response) =>{
            if (err) {
                callback(err, null)
                return
            }
            console.log('here using api manager in loadMovieNames')
            let results = response.results
            // console.log(results)
            let i = 1
            let newTitles = []
            let movieNames = []
            results.forEach(function(title){
                let dic_title = {id:i, label:title}
                newTitles.push(dic_title)
                movieNames.push(title)
                i += 1
            },this)
            callback(null, {newTitles:newTitles, movieNames:movieNames})
        })
    }

    loadMarkers(callback){
        APImanager.get('/api/load-all-markers', null, (err, response) =>{
            if (err) {
                callback(err, null)
                return
            }
            console.log('here using api manager in loadMarkers') 
            let markers = []
            let results = response.results
            results.forEach(function(movie) {
                let title = movie.title
                let lat = movie.locations[0].coord.lat
                let lng = movie.locations[0].coord.lng
                let dic_location = {location:{lat:lat, lng:lng}, title:title, active:1, red:'0'}
                markers.push(dic_location)
            }, this);
            callback(null, {markers: markers})
        })
    }
    componentDidMount(){
        console.log('component did mount in Home')        
        this.loadMovieNames((err, results) => {
            if (err){
                alert('ERROR' + err)
                return
            }
            this.setState({
                titles: results.newTitles,
                movies: results.movieNames
            })
        })
        this.loadMarkers((err,results) => {
            if (err){
                alert('ERROR' + err)
                return
            }
            this.setState({
                markers:results.markers
            })
        })
    }

    searchFilm(title){
        let newMarkers = this.state.markers
        newMarkers.forEach(function(marker){
            if(marker.title != title)
                marker.active = 0
            else if(marker.title == title){
                marker.active = 1
                marker.red = '1'                
            }
        },this)
        // console.log('new markers')
        // console.log(newMarkers)
        this.setState({
            markers: newMarkers
        })
    }

    showAllFilms(){
        let newMarkers = this.state.markers
        newMarkers.forEach(function(marker){
            marker.active = 1;
            marker.red = '0'
        },this)
        this.setState({
            markers:newMarkers
        })
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div style={styles.search} className="col-md-11">
                        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                            <AutoComplete
                                hintText="input movie name"
                                filter={AutoComplete.fuzzyFilter}
                                onNewRequest={value=>this.searchFilm(value)}
                                dataSource={this.state.movies}
                                maxSearchResults={9}
                            />  
                        </MuiThemeProvider>
                    </div>
                    <div className="col-md-1">
                        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                            <RaisedButton label="Reset" onClick={()=>this.showAllFilms()}/>
                        </MuiThemeProvider>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
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