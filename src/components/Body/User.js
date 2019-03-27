import React from 'react';
// import PropTypes from 'prop-types'
import './Body.css';


const User = props => {
    return(
        <div className ="header">
            <img className="thumbnail" src={props.thumbnail}></img>
            <div className="username">{props.username}</div>
        </div>
    )   
}




export default User;