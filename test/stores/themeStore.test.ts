import { describe, expect, test } from 'vitest'
import { themeStore } from '@stores/themeStore'

describe('themeStore', () => {
  test('should initialize with default theme', () => {
    const state = themeStore.getState()
    expect(state.theme).toBe('system')
  })

  test('should set theme correctly', () => {
    const newTheme = 'dark'
    themeStore.getState().setTheme(newTheme)
    const state = themeStore.getState()
    expect(state.theme).toBe(newTheme)
  })
})