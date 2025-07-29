import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InputError } from '@components/editor/InputError'

describe('InputError', () => {
  test('renders error message', () => {
    render(<InputError error='This field is required' />)
    expect(screen.getByText('This field is required')).toBeDefined()
  })
})
