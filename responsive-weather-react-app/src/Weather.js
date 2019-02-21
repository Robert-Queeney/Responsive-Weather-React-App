import React, { Component } from 'react'; 
import Search from './Search';
import Header from './Header'; 

class Weather extends Component {
    render(){
        return(
            <div className="weather-div">
                <Header />  
                <Search />
            </div>
        )
    }
}

export default Weather; 