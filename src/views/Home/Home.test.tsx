import React from 'react';

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Home from './Home';

test('renders go to task link', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  const linkElement = screen.getByText(/go to task/i);

  expect(linkElement).toBeInTheDocument();
});
