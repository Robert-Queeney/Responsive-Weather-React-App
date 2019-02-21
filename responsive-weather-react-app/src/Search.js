import React, { Component } from 'react'; 
// import * as apiCalls from './Api';


const fetchURL = 'http://localhost:3001/weather'
// const corsUrl = 'https://cors-anywhere.herokuapp.com/'

class Search extends Component {
    constructor(props){
        super(props); 
        this.state = {
            weather: []
        }
    }

    

    // This will make the initial API call and display default informaiton on screen
    componentWillMount(){
        return fetch(`${fetchURL}`)
        .then(response => console.log(response, "THIS")) 
        .then(data => this.setState({ weather: data}))
        .catch(err => console.log(err))

    }

    render(){
        return(
            <div className="search">This is where the search will happen</div>
            
        )
    }
}

export default Search; 