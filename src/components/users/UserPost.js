import React from 'react';
import './UserPost.css';
import Card from '../common/Card'; // Import the Card component

function UserPost({ post, onEdit, onDelete }) {
  return (
    <div className="user-post">
      <Card>
        <h3 className="post-title">{post.title}</h3>
        <p className="post-content">{post.content}</p>
        <div className="post-details">
          <p className="post-author">{post.author}</p>
          <p className="post-date">{post.date}</p>
        </div>
        <div className="post-interactions">
          <p className="post-likes">{post.likes} Likes</p>
          <p className="post-comments">{post.comments.length} Comments</p>
        </div>
        <div className="post-actions">
          <button className="edit-button" onClick={() => onEdit(post.id)}>Edit</button>
          <button className="delete-button" onClick={() => onDelete(post.id)}>Delete</button>
        </div>
      </Card>
    </div>
  );
}

export default UserPost;