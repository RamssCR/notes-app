import { beforeEach, describe, expect, test, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useCreateNoteHandler } from '@hooks/useCreateNoteHandler'
import { noteStore } from '@stores/noteStore'

vi.mock('@stores/noteStore')

describe('useCreateNoteHandler', () => {
  const mockAddNote = vi.fn()
  const onCloseMock = vi.fn()

  beforeEach(() => {
    (noteStore as unknown as ReturnType<typeof vi.fn>)
      .mockReturnValue({ addNote: mockAddNote })
  })

  test('should initialize with empty form data and no error', () => {
    const { result } = renderHook(() => useCreateNoteHandler({ onClose: onCloseMock }))
    expect(result.current.formData).toEqual({ title: '' })
    expect(result.current.error).toBe('')
  })

  test('should handle input change', () => {
    const { result } = renderHook(() => useCreateNoteHandler({ onClose: onCloseMock }))
    act(() => {
      result.current.handleChange('title', 'New Note')
    })
    expect(result.current.formData.title).toBe('New Note')
    expect(result.current.error).toBe('')
  })

  test('should validate title correctly', () => {
    const { result } = renderHook(() => useCreateNoteHandler({ onClose: onCloseMock }))
    
    act(() => {
      result.current.handleChange('title', '')
    })
    expect(result.current.validate()).toBe('Title is required')

    act(() => {
      result.current.handleChange('title', 'A very long title that exceeds thirty characters')
    })
    expect(result.current.validate()).toBe('Title must be less than 30 characters')

    act(() => {
      result.current.handleChange('title', 'Valid Title')
    })
    expect(result.current.validate()).toBe('')
  })

  test('should submit the note and call onClose', async () => {
    const { result } = renderHook(() => useCreateNoteHandler({ onClose: onCloseMock }))
    
    act(() => {
      result.current.handleChange('title', 'New Note')
    })

    act(() => {
      result.current.handleSubmit()
    })

    expect(mockAddNote).toHaveBeenCalledWith('New Note')
    expect(result.current.formData.title).toBe('')
  })

  test('should handle submission errors', () => {
    const { result } = renderHook(() => useCreateNoteHandler({ onClose: onCloseMock }))
    
    act(() => {
      result.current.handleSubmit()
    })

    expect(result.current.error).toBe('Title is required')
  })

  test('should clean up form data and error state', () => {
    const { result } = renderHook(() => useCreateNoteHandler({ onClose: onCloseMock }))

    act(() => {
      result.current.handleChange('title', 'New Note')
      result.current.handleSubmit()
    })

    act(() => {
      result.current.cleanUp()
    })

    expect(result.current.formData.title).toBe('')
    expect(result.current.error).toBe('')
  })
})