import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Selectable } from '@components/settings/Selectable'

describe('Selectable', () => {
  test('renders with default outline variant', () => {
    render(<Selectable>Test Button</Selectable>)
    const button = screen.getByRole('button', { name: /test button/i })
    expect(button).toBeDefined()
    expect(button.className).toContain('bg-transparent')
  })
})