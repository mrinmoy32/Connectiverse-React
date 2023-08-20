import React, { useState } from 'react';
import './EditProfile.css';
import Navbar from '../common/Navbar';

function EditProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Other state variables for profile and cover photos

  const handleSave = () => {
    // Implement save functionality here
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="edit-profile-page">
      <h2 className='editProfile-header'>Edit Profile</h2>
      <div className="edit-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* Add input fields for profile and cover photos */}
        <button className="save-button" onClick={handleSave}>
          Save Changes
        </button>
      </div>
    </div>
    </React.Fragment>
  );
}

export default EditProfile;
