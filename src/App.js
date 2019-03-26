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

    handleChanges = event => {
      this.setState({
        comments: event.target.value,
      });
    };


  // handleCommentSubmit = e => {
  //   e.preventDefault();
  //   const newComment = { text: this.state.comment, username: 'ryanhamblin' };
  //   const comments = this.state.comments.slice();
  //   comments.push(newComment);
  //   this.setState({ comments, comment: '' });
  //   setTimeout(() => {
  //     this.setComments();
  //   }, 500);
  // };

    newComment = (e, id) =>{
        e.preventDefault();
        console.log(id);
        console.log("new comment");
        const newComment = {
          // id: (Math.random()), 
          text: this.state.comment, username: "eyufanchen"};
        console.log(newComment);
        
        this.setState({
          comments: [...this.state.comments, newComment]
        });
          // if (event.key === 'Enter') {
          //   props.newComment
          // }
      
      };

  render() {  
    const inputField=this.state.toggled;
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
        post= {this.state.dummydata}
        comments={this.state.comments}
          handleChanges= {this.handleChanges}
          newComment= {this.newComment}
        
        />
      </div> 
    );
  }
} 

export default App;
