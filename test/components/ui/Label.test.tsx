import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Label } from '@components/ui/Label';

describe('Label', () => {
  test('renders the component correctly', () => {
    render(<Label htmlFor="test">Test label</Label>);

    const label = screen.getByText('Test label');
    expect(label).toBeDefined();
    expect(label.getAttribute('for')).toBe('test');
  });
});