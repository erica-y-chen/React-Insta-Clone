import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/searchBar';
import PostContainer from './components/PostContainer/postContainer'
import DummyData from './dummy-data'
import Comment from './components/CommentSection/comment'
class App extends React.Component {
  constructor() {
    super();
    this.state={
      dummydata: DummyData,
      a: '',
      b: '',
      c: '',
    };
    // console.log(dummydata);
  }


      

  render() {  
    // console.log(inputField);
    // let formComponent;

    // if(inputField){
    //   formComponent=
    //     <Comment
    //       comment={this.state.comment}
    //       handleChanges={this.handleChanges}
    //       newComment={this.newComment}
    //     />
    // } else{
    //   formComponent=null;
    // }

    
    return (
      <div className="App"> 
        <SearchBar />
        <PostContainer  
        posts= {this.state.dummydata}
        />
      </div> 
    );
  }
} 

export default App;
