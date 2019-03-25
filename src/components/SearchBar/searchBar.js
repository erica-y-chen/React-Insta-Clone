import React from 'react';
import './searchBar.css';
import Logo from './logo.png'


const searchBar = () => { 
    return (
        <div className="search">
            <img src={Logo}></img>
            <div className="bar">Search</div>
            <div className="icons">hi</div>
    
        </div>

    );
}


export default searchBar;