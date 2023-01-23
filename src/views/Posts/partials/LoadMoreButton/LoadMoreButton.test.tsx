import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoadMoreButton from './LoadMoreButton';

describe('LoadMoreButton', () => {
  it('should render Load More Button with correct text and props', () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(<LoadMoreButton loading={false} visibility onClick={mockOnClick} />);
    const button = getByText('Load more');

    expect(button).toBeDefined();
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('should render Loading Button with correct text and props', () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(<LoadMoreButton loading visibility onClick={mockOnClick} />);
    const button = getByText('Loading...');

    expect(button).toBeDefined();
    expect(button).toHaveAttribute('disabled', '');
    fireEvent.click(button);
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it('should not render Button if visibility prop is false', () => {
    const { queryByText } = render(<LoadMoreButton loading={false} visibility={false} onClick={() => {}} />);

    expect(queryByText('Load more')).toBeNull();
  });
});
