import React, { Component } from 'react'
import styles from './styles'
class Banner extends Component {
    render(){
        return(  
            <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">   Aftership Challenge</a>
            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                <a className="nav-link" href="#"> <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#"></a>
                </li>
            </ul>
            <span className="navbar-text">
                By Aaron
            </span>
            </div>
            </nav>
        )
    }
}

export default Banner