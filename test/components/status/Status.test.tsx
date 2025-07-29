import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Status } from '@components/status/Status'

describe('Status', () => {
  test('renders success state', () => {
    render(<Status state="success" />)
    expect(screen.getByRole('status').textContent).toBe('Changes saved successfullyChanges saved successfully')
  })

  test('renders error state', () => {
    render(<Status state="error" />)
    expect(screen.getByRole('status').textContent).toBe('An error occurred while saving changesAn error occurred while saving changes')
  })

  test('renders loading state', () => {
    render(<Status state="loading" />)
    expect(screen.getByRole('status').textContent).toBe('Saving...Saving...')
  })
})