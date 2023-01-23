import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  it('renders passed children', () => {
    const { getByText } = render(<Button>Submit</Button>);

    expect(getByText('Submit')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Submit</Button>);

    fireEvent.click(getByText('Submit'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('has correct class name when size is small', () => {
    const { container } = render(<Button size="small">Submit</Button>);

    expect(container.firstChild).toHaveClass('button small');
  });

  it('has correct class name when size is medium', () => {
    const { container } = render(<Button size="medium">Submit</Button>);

    expect(container.firstChild).toHaveClass('button medium');
  });

  it('has correct class name when size is large', () => {
    const { container } = render(<Button size="large">Submit</Button>);

    expect(container.firstChild).toHaveClass('button large');
  });

  it('has correct class name when size is extra-large', () => {
    const { container } = render(<Button size="extra-large">Submit</Button>);

    expect(container.firstChild).toHaveClass('button extra-large');
  });

  it('has correct class name when fullWidth is true', () => {
    const { container } = render(<Button fullWidth>Submit</Button>);

    expect(container.firstChild).toHaveClass('button fullWidth');
  });

  it('passes props to the underlying button element', () => {
    const { container } = render(<Button disabled>Submit</Button>);

    expect(container.firstChild).toHaveAttribute('disabled');
  });
});
