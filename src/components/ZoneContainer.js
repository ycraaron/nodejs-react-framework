import React, { Component } from 'react'
import Zone from './Zone'

// container component
// higher order component

// JSX: every tag must be closed
class ZoneContainer extends Component {
    render(){
        return (
            <div>
                <ol>
                    <li><Zone /></li>
                    <li><Zone /></li>
                    <li><Zone /></li>
                </ol>
            </div>
        )
    }
}

export default ZoneContainer