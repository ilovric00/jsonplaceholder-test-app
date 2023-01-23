import React from 'react';

import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';

import Home from './Home';

describe('Home', () => {
  it('renders a logo', () => {
    render(
      <HashRouter>
        <Home />
      </HashRouter>
    );
    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });

  it('renders the heading', () => {
    render(
      <HashRouter>
        <Home />
      </HashRouter>
    );
    expect(screen.getByText('React Test Assignement')).toBeInTheDocument();
  });

  it('renders the link', () => {
    render(
      <HashRouter>
        <Home />
      </HashRouter>
    );
    expect(screen.getByTestId('link')).toBeInTheDocument();
  });

  it('has the correct link', () => {
    render(
      <HashRouter>
        <Home />
      </HashRouter>
    );
    expect(screen.getByTestId('link').getAttribute('href')).toBe('#/posts');
  });
});
