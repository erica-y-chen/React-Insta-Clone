import React from 'react';
import './Header.css';
import search from '../../img/search.png'

const SearchBar = props => {
    return (
        <div className="bar"><img className = "searching" src={search}></img>Search</div>
    )
}

export default SearchBar;