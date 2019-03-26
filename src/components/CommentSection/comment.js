import React from 'react'
// import PropTypes from 'prop-types'
import './comment.css'

const comment = props => {
  console.log(props)
  return (
    <div className="new-comment">
      <form onSubmit= {(e) => props.newComment(e, props.id)}>
        <input
          type = "text"
          value = {props.comment}
          // username = "eyufanchen"
          name="newComment"
          placeholder= "Add a comment..."
          onChange={props.handleChanges}
          />
          {/* onKeyPress= {props.newComment} */}
      </form>
    </div>
  )
}

comment.propTypes = {

}

export default comment;


// import React from 'react';

// const CommentInput = props => {
//   return (
//     <form onSubmit={props.submitComment}>
//       <input
//         type="text"
//         value={props.comment}
//         placeholder="Add comment... "
//         onChange={props.changeComment}
//       />
//     </form>
//   );
// };

// export default CommentInput;
