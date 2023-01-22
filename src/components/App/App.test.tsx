import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders go to task link', () => {
  render(<App />);

  const linkElement = screen.getByText(/go to task/i);

  expect(linkElement).toBeInTheDocument();
});
