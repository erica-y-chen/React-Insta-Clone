import React from 'react';
import './searchBar.css';
import Logo from './logo.png'
import heart from '../../img/heart_outline_thin.svg'
import person from '../../img/people.svg'
import search from '../../img/search.png'


const searchBar = () => { 
    return (
        <div className="search">
            <img src={Logo}></img>
            <div className="bar"><img className = "searching" src={search}></img>Search</div>
            <div className="logos">
                <img src={heart}></img>
                <img src={person}></img>
            </div>

    
        </div>

    );
}


export default searchBar;