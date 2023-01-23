import React from 'react';

import { render } from '@testing-library/react';

import Typography from './Typography';

describe('Typography', () => {
  it('should render the text with the correct variant', () => {
    const { getByText } = render(<Typography variant="h1">Heading 1</Typography>);
    const heading = getByText('Heading 1');

    expect(heading).toHaveClass('typography h1');
  });

  it('should render the text with the correct component', () => {
    const { getByText } = render(<Typography component="h1">Heading 1</Typography>);
    const heading = getByText('Heading 1');

    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
  });
});
