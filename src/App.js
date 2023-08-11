import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/Home';
import UserPosts from './pages/UserPosts';
import UserPost from './pages/UserPost';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      {false && <Navbar />}
      <main>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/home" Component={HomePage} />
        <Route path="/user/posts" Component={UserPosts} />
        <Route path="/user/post/:postId" Component={UserPost} />
        <Route Component={NotFound} />
      </Routes>
      </main>
    </Router>
  );
}

export default App;
