import { beforeEach, describe, expect, test, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { NoteEditor } from '@components/editor/NoteEditor'
import { useDebounce } from '@hooks/useDebounce'

vi.mock('@hooks/useDebounce')

describe('NoteEditor', () => {
  const mockUpdateNote = vi.fn()
  const mockUseDebounce = vi.mocked(useDebounce)

  beforeEach(() => {
    mockUpdateNote.mockClear()
    mockUseDebounce.mockReturnValue((fn) => fn)
  })

  test('renders with initial value', () => {
    render(<NoteEditor updateNote={mockUpdateNote} id="1" />)

    const textarea = screen.getByPlaceholderText('Start writing your note...')
    expect(textarea).toBeDefined()

    fireEvent.change(textarea, { target: { value: 'Test note' } })
  })
})