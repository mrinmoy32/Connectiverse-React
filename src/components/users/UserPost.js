import React from 'react';
import './UserPost.css';
import Card from '../common/Card'; // Import the Card component

function UserPost({ post }) {
  return (
    <div className="user-post">
      <Card>
        <h3 className="post-title">{post.title}</h3>
        <p className="post-content">{post.content}</p>
      </Card>
    </div>
  );
}

export default UserPost;
