import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WelcomeBack } from '@components/editor/WelcomeBack'

describe('WelcomeBack', () => {
  test('renders the welcome message', () => {
    render(<WelcomeBack />)

    const title = screen.getByRole('heading', { name: /look who's back/i })
    const description = screen.getByText(/wanna continue where you left off\?/i)

    expect(title).toBeDefined()
    expect(description).toBeDefined()
  })

  test('has correct aria attributes', () => {
    render(<WelcomeBack />)

    const article = screen.getByRole('article')
    expect(article.getAttribute('aria-labelledby')).toBe('welcome-title')
    expect(article.getAttribute('aria-describedby')).toBe('welcome-description')
  })
})