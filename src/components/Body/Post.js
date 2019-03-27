import React from 'react';
// import PropTypes from 'prop-types'
import './Body.css';
import Comment from '../CommentSection/comment'
import CommentForm from '../CommentSection/CommentForm'
import heartIcon from '../../img/heart_outline_thick.svg'
import commentIcon from '../../img/comment.svg'
// import User from './User'
import moment from 'moment';


class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imageUrl: props.imageUrl,
            likes: props.likes,
            comments: props.comments, 
            newComment: '',
            timestamp: props.timestamp,
        }
    }

    //method tracking user input in new comment field
    commentText = (e) => {
        this.setState({
            newComment: e.target.value,
        })
    }

    //method adding the new user created comment to the comment array
    addNewComment = (e) => {
        e.preventDefault();
        const postNew = {
            text: this.state.newComment, username: "eyufanchen"
        };
        this.setState({
            comments: [...this.state.comments, postNew],
            newComment: '',
        })

    }

    render () {
        const getTimeDifference = p => moment(p, 'MMMM Do YYYY, HH:mm:ss A').fromNow()

        return(
            <div className = "post">
                    {/* <User /> */}
                    <img className ="postImg" src={this.state.imageUrl} />
                    
                {/* POST DETAILS */}
                    <div className="userButtons">
                        <img className="likeButton" src={heartIcon}></img>
                        <img className="commentButton" src={commentIcon}></img>
                    </div>
                    <div className="likes"><h2>{this.state.likes} likes</h2></div>

                {/* COMMENT SECTION */}
                    <div className="comment">
                        {this.state.comments.map(c => 
                            <Comment 
                                text = {c.text}
                                username = {c.username}
                            />
                            )}
                    </div>

                 {/* TIME STAMP */}   
                    <div className="time">{getTimeDifference(this.state.timestamp)}</div>

                 {/* COMMENT FORM */}  
                    <CommentForm 
                        newComment = {this.state.newComment}
                        addNewComment = {this.addNewComment}
                        commentText = {this.commentText}    
                    />

          
        </div>
        )
    }
}


export default Post;
