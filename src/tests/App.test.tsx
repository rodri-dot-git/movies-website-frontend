import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../views/Header';

test('renders title and subtitle', () => {
  render(<Header />);
  const title = screen.getByText('🎥 Movies & TV Shows');
  const subtitle = screen.getByText('by: Rodrigo de León');
  expect(title).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();
});
