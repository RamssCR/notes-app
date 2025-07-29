import { describe, expect, test, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { themeStore } from '@stores/themeStore'
import { useHeader } from '@hooks/useHeader'
import { useToggle } from '@hooks/useToggle'

vi.mock('@stores/noteStore', () => ({
  noteStore: vi.fn(() => ({
    notes: [],
    addNote: vi.fn(),
    removeNote: vi.fn(),
  })),
}))

vi.mock('react-router-dom', () => ({
  useParams: vi.fn(() => ({ id: '1' })),
}))

vi.mock('@hooks/useToggle')
vi.mock('@stores/themeStore')

describe('useHeader', () => {
  test('should return initial state and functions', () => {
    const mockThemeStore = {
      theme: 'light',
      setTheme: vi.fn(),
    }
    const mockUseToggle = {
      active: false,
      toggle: vi.fn(),
      on: vi.fn(),
      off: vi.fn(),
    }

    vi.mocked(themeStore).mockReturnValue(mockThemeStore)
    vi.mocked(useToggle).mockReturnValue(mockUseToggle)

    const { result } = renderHook(() => useHeader())

    expect(result.current.toggleModal).toBeInstanceOf(Function)
    expect(result.current.toggleNotes).toBeInstanceOf(Function)
    expect(result.current.toggleTheme).toBeInstanceOf(Function)
    expect(result.current.settingsActive).toBe(false)
    expect(result.current.notesActive).toBe(false)
    expect(result.current.theme).toBe('light')
    expect(result.current.note).toBeUndefined()
    expect(result.current.id).toBe('1')
  })

  test('should toggle theme between light and dark', () => {
    const mockThemeStore = {
      theme: 'dark',
      setTheme: vi.fn(),
    }
    const mockUseToggle = {
      active: false,
      toggle: vi.fn(),
      on: vi.fn(),
      off: vi.fn(),
    }

    vi.mocked(useToggle).mockReturnValue(mockUseToggle)
    vi.mocked(themeStore).mockReturnValue(mockThemeStore)

    const { result, rerender } = renderHook(() => useHeader())

    act(() => {
      result.current.toggleTheme()
    })
    expect(mockThemeStore.setTheme).toHaveBeenCalledWith('light')

    mockThemeStore.theme = 'light'
    rerender()
    expect(result.current.theme).toBe('light')

    act(() => {
      result.current.toggleTheme()
    })
    expect(mockThemeStore.setTheme).toHaveBeenCalledWith('dark')
  })
})