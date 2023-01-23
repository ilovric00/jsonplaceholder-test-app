import React from 'react';
import withLogger from 'utils/hoc/withLogger';

import { render, fireEvent, screen } from '@testing-library/react';

import SearchInput from './SearchInput';

describe('SearchInput', () => {
  it('should render correctly', () => {
    const onChange = jest.fn();

    render(<SearchInput searchInput="" onChange={onChange} />);
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('should call onChange correctly', () => {
    const onChange = jest.fn();

    render(<SearchInput searchInput="" onChange={onChange} />);
    fireEvent.change(screen.getByPlaceholderText('Search...'), { target: { value: 'test' } });
    expect(onChange).toHaveBeenCalled();
  });

  it('should render withLogger correctly', () => {
    const WrappedSearchInput = withLogger(SearchInput);

    render(<WrappedSearchInput searchInput="" onChange={jest.fn()} />);
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });
});
