import { beforeEach, describe, expect, test } from 'vitest'
import { fontStore } from '@stores/fontStore'

describe('fontStore', () => {
  beforeEach(() => {
    fontStore.getState().setFont('var(--font-lato)')
  })

  test('should initialize with default font', () => {
    const state = fontStore.getState()
    expect(state.font).toBe('var(--font-lato)')
  })

  test('should update font', () => {
    const newFont = 'var(--font-roboto)'
    fontStore.getState().setFont(newFont)
    const state = fontStore.getState()
    expect(state.font).toBe(newFont)
  })
})