import React from 'react';
import './postContainer.css';
// import moment from 'moment';

function postContainer (props) { 

    return (
        <div className="posts">
            {props.post.map(post=> (
                    <div className="post">
                        <div className="header">
                            <img className="thumbnail" src={post.thumbnailUrl} />
                            <h2>{post.username}</h2>
                        </div>
                            <img className="postImg" src={post.imageUrl} />
                            <div className="likes"><h2>{post.likes} likes </h2></div>
                        <div className = "details">
                            {post.comments.map(comment=>(
                                <div className="comment">
                                    <h2>{comment.username} <span>{comment.text}</span></h2>
            
                                </div>
                            ))}
                            {/* <h2>{moment(post.timestamp).format('dddd MMM D, YYYY')}</h2> */}
                        </div>
                    </div>

                    ))}
        </div>
        

    )
}

export default postContainer;



