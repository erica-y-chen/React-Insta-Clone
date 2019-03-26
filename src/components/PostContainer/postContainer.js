import React from 'react';
// import PropTypes from 'prop-types'
import './postContainer.css';
import moment from 'moment';
import heartIcon from '../../img/heart_outline_thick.svg'
import commentIcon from '../../img/comment.svg'
import Comment from '../CommentSection/comment'


function postContainer (props) { 
    const getTimeDifference = p => moment(p.timestamp, 'MMMM Do YYYY, HH:mm:ss A').fromNow()
    return (
        <div className="posts">
            {props.post.map((post, pid) => (
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
                        comment={props.comments}
                        id = {post.id}
                        handleChanges={props.handleChanges}
                        newComment={props.newComment}
                        />

                        </div>
                    </div>

                    ))}  
        </div>
        

    )
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



