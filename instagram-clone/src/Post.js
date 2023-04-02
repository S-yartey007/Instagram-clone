import React from 'react'
import './Post.css';
import { Avatar } from '@mui/material';

function Post({username, caption , imageUrl}) {
  return (
    <div className='post'>
        <div className='post__header'>
        <Avatar
        className='post__avatar'
        alt = "Emmanuel"
        src = "/static/images/avatar/1.png"
        /> 
        <h3>Username</h3>
        </div>

        <img className='post__image' src= {imageUrl} alt='avatar'></img>
        <h3 className='post__text'><strong>{username} </strong> {caption} </h3>
    </div>
  )
}

export default Post