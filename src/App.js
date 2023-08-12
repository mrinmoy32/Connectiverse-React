import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/common/Navbar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/Home';
import UserPosts from './components/users/UserPosts';
import UserPost from './components/users/UserPost';
import NotFound from './pages/NotFound';
import EditProfile from './components/users/EditProfile';
import NewPost from './components/users/NewPost';

function App() {
  return (
    <Router>
      <main>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/signup" Component={SignupPage} />
        <Route path="/home" Component={HomePage} />
        <Route path="/user/profile" Component={UserPosts} />
        <Route path="/user/editprofile" Component={EditProfile} />
        <Route path="/user/post/newpost" Component={NewPost} />
        <Route path="/user/post/:postId" Component={UserPost} />
        <Route Component={NotFound} />
      </Routes>
      </main>
    </Router>
  );
}

export default App;
