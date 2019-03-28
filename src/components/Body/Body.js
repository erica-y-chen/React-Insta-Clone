import React from 'react';
// import PropTypes from 'prop-types'
import './Body.css';
import Post from './Post.js'
import moment from 'moment';


class Body extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                posts: props.posts,
            }
        }


        render() {
            return (
                <div className = "posts">
                    {this.state.posts.map(p => 
                        <Post 
                            likes = {p.likes}
                            imageUrl= {p.imageUrl}
                            comments = {p.comments}
                            key = {p.id}
                            timestamp = {p.timestamp}
                            thumbnail = {p.thumbnailUrl}
                            username = {p.username}
                        />  
                        )} 
                     
                 
                </div>
            )
        }
}



export default Body;
