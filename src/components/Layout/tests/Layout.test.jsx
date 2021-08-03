import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../Layout.component';

describe('Layout Component', () => {
  test('display children properly', () => {
    render(
      <Layout>
        <p>children stub</p>
      </Layout>
    );

    expect(screen.getByText('children stub')).toBeInTheDocument();
  });
});
