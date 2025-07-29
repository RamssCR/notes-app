import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { User } from '@components/user/User'

describe('User', () => {
  test('renders user information', () => {
    render(<User username="John Doe" fallback="JD" />)
    expect(screen.getByText('John Doe')).toBeDefined()
    expect(screen.getByText('JD')).toBeDefined()
  })
})