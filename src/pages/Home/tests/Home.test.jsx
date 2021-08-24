import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home.page';

const mockValue = {
  logout: jest.fn(),
};

jest.mock('../../../providers/Auth', () => ({
  useAuth: () => mockValue,
}));

describe('Login Component', () => {
  test('should logout function be called on logout click', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByTestId('logout'));

    expect(mockValue.logout).toHaveBeenCalled();
  });

  test('should render video items', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(
      screen.getByText('Wizeline transforms how', { exact: false })
    ).toBeInTheDocument();
  });
});
