import { describe, expect, test, vi } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { useDebounce } from '@hooks/useDebounce'

describe('useDebounce', () => {
  test('should debounce function calls', async () => {
    const callback = vi.fn()
    const delay = 1000
    const { result } = renderHook(() => useDebounce(callback, delay))

    result.current('first call')
    result.current('second call')
    result.current('third call')

    await waitFor(() => expect(callback).not.toHaveBeenCalled(), { timeout: 500 })
    await waitFor(() => expect(callback).toHaveBeenCalledTimes(1), { timeout: 1500 })
    
    expect(callback).toHaveBeenCalledWith('third call')
  })

  test('should clear timeout on unmount', () => {
    vi.useFakeTimers()
    const callback = vi.fn()
    const delay = 1000
    const { unmount } = renderHook(() => useDebounce(callback, delay))

    unmount()

    vi.advanceTimersByTime(delay)
    expect(callback).not.toHaveBeenCalled()
  })
})