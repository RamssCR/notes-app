import { describe, expect, test } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useResizeHeight } from '@hooks/useResizeHeight'

describe('useResizeHeight', () => {
  test('should resize textarea height based on content', () => {
    const mockTextarea = {
      style: { height: '' },
      scrollHeight: 100,
      scrollTop: 0,
    } as HTMLTextAreaElement
    const ref = { current: mockTextarea }
    renderHook(() => useResizeHeight(ref, 'Hello, world!'))
    expect(mockTextarea.style.height).toBe('100px')
  })

  test('returns null if textarea is not provided', () => {
    const { result } = renderHook(() => useResizeHeight({ current: null }, ''))
    expect(result.current).toBeUndefined()
  })
})