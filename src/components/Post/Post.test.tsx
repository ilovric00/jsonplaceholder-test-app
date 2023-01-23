import React from 'react';

import { render, screen } from '@testing-library/react';

import Post from './Post';

test('should render Post', () => {
  const post = {
    userId: 1,
    id: 1,
    title: 'Test title',
    body: 'Test body',
  };

  render(<Post post={post} />);

  const postElement = screen.getByTestId('post-1');

  expect(postElement).toBeInTheDocument();
  expect(postElement).toHaveTextContent('Test title');
});
