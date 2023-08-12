import React, { useState } from 'react';
import Navbar from '../common/Navbar';
import './NewPost.css';

function NewPost() {
  const [postText, setPostText] = useState('');
  const [postImage, setPostImage] = useState(null);

  const handlePost = () => {
    // Implement post functionality here
  };

  return (
    <React.Fragment>
        <Navbar />
        <div className="new-post-page">
      <h2>Create a New Post</h2>
      <div className="post-form">
        <textarea
          placeholder="What's on your mind?"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPostImage(e.target.files[0])}
        />
        <button className="post-button" onClick={handlePost}>
          Post
        </button>
      </div>
    </div>
    </React.Fragment>
  );
}

export default NewPost;
