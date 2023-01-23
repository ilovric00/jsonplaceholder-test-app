import React from 'react';

import { render, screen } from '@testing-library/react';

import UserFullName from './UserFullName';

test('should render UserFullName', () => {
  const userId = 1;

  render(<UserFullName userId={userId} />);

  const userFullNameElement = screen.getByTestId('userFullName-1');

  expect(userFullNameElement).toBeInTheDocument();
  expect(userFullNameElement).toContainHTML(
    '<span class="typography label1 container" data-testid="userFullName-1" />'
  );
});
