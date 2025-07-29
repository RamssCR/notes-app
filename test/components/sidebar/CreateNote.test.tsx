import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CreateNote } from '@components/sidebar/CreateNote'

describe('CreateNote', () => {
  test('renders the CreateNote button with correct text and icon', () => {
    render(<CreateNote />)

    const button = screen.getByRole('button', { name: /create note/i })
    expect(button).toBeDefined()
  })

  test('applies custom className', () => {
    const customClass = 'custom-class'
    render(<CreateNote className={customClass} />)

    const button = screen.getByRole('button', { name: /create note/i })
    expect(button.className).toContain(customClass)
  })
})