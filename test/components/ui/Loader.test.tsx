import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Loader } from '@components/ui/Loader';

describe('Loader', () => {
  test('renders loader with default size', () => {
    render(<Loader />);

    const loader = screen.getByRole('status');
    expect(loader).toBeDefined();
    expect(loader.getAttribute('class')).toContain('size-6');
  });

  test('renders loader with custom size', () => {
    render(<Loader size="xl" />);

    const loader = screen.getByRole('status');
    expect(loader).toBeDefined();
    expect(loader.getAttribute('class')).toContain('size-12');
  });

  test('renders loader with aria-busy attribute', () => {
    render(<Loader aria-busy="true" />);

    const loader = screen.getByRole('status');
    expect(loader.getAttribute('aria-busy')).toBe('true');
  });
});