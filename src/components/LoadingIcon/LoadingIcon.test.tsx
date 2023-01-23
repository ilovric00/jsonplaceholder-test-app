import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingIcon from './LoadingIcon';

describe('LoadingIcon', () => {
  it('should render the loading icon', () => {
    render(<LoadingIcon />);

    const loadingIcon = screen.getByTestId('loading-icon');

    expect(loadingIcon).toBeInTheDocument();
  });

  it('should render with a custom className', () => {
    const className = 'testClassName';

    render(<LoadingIcon className={className} />);

    const loadingIcon = screen.getByTestId('loading-icon');

    expect(loadingIcon).toHaveClass(className);
  });
});
