import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Avatar } from '@components/ui/Avatar'

describe('Avatar Component', () => {
  test('renders with default props', () => {
    render(
      <Avatar 
        src="test.jpg" 
        alt="Test Avatar" 
      />
    )
    const img = screen.getByAltText('Test Avatar')
    expect(img).toBeDefined()
    expect(img.getAttribute('src')).toBe('test.jpg')
  })

  test('renders without crashing when no props are passed', () => {
    render(<Avatar />)
    const img = screen.getByRole('img')
    expect(img).toBeDefined()
  })
})