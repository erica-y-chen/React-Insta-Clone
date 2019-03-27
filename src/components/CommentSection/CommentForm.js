import React from 'react'
// import PropTypes from 'prop-types'
import './comment'

const newComment = props => {

    return(
        <div className="new-comment">
            <form onSubmit= {(e) => props.addNewComment(e)}>
                <input 
                    type = "text"
                    value = {props.newComment}

                    placeholder="Add a comment..."
                    onChange={(e) => props.commentText(e)}
                />
            </form>
        </div>
    )
}

export default newComment;