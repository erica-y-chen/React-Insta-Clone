import React from 'react';
// import PropTypes from 'prop-types'
import './postContainer.css';
import moment from 'moment';
import heartIcon from '../../img/heart_outline_thick.svg'
import commentIcon from '../../img/comment.svg'
import Comment from '../CommentSection/comment'


class postContainer extends React.Component {
    
    constructor(props) {
        super(props);

        this.state= {
            text: '',
            comments: [],
            posts: props.posts,
        }
    }

    handleChanges = (event, pid) => {
       console.log(event, pid); 
        this.setState({
          [event.target.name]: event.target.value,
          comments: event.target.value,
        });
      };
  
      newComment = (e, cid) =>{
          e.preventDefault();
          console.log(cid);
          console.log("new comment");
          // const newComment = {
          //   // id: (Math.random()), 
          //   text: this.state[cid], username: "eyufanchen"};
          // console.log(newComment);
          for (let i=0; i<this.state.posts.length; i++){
            if(cid==this.state.posts.id){

                this.setState({
                    comments: [...this.state.comments,e]
                })
            }
          }
            // if (event.key === 'Enter') {
            //   props.newComment
            // }
        
        };

    render() {
        const getTimeDifference = p => moment(p.timestamp, 'MMMM Do YYYY, HH:mm:ss A').fromNow()
    return (
        <div className="posts">
            {this.state.posts.map((post, pid) => (
                    <div className="post" key={`post-${pid}`}>
                        {/* header */}
                        <div className="header">
                            <img className="thumbnail" src={post.thumbnailUrl} />
                            <div className="username">{post.username}</div>
                        </div>
                
                        {/* post image */}
                        <img className="postImg" src={post.imageUrl} />

                        {/* post details */}
                         <div className="userButtons">
                            <img className="likeButton" src={heartIcon}></img>
                            <img className="commentButton" src={commentIcon}></img>
                        </div>
                        <div className="likes"><h2>{post.likes} likes </h2></div>
                        
                        {/* comment section */}
                        <div className = "details">
                            {post.comments.map((comment, id) =>(
                                <div className="comment" key={`comment-${id}`}>
                                    <h2>{comment.username} <span>{comment.text}</span></h2>
                             
                                </div>

                                
                            ))}
                        {/* time stamp (moment.js)*/}
                        <div className="time">{getTimeDifference(post)}</div>

                        {/* add a new comment */}
                        <Comment
                        id = {post.id}
                        comment = {this.state[post.id]}
                        handleChanges={this.handleChanges}
                        newComment={this.newComment}
                        />

                        </div>
                    </div>

                    ))}  
        </div>
        

    )
}
}

    // postContainer.propTypes = {
    //     post: PropTypes.arrayOf(
    //         PropTypes.shape({
    //             thumbnail: PropTypes.string,
    //             username: PropTypes.string, 
    //             postimg: PropTypes.string,
    //             comment: PropTypes.arrayOf(
    //                 PropTypes.shape({
    //                     username: PropTypes.string,
    //                     text: PropTypes.string,
    //                 })
    //             )

    //         })
    //     )
    // };


export default postContainer;



