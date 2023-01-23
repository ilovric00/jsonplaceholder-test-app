import React from 'react';
import withLogger from 'utils/hoc/withLogger';

import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';

import Header from './Header';

describe('Header', () => {
  it('should render the Header component', () => {
    const WrappedHeader = withLogger(Header);

    render(
      <HashRouter>
        <WrappedHeader />
      </HashRouter>
    );

    expect(screen.getByText(/JSONPlaceholder App/)).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
