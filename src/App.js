import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/searchBar';
import PostContainer from './components/PostContainer/postContainer'
import DummyData from './dummy-data'

class App extends React.Component {
  constructor() {
    super();
    this.state={
      dummydata: DummyData,
      thumbnailUrl: '',
      username: '', 
      likes: '', 
      timestamp: '',
      imageUrl: '',
      comments: [],
      likes: {},
      timestamp: '',
    };
    // console.log(dummydata);
  }


  render() {  
    return (
      <div className="App"> 
        <SearchBar />
        <PostContainer  
        post= {this.state.dummydata}
        thumbnailUrl = {this.state.thumbnailUrl}
        username = {this.state.username}
        imageUrl = {this.state.imageUrl}
        comments = {this.state.comments}
        likes = {this.state.likes}
        timestamp = {this.timestamp}
        />
      </div> 
    );
  }
} 

export default App;
