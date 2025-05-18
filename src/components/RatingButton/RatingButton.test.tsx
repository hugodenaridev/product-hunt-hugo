import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import RatingButton from './RatingButton';

describe('RatingButton', () => {
  it('renders with the correct count', () => {
    render(<RatingButton count={42} />);
    expect(screen.getByText('42')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<RatingButton count={10} onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('shows selected style when selected is true', () => {
    render(<RatingButton count={5} selected />);
    const button = screen.getByRole('button');
    // Check for orange background (selected)
    expect(button).toHaveStyle('background-color: #f97316');
    expect(button).toHaveStyle('color: #fff');
  });

  it('shows unselected style when selected is false', () => {
    render(<RatingButton count={5} />);
    const button = screen.getByRole('button');
    // Check for white background (unselected)
    expect(button).toHaveStyle('background-color: #fff');
    expect(button).toHaveStyle('color: #111');
  });
}); 