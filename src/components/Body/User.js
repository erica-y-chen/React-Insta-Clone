import React from 'react';
// import PropTypes from 'prop-types'
import './Body.css';
import styled, {css} from 'styled-components'

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem 1rem;
`;

export const Thumbnail = styled.img`
    height: 30px;
    width: 30px;
    border-radius: 100px;
    margin-right: 5px;
`;

export const Username = styled.div`
    margin-left: 5px;
    font-size: 14px;
    font-weight: bold;
`;

const User = props => {
    return(
        <Header>
            <Thumbnail src={props.thumbnail}></Thumbnail>
            <Username>{props.username}</Username>
        </Header>
    )   
}




export default User;