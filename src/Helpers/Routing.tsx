import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import NewBlog from '../Pages/NewBlog';
import Home from '../Pages/Home';
import YourBlogs from '../Pages/YourBlogs';
import Recommended from '../Pages/Recommended';
import Trending from '../Pages/Trending';
import Discover from '../Pages/Discover';
import Saved from '../Pages/Saved';
import YourProfile from '../Pages/YourProfile';
import Logout from '../Pages/Logout';
import ViewYourBlog from '../Pages/ViewYourBlog';
import ViewRecommended from '../Pages/ViewRecommended';
import ViewTrending from '../Pages/ViewTrending';
import ViewSaved from '../Pages/ViewSaved';
import ViewDiscover from '../Pages/ViewDiscover';

const Routing: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/react-ts-blog-app" element={<Home />} />
        <Route path="/newblog" element={<NewBlog />} />
        <Route path="/yourBlogs" element={<YourBlogs />} />
        <Route path="/recommended" element={<Recommended />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/yourProfile" element={<YourProfile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/viewYourBlog/:id" element={<ViewYourBlog />} />
        <Route path="/viewRecommended/:id" element={<ViewRecommended />} />
        <Route path="/viewTrending/:id" element={<ViewTrending />} />
        <Route path="/viewSaved/:id" element={<ViewSaved />} />
        <Route path="/viewDiscover/:id" element={<ViewDiscover />} />
      </Routes>
    </Router>
  );
};

export default Routing;
