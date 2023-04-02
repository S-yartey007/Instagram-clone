
import React , { useState,useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db } from './firebase';

function App() {
  const[posts,setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post:doc.data()})
        ))});

  },[])
 
  return (
    
    <div className="App">
    
      <div className='app__header'>
        <img className='app__headerImage' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
        alt='instagram__logo'></img>
      </div>
      <h1>Hello there this is my Instagram Page</h1>
      {
        posts.map(({id,post}) => <Post key = {id} username={post.username} caption ={post.caption} imageUrl= {post.imageUrl}/>
        )
      }
     
    </div>
  );
}

export default App;
