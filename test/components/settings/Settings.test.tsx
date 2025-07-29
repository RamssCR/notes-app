import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Settings from '@components/settings/Settings'

vi.mock('@components/settings/FontSettings', () => ({
  FontSettings: () => <div>Font Settings</div>
}))

vi.mock('@components/settings/ExportSettings', () => ({
  ExportSettings: () => <div>Export Settings</div>
}))

vi.mock('@components/settings/ThemeSettings', () => ({
  ThemeSettings: () => <div>Theme Settings</div>
}))

describe('Settings', () => {
  test('renders Settings component with default props', () => {
    render(<Settings />)
    
    expect(screen.getByText('General Settings')).toBeDefined()
    expect(screen.getByText('Customize your experience when creating notes.')).toBeDefined()
    expect(screen.getByText('Theme Settings')).toBeDefined()
    expect(screen.getByText('Font Settings')).toBeDefined()
    expect(screen.getByText('Export Settings')).toBeDefined()
  })
})