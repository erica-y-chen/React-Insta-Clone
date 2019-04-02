import React from 'react'
// import PropTypes from 'prop-types'
import './comment.css'

const comment = props => {

    return(
      <div className="comment">
        <h2>{props.username} <span>{props.text}</span></h2>
      </div>
    )
}

export default comment;

