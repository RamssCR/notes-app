import { beforeEach, describe, expect, test, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSidebarToggle } from '@hooks/useSidebarToggle'

vi.mock('react-router-dom')
vi.mock('@stores/noteStore', () => ({
  noteStore: vi.fn(() => ({
    notes: [],
  })),
}))

describe('useSidebarToggle', () => {
  const mockNavigate = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(useNavigate).mockReturnValue(mockNavigate)
    vi.mocked(useParams).mockReturnValue({ id: '123' })
  })

  test('should initialize with correct state', () => {
    const { result } = renderHook(() => useSidebarToggle())
    expect(result.current.noteActive).toBe(false)
    expect(result.current.deleteActive).toBe(false)
    expect(result.current.notes).toEqual([])
    expect(result.current.id).toBe('123')
  })

  test('should toggle note creation dialog', () => {
    const { result } = renderHook(() => useSidebarToggle())
    act(() => {
      result.current.toggleNoteCreator()
    })
    expect(result.current.noteActive).toBe(true)
  })

  test('should toggle delete confirmation dialog', () => {
    const { result } = renderHook(() => useSidebarToggle())
    act(() => {
      result.current.toggleDelete()
    })
    expect(result.current.deleteActive).toBe(true)
  })

  test('should navigate to home if no id is present', () => {
    vi.mocked(useParams).mockReturnValue({ id: undefined })
    renderHook(() => useSidebarToggle())
    expect(mockNavigate).toHaveBeenCalledWith('/')
  })
})