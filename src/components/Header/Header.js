import React from 'react';
import './Header.css';
import Logo from './logo.png'
import heart from '../../img/heart_outline_thin.svg'
import person from '../../img/people.svg'
import SearchBar from './SearchBar'
import styled, {css} from 'styled-components'

export const Img = styled.img`
    height: 30px;
    width: 30px;
`;

export const Search = styled.div`
    background-color: white;
    border: 1 solid rgb(122, 122, 122);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 600px;
    height: 70px;
    align-items: center;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    position: sticky;
    top: 0;
`;

class Header extends React.Component{ 

    render() {
        return (
            <Search>
                <Img src={Logo}></Img>
                <SearchBar />
                <div className="logos">
                    <Img src={heart}></Img>
                    <Img src={person}></Img>
                </div>
            </Search>

            )
    }
}


export default Header;