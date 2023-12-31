import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import UserProfile from './components/users/UserProfile';
import UserPost from './components/users/UserPost';
import EditProfile from './components/users/EditProfile';
import NewPost from './components/users/NewPost';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <main>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/signup" Component={SignupPage} />
        <Route path="/user/profile/" Component={UserProfile} />
        <Route path="/user/editprofile" Component={EditProfile} />
        <Route path="/user/post/newpost" Component={NewPost} />
        <Route path="/user/post/:postId" Component={UserPost} />
        <Route path= "/*" Component={NotFound} />
      </Routes>
      </main>
    </Router>
  );
}

export default App;
