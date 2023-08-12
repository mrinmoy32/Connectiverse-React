import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link className="logo-text" to="/">
          Connectiverse
        </Link>
      </div>
      <ul className="nav-links">   
        <li>
          <Link to="/user/post/newpost">New Post</Link>
        </li>
        <li>
          <Link to="/user/profile">My Profile</Link>
        </li>
        <li>
          <Link to="/user/editprofile">Edit Profile</Link>
        </li>
        
        {/* Add more navigation links */}
      </ul>
    </nav>
  );
}

export default Navbar;
