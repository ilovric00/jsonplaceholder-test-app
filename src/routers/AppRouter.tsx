import React from 'react';
import Home from 'views/Home';
import Posts from 'views/Posts';
import Post from 'views/Post';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
