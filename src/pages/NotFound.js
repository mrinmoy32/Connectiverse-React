import React from 'react';
import './NotFound.css';
import catImage from './cat-vector.png';

function NotFound() {
  return (
    <div className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <div className="cat-animation">
        <img src={catImage} alt="Cute Cat" />
      </div>
    </div>
  );
}

export default NotFound;
