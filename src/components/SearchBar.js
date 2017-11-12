import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(){
        super()
        this.state = {

        }
    }
    
    searchFilm(){
        alert("I want to search")
        
    }

    autoComplete(event){
        console.log('update content: ' + event.target.value)
    }

    render(){
        return(
            <div>
                <br/>
                <br/>
                <input 
                    onChange={this.autoComplete.bind(this)}
                    className = "form-control" 
                    type = "test" 
                    placeholder="Film name"/>
                <br/>
                <button 
                    onClick={this.searchFilm.bind(this)} 
                    className="btn btn-info"> Search </button>
            </div>
        )
    }
}

export default SearchBar