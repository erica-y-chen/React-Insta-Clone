import React, { Component } from 'react';


const withAuthentication = PostContainer => LoginPage => 
class extends React.Component { 
    constructor(){
        super()
        this.state = {
            isLoggedIn: false,
            username: '',
        }
    }

    inputText = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };


    login = event => {
        console.log("submit button clicked");
        this.setState({
            isLoggedIn: true, 
        })
        localStorage.setItem("username", this.state.username)
        localStorage.setItem("isLoggedIn", !this.state.isLoggedIn)
        console.log(this.state.isLoggedIn);
        const test = localStorage.getItem("username")
        console.log(test)
    }


    render() {       
        if (localStorage.getItem('isLoggedIn')) {
        return <PostContainer 
            // username = {this.username}
            />
        } else {
            return <LoginPage 
            login = {this.login}
            username = {this.state.username}
            inputText = {this.inputText}/>
        }
    }
}

export default withAuthentication;
