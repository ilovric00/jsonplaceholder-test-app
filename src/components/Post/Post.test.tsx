import React from 'react';

import { render, screen } from '@testing-library/react';

import Post from './Post';

test('should render Post', () => {
  const mockPostData = {
    userId: 1,
    id: 1,
    title: 'Test title',
    body: 'Test body',
  };

  render(<Post post={mockPostData} />);

  const postElement = screen.getByTestId('post');

  expect(postElement).toBeInTheDocument();
  expect(postElement).toHaveTextContent('Test title');
});
