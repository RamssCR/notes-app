import type { ChangeEvent, KeyboardEvent } from 'react'
import { describe, expect, test, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useInputToggler } from '@hooks/useInputToggler'

describe('useInputToggler', () => {
  test('should initialize with default values', () => {
    const { result } = renderHook(() => useInputToggler({ id: 'test-id' }))
    
    expect(result.current.title).toBe('New Note')
    expect(result.current.isEditing).toBe(false)
  })

  test('should toggle editing state', () => {
    const { result } = renderHook(() => useInputToggler({ id: 'test-id' }))
    
    act(() => {
      result.current._debug.setIsEditing(true)
    })
    
    expect(result.current.isEditing).toBe(true)
  })

  test('should handle input changes', () => {
    const { result } = renderHook(() => useInputToggler({ id: 'test-id' }))
    
    act(() => {
      result.current.handleInput({ target: { value: 'Updated Note' } } as ChangeEvent<HTMLInputElement>)
    })
    
    expect(result.current.title).toBe('Updated Note')
  })

  test('should handle blur or submit action', () => {
    const onUpdateMock = vi.fn()
    const { result } = renderHook(() => useInputToggler({ id: 'test-id', onUpdate: onUpdateMock }))
    
    act(() => {
      result.current.handleInput({ target: { value: 'Updated Note' } } as ChangeEvent<HTMLInputElement>)
      result.current.handleBlurOrSubmit()
    })
    
    expect(onUpdateMock).toHaveBeenCalledWith('test-id', { title: 'New Note' })
  })

  test('should handle Enter key press', () => {
    const { result } = renderHook(() => useInputToggler({ id: 'test-id' }))
    
    act(() => {
      result.current.handleInput({ target: { value: 'Updated Note' } } as ChangeEvent<HTMLInputElement>)
      result.current.handleTrigger({ key: 'Enter' } as KeyboardEvent<HTMLInputElement>)
    })
    
    expect(result.current.title).toBe('New Note')
    expect(result.current.isEditing).toBe(false)
  })

  test('should handle Escape key press', () => {
    const { result } = renderHook(() => useInputToggler({ id: 'test-id' }))
    
    act(() => {
      result.current._debug.setIsEditing(true)
      result.current.handleTrigger({ key: 'Escape' } as KeyboardEvent<HTMLInputElement>)
    })
    
    expect(result.current.isEditing).toBe(false)
  })

  test('calls handleBlurOrSubmit without trimming if title is empty', () => {
    const onUpdateMock = vi.fn()
    const { result } = renderHook(() => useInputToggler({ id: 'test-id', initialTitle: 'Initial Note', onUpdate: onUpdateMock }))
    
    act(() => {
      result.current.handleInput({ target: { value: '' } } as ChangeEvent<HTMLInputElement>)
    })

    act(() => {
      result.current.handleBlurOrSubmit()
    })
    
    expect(onUpdateMock).toHaveBeenCalledWith('test-id', { title: 'Initial Note' })
  })

  test('activates editing state', () => {
    const { result } = renderHook(() => useInputToggler({ id: 'test-id' }))
    
    act(() => {
      result.current.activateEditing()
    })
    
    expect(result.current.isEditing).toBe(true)
  })

  test('focus and selects input when editing is activated', () => {
    const { result } = renderHook(() => useInputToggler({ id: 'test-id' }))
    result.current.inputRef.current = {
      focus: vi.fn(),
      select: vi.fn(),
    } as unknown as HTMLInputElement
    
    act(() => {
      result.current.activateEditing()
    })
    
    expect(result.current.inputRef.current).not.toBeNull()
    expect(result.current.inputRef.current?.focus).toHaveBeenCalled()
    expect(result.current.inputRef.current?.select).toHaveBeenCalled()
  })
})
