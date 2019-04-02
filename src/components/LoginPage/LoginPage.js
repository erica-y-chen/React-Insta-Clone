import React from 'react'
import './LoginPage.css'
import Logo from '../../img/instagramLogo.svg'
import LoginForm from './LoginForm'
import Submit from './Submit'

class LoginPage extends React.Component {

    render() {
        console.log(this.props);
        return(
            <div className = "loginPage">
                <div className = "loginContainer">
                    <img className="instaLogo" src={Logo}></img>

                    {/*Username*/}
                    <LoginForm 
                        Type = "text"
                        
                        inputText = {this.props.inputText}
                        placeholder = "username"
                    />

                    {/*Password*/}
                    <LoginForm 
                        Type = "password"
                        
                        inputText = {this.props.inputText}
                        placeholder = "password"
                    />
                    
                    {/*Submit Button*/}
                    <Submit 
                        login={this.props.login}
                    />

                    <div className = "appText">download the app</div>
                </div>
            </div>
        )
    }
}

export default LoginPage; 



// Build out the LoginPage component. You can design it how you like

// In your components directory, create a directory called Login and add a new file called Login.js.
// There should be a username input, a password input, and a Login button.
// The component should invoke the login function in Login.js when a user logs in.
// This login function should set a username on localStorage. You'll need to check local storage to see if a user is logged in.
// Be sure to force the page to reload when a user logs in so that our component un-mounts and mounts again.