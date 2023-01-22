import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders go to task link', () => {
  render(<Home />);

  const linkElement = screen.getByText(/go to task/i);

  expect(linkElement).toBeInTheDocument();
});
