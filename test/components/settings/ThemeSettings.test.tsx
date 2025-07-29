import { describe, expect, test, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeSettings } from '@components/settings/ThemeSettings'
import { themeStore } from '@stores/themeStore'

vi.mock('@stores/themeStore', () => ({
  themeStore: vi.fn(() => ({
    theme: 'light',
    setTheme: vi.fn(),
  })),
}))

describe('ThemeSettings', () => {
  test('renders theme settings component', () => {
    render(<ThemeSettings />)
    expect(screen.getByRole('heading', { name: /theme/i })).toBeDefined()
    expect(screen.getByText(/we know you can switch themes in the editor/i)).toBeDefined()
    expect(screen.getByRole('switch')).toBeDefined()
  })

  test('toggles theme on switch change', () => {
    const theme = {
      theme: 'light',
      setTheme: vi.fn(),
    }
    vi.mocked(themeStore).mockReturnValue(theme)
    const { rerender } = render(<ThemeSettings />)
    const switchElement = screen.getByRole('switch')
    fireEvent.click(switchElement)
    expect(theme.setTheme).toHaveBeenCalledWith('dark')

    theme.theme = 'dark'
    rerender(<ThemeSettings />)
    fireEvent.click(switchElement)
    expect(theme.setTheme).toHaveBeenCalledWith('light')
  })
})