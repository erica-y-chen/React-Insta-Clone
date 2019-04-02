import React from 'react'
import './LoginPage.css'

const LoginForm = props => {
    return (
        <div className="formBackground">
            <form>
                <input className="text"
                    name= {props.placeholder}
                    type = {props.Type}
                    value = {props.LoginForm}
                    placeholder= {props.placeholder}
                    onChange = {(e) => props.inputText(e)}
                />
            </form>
        </div>
    )
}


export default LoginForm;