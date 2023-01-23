import React from 'react';

import { render, screen } from '@testing-library/react';

import Comment from './Comment';

test('should render Comment', () => {
  const comment = {
    id: 1,
    name: 'Test comment name',
  };

  render(<Comment id={comment.id} name={comment.name} />);

  const postElement = screen.getByTestId('comment-1');

  expect(postElement).toBeInTheDocument();
  expect(postElement).toHaveTextContent('Test comment name');
});
