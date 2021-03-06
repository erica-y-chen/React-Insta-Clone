import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body'
import DummyData from './dummy-data'

class PostContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     username: props.username,
  //   }
  // }

  // Method filtering through data array and returning array of just usernames
  getUsernames = data => {
    let usernames= []; 
    {data.map((object) => {
      usernames.push(object.username)
    })}

    console.log(usernames)
    return usernames;
    
  }

  render() {   
    this.getUsernames(DummyData) 

    return (
      <div className="App"> 
        {/* Header containing search bar, logo, and icons --> passing in filtered array of usernames */}
        <Header 
        usernames={this.getUsernames(DummyData)}
        />

        {/* containing search bar, logo, and icons --> passing in filtered array of usernames */}
        <Body 
        posts = {DummyData}
       
        />
      </div> 
    )
  }
}

export default PostContainer;