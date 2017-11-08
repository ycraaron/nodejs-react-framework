// beginning of my react code

// es5
// var React = require('react')

// es6
// I like imports, just like python, embrace es6
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'

// class App extends Component {
//     render(){
//         return (
//             <div> 
//                 <ZoneContainer />
//             </div>
//         )
//     }
// }

class App extends Component {
    render(){
        return (
            <div>
                <Home />
            </div>
        )
    }
}

// Only 1 time here
// ReactDom only interfaces the entry point
ReactDOM.render(<App />, document.getElementById('root'))

