import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Link } from '@components/ui/Link';
import { MemoryRouter } from 'react-router-dom';

describe('Link', () => {
  test('renders correctly', () => {
    render(
      <MemoryRouter>
        <Link to="/about">
          Ir a la página de About
        </Link>
      </MemoryRouter>,
    );

    expect(screen.getByText('Ir a la página de About')).toBeDefined();
  });

  test('applies correct styles', () => {
    render(
      <MemoryRouter>
        <Link to="/about" className="custom-class">
          Ir a la página de About
        </Link>
      </MemoryRouter>,
    );

    const link = screen.getByText('Ir a la página de About');
    expect(link.getAttribute('class')).toContain('custom-class');
  });
});