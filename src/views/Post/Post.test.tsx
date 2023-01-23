import React from 'react';
import JSONPlaceholderService from 'services/JSONPlaceholderService';

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Post from './Post';

jest.mock('services/JSONPlaceholderService');

describe('Post', () => {
  it('should fetch and display post data', async () => {
    const mockPostData = {
      userId: 1,
      id: 1,
      title: 'Test Post',
      body: 'This is a test post',
    };

    (JSONPlaceholderService.getSinglePost as jest.Mock).mockResolvedValueOnce(mockPostData);

    render(
      <MemoryRouter initialEntries={['/post/1']}>
        <Post />
      </MemoryRouter>
    );

    await screen.findByTestId('post-title');
    expect(screen.getByTestId('post-title')).toHaveTextContent('Test Post');
    expect(screen.getByTestId('post-body')).toHaveTextContent('This is a test post');
  });
});
