import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Textarea } from '@components/ui/Textarea';

describe('Textarea', () => {
  test('renders component with default props', () => {
    render(<Textarea placeholder="Type here..." />);
    const textareaElement = screen.getByPlaceholderText('Type here...');
    expect(textareaElement).toBeDefined();
    expect(textareaElement.tagName).toBe('TEXTAREA');
  });

  test('applies custom class', () => {
    render(
      <Textarea
        className="custom-textarea"
        placeholder="Texto personalizado"
      />,
    );
    const textareaElement = screen.getByPlaceholderText('Texto personalizado');
    expect(textareaElement.getAttribute('class')).toContain('custom-textarea');
  });

  test('applies variant and dimension', () => {
    render(<Textarea dimension="lg" placeholder="Texto con estilo" />);
    const textareaElement = screen.getByPlaceholderText('Texto con estilo');
    expect(textareaElement.getAttribute('class')).toContain('min-h-[12em]');
  });
});