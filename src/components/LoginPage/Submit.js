import React from 'react'
import './LoginPage.css'

const Submit = props => {
    return(
        <div onClick = {props.login} className="submit"><div className="submitText">submit</div></div>
    )
}

export default Submit; 