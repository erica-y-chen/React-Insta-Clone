import React from 'react';
import PropTypes from 'prop-types';
import Comment from './comment';

class commentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comment,
            comment: ''
        };

    }

    handleChanges = event => {
        this.setState({
          comment: event.target.value,
        });
      };
  
  
      newComment = e =>{
          e.preventDefault();
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
    }

        render() {
            return (
              <div>
                <Comment
                  comment={this.state.comment}
                  submitComment={this.handleCommentSubmit}
                  changeComment={this.commentHandler}
                />
              </div>
            );
          }
        }
        