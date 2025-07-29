import { describe, expect, test, vi } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useFontEffect } from '@hooks/useFontEffect'
import { fontStore } from '@stores/fontStore'

vi.mock('@stores/fontStore', () => ({
  fontStore: vi.fn(() => ({
    font: 'default',
  })),
}))

describe('useFontEffect', () => {
  test('should apply the default font on mount', () => {
    renderHook(() => useFontEffect())
    expect(document.body.style.fontFamily).toBe('var(--font-default)')
  })

  test('should update font when fontStore changes', () => {
    const { rerender } = renderHook(() => useFontEffect())

    vi.mocked(fontStore).mockReturnValue({
      font: 'rubik',
    })

    rerender()
    expect(document.body.style.fontFamily).toBe('var(--font-rubik)')
  })
})