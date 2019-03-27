import React from 'react';
import './Header.css';
import Logo from './logo.png'
import heart from '../../img/heart_outline_thin.svg'
import person from '../../img/people.svg'
import SearchBar from './SearchBar'


class Header extends React.Component{ 
    constructor() {
        super()

    }



    render() {
        return (
            <div className="search">
                <img src={Logo}></img>
                <SearchBar />
                <div className="logos">
                    <img src={heart}></img>
                    <img src={person}></img>
                </div>
            </div>

            )
    }
}


export default Header;