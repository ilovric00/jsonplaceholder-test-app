import React from 'react';

import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';

import Layout from './Layout';

describe('Layout', () => {
  it('should render without errors', () => {
    render(
      <HashRouter>
        <Layout />
      </HashRouter>
    );
    expect(screen.getByTestId('layout')).toBeInTheDocument();
  });

  it('should have a header', () => {
    render(
      <HashRouter>
        <Layout />
      </HashRouter>
    );
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('should render the body component', () => {
    render(
      <HashRouter>
        <Layout>
          <div data-testid="body">Body component</div>
        </Layout>
      </HashRouter>
    );
    expect(screen.getByTestId('body')).toBeInTheDocument();
  });
});
