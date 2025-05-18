import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Header from './Header';

describe('Header', () => {
  it('renders avatar and date', () => {
    render(<Header search="" setSearch={vi.fn()} />);
    expect(screen.getByAltText('User Avatar')).toBeInTheDocument();
    expect(screen.getByText(/^[A-Za-z]{3},/)).toBeInTheDocument(); // e.g., "Sun, 3 Dec"
  });

  it('renders search input and updates value', () => {
    const setSearch = vi.fn();
    render(<Header search="" setSearch={setSearch} />);
    const input = screen.getByPlaceholderText('Search products...');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(setSearch).toHaveBeenCalledWith('test');
  });
}); 