import React from 'react';
import { render, screen } from '@testing-library/react';
import LayoutWithHeader from '../LayoutWithHeader.component';

describe('Layout Component', () => {
  test('display children properly', () => {
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
    render(
      <LayoutWithHeader>
        <p>children stub</p>
      </LayoutWithHeader>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
