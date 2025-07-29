import { describe, expect, test, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Input } from '@components/ui/Input'

describe('Input', () => {
  test('renders with default props', () => {
    render(<Input placeholder="Type here..." />)
    const input = screen.getByPlaceholderText('Type here...')
    expect(input).toBeDefined()
  })

  test('calls onChange handler when typing', () => {
    const handleChange = vi.fn()
    render(<Input placeholder="Type here..." onChange={handleChange} />)
    const input = screen.getByPlaceholderText('Type here...')
    fireEvent.change(input, { target: { value: 'Hello' } })
    expect(handleChange).toHaveBeenCalled()
  })

  test('applies custom className', () => {
    render(<Input placeholder="Type here..." className="custom-class" />)
    const input = screen.getByPlaceholderText('Type here...')
    expect(input.getAttribute('class')).toContain('custom-class')
  })
})