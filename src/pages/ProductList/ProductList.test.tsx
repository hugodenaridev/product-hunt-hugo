import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProductList from './ProductList';
import { vi } from 'vitest';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => vi.fn(),
    useOutletContext: () => ({ activeTab: 'Popular', search: '' }),
  };
});

vi.mock('@tanstack/react-query', async () => {
  const actual = await vi.importActual('@tanstack/react-query');
  return {
    ...actual,
    useInfiniteQuery: () => ({
      data: { pages: [{ posts: [{ id: '1', name: 'Test', tagline: 'Tag', thumbnail: { url: '' }, votesCount: 1 }] }] },
      fetchNextPage: vi.fn(),
      hasNextPage: false,
      isFetchingNextPage: false,
      status: 'success',
      error: null,
    }),
  };
});

describe('ProductList', () => {
  it('renders products from query', () => {
    render(<ProductList />);
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('Tag')).toBeInTheDocument();
  });
}); 