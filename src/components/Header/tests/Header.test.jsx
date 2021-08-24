import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header.component';

describe('Header Component', () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
  test('display menu correctly', () => {
    render(<Header />);

    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  test('display avatar correctly', () => {
    render(<Header />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
