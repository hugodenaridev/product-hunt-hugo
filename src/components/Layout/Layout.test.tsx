import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Layout from './Layout';
import { MemoryRouter } from 'react-router-dom';

describe('Layout', () => {
  it('renders header and tabs on home route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Layout />
      </MemoryRouter>
    );
    expect(screen.getByAltText('User Avatar')).toBeInTheDocument();
    expect(screen.getByText('Popular')).toBeInTheDocument();
    expect(screen.getByText('Newest')).toBeInTheDocument();
  });
}); 