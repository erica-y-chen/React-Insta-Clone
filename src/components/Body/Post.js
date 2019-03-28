import React from 'react';
// import PropTypes from 'prop-types'
import './Body.css';
import Comment from '../CommentSection/comment'
import CommentForm from '../CommentSection/CommentForm'
import heartIcon from '../../img/heart_outline_thick.svg'
import redHeart from '../../img/red_heart.svg'
import commentIcon from '../../img/comment.svg'
import User from './User'
import moment from 'moment';
import styled, {css} from 'styled-components'

export const PostSingle = styled.div`
    max-width: 600px;
    background-color: white;
    margin: 0 auto;
    margin-bottom: 20px;
    border: 1px solid rgb(223, 223, 223);
    border-radius: 3px;
    box-shadow: 0 0 30px rgb(233, 233, 233);
`

export const PostImg = styled.img`
    width: 100%;
    height: auto;
`
class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imageUrl: props.imageUrl,
            likes: props.likes,
            comments: props.comments, 
            newComment: '',
            timestamp: props.timestamp,
            toggled: false,
            liked: false,
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
            text: this.state.newComment, username: (localStorage.getItem("username"))
        };
        this.setState({
            comments: [...this.state.comments, postNew],
            newComment: '',
        })

    }

    //method increasing likes when user presses heart icon
    increaseLikes = (e) => {
        e.preventDefault();
        const liked=!this.state.liked; 

        if(liked){
            this.setState({
                likes: this.state.likes + 1,
                liked: !this.state.liked,
                
            })
        } else{
            this.setState({
                likes: this.state.likes -1, 
                liked: !this.state.liked,
            })
        }
    }

    //method setting the toggle state on comment to show it on or off 
    addComment = () => {
        this.setState({
            toggled: !this.state.toggled
        })

        console.log(this.state.toggled)
    }


    render () {
        {/* MOMENT.JS */}
        const getTimeDifference = p => moment(p, 'MMMM Do YYYY, HH:mm:ss A').fromNow()

        {/* TOGGLING COMMENT VISIBLE AND INVISIBLE */}
        const inputComment = this.state.toggled; 
        let form; 
        if(inputComment){
            form=
            <CommentForm 
            newComment = {this.state.newComment}
            addNewComment = {this.addNewComment}
            commentText = {this.commentText}    
            />
        } else{
            form=null;
        }

        return(
            <PostSingle>
                    <User 
                        thumbnail = {this.props.thumbnail}
                        username = {this.props.username}
                    />
                    <PostImg className ="postImg" src={this.state.imageUrl} />
                    
                {/* POST DETAILS */}
                    <div className="userButtons">
                        {/* using a ternary function to toggle the src of the heart */}
                        <img className="likeButton" src={!this.state.liked ? heartIcon : redHeart} onClick={this.increaseLikes}></img>
                        <img className="commentButton" src={commentIcon} onClick={this.addComment}></img>
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
                    {form}

          
        </PostSingle>
        )
    }
}


export default Post;
