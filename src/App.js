import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body'
import DummyData from './dummy-data'
import PostContainer from './PostContainer'
import withAuthentication from './components/authentication/withAuthentication'
import LoginPage from './components/LoginPage/LoginPage'

// import Comment from './components/CommentSection/comment'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
    }
  }



  render() {   
  

    return (
      <div className="App"> 
        <ComponentFromWithAuthenticate/>
      </div> 
    )
  }
}
 
const ComponentFromWithAuthenticate = withAuthentication(PostContainer)(LoginPage);

export default App;





// Inside of the class component that the inner function in withAuthenticate returns, we need to add a constructor to hold our state data.
// On state we need a loggedIn boolean flag.
// In componentDidMount we need to check localStorage to see if a user is logged in, and setState accordingly.
// Inside of the render function we will check if a user is logged in from the state boolean flag
// If a user is logged in we will return the <PostsPage />, else we will return the <LoginPage>