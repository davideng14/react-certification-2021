import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../Login.page';

const mockValue = {
  login: jest.fn(),
};

const mockHistory = {
  push: jest.fn(),
};

jest.mock('react-router', () => ({
  useHistory: () => mockHistory,
}));

jest.mock('../../../providers/Auth', () => ({
  useAuth: () => mockValue,
}));

describe('Login Component', () => {
  test('should login function be called on submit event', () => {
    render(<Login />);

    fireEvent.submit(screen.getByTestId('login-form'));

    expect(mockValue.login).toHaveBeenCalled();
  });

  test('should redirect on submit event', () => {
    render(<Login />);

    fireEvent.submit(screen.getByTestId('login-form'));

    expect(mockHistory.push).toHaveBeenCalledWith('/');
  });
});
