import React from "react";
import "./UserPosts.css";
import UserPost from "./UserPost";
import Navbar from "../common/Navbar"

function UserPosts() {
  const posts = [
    // Array of post data
    // Each post should have a title, content, and any other necessary information
  ];

  return (
    <React.Fragment>
      <Navbar />
      <div className="user-posts-page">
        {/* Cover Photo */}
        <div className="cover-photo"></div>

        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-image"></div>
        </div>

        {/* User Info */}
        <div className="user-info">
          <h2>User's Name</h2>
          <p>Total Posts: {posts.length}</p>
        </div>

        {/* User Posts */}
        <div className="user-posts">
          {posts.map((post, index) => (
            <UserPost key={index} post={post} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default UserPosts;
