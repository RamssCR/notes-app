import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FPS } from '@components/debugger/FPS'

vi.mock('@hooks/useFPS', () => ({
  useFPS: vi.fn(() => 60),
}))

describe('FPS', () => {
  test('renders the FPS value', () => {
    render(<FPS />)

    const fpsValue = screen.getByText(/fps: 60/i)
    expect(fpsValue).toBeDefined()
  })
})