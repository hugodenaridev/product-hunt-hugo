import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Tabs from './Tabs/Tabs';

describe('Tabs', () => {
  it('renders both tabs', () => {
    render(<Tabs activeTab="Popular" setActiveTab={vi.fn()} />);
    expect(screen.getByText('Popular')).toBeInTheDocument();
    expect(screen.getByText('Newest')).toBeInTheDocument();
  });

  it('calls setActiveTab when a tab is clicked', () => {
    const setActiveTab = vi.fn();
    render(<Tabs activeTab="Popular" setActiveTab={setActiveTab} />);
    fireEvent.click(screen.getByText('Newest'));
    expect(setActiveTab).toHaveBeenCalledWith('Newest');
  });

  it('applies active style to the selected tab', () => {
    render(<Tabs activeTab="Newest" setActiveTab={vi.fn()} />);
    const newestTab = screen.getByText('Newest');
    expect(newestTab).toHaveStyle('color: #EF4444');
  });
}); 