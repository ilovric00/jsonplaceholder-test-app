import React from 'react';
import Home from 'views/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
