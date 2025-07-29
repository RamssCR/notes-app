import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FontSettings } from '@components/settings/FontSettings'
import { fontStore } from '@stores/fontStore'

vi.mock('@stores/fontStore', () => ({
  fontStore: vi.fn(() => ({
    font: 'lato',
    setFont: vi.fn(),
  })),
}))

describe('FontSettings', () => {
  test('renders title and description', () => {
    render(<FontSettings />)
    expect(screen.getByRole('heading', { name: /Typography/i })).toBeDefined()
    expect(screen.getByText(/Default font style looks off\? Choose between these styles\./i)).toBeDefined()
  })

  test('renders selectable fonts', () => {
    render(<FontSettings />)
    const selectableFonts = screen.getAllByRole('button')
    expect(selectableFonts.length).toBeGreaterThan(0)
  })

  test('calls setFont when a font is clicked', () => {
    const setFont = vi.fn()
    ;(fontStore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      font: 'lato',
      setFont,
    })

    render(<FontSettings />)
    
    const fontButton = screen.getByText('Lato')
    fontButton.click()

    expect(setFont).toHaveBeenCalled()
  })
})