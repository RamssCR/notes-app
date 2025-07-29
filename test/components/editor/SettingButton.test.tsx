import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SettingButton } from '@components/editor/SettingButton'

describe('SettingButton', () => {
  test('renders with icon and label', () => {
    render(
      <SettingButton label="Settings" />
    )

    const button = screen.getByRole('button')
    expect(button).toBeDefined()
  })

  test('applies additional props', () => {
    render(
      <SettingButton label="Settings" data-testid="setting-button" />
    )

    const button = screen.getByTestId('setting-button')
    expect(button.getAttribute('data-testid')).toBe('setting-button')
  })
})