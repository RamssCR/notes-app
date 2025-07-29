import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NoNotes } from '@components/editor/NoNotes'

describe('NoNotes', () => {
  test('renders the component with correct elements', () => {
    render(<NoNotes />)

    expect(screen.getByRole('region')).toBeDefined()
    expect(screen.getByText('It looks quite empty here...')).toBeDefined()
    expect(screen.getByText("Don't be shy, we don't judge. Create your first note!")).toBeDefined()
    expect(screen.getByRole('button', { name: /Create Note/i })).toBeDefined()
  })
})