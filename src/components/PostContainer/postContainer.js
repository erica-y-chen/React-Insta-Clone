import React from 'react';
import PropTypes from 'prop-types'
import './postContainer.css';
import moment from 'moment';
import heart from '../../img/heart_outline_thick.svg'
import comment from '../../img/comment.svg'

function postContainer (props) { 
    const getTimeDifference = p => moment(p.timestamp, 'MMMM Do YYYY, HH:mm:ss A').fromNow()

    return (
        <div className="posts">
            {props.post.map((post, pid) => (
                    <div className="post" key={`post-${pid}`}>
                        <div className="header">
                            <img className="thumbnail" src={post.thumbnailUrl} />
                            <div className="username">{post.username}</div>
                        </div>
                            <img className="postImg" src={post.imageUrl} />

                            <div className="userButtons">
                                <img className="likeButton" src={heart}></img>
                                <img className="commentButton" src={comment}></img>
                            </div>

                            <div className="likes"><h2>{post.likes} likes </h2></div>
                        <div className = "details">
                            {post.comments.map((comment, id) =>(
                                <div className="comment" key={`comment-${id}`}>
                                    <h2>{comment.username} <span>{comment.text}</span></h2>
            
                                </div>
                            ))}
                            <div className="time">{getTimeDifference(post)}</div>
                        </div>
                    </div>

                    ))}  
        </div>
        

    )
}

    postContainer.propTypes = {
        post: PropTypes.arrayOf(
            PropTypes.shape({
                thumbnail: PropTypes.string,
                username: PropTypes.string, 
                postimg: PropTypes.string,
                comment: PropTypes.arrayOf(
                    PropTypes.shape({
                        username: PropTypes.string,
                        text: PropTypes.string,
                    })
                )

            })
        )
    };


export default postContainer;



