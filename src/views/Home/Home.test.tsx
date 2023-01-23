import React from 'react';

import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';

import Home from './Home';

test('should render link to task', () => {
  render(
    <HashRouter>
      <Home />
    </HashRouter>
  );

  const linkElement = screen.getByTestId('link');

  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveTextContent('Go to task');
});
