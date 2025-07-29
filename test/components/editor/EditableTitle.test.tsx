import { beforeEach, describe, expect, test, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { EditableTitle } from '@components/editor/EditableTitle'
import { MemoryRouter } from 'react-router-dom'
import { useInputToggler } from '@hooks/useInputToggler'
import { noteStore } from '@stores/noteStore'

vi.mock('@hooks/useInputToggler')
vi.mock('@stores/noteStore', () => ({
  noteStore: vi.fn(() => ({
    updateNote: vi.fn(),
  })),
}))

describe('EditableTitle', () => {
  const mockNote = {
    id: '1',
    title: 'Test Note',
    content: 'This is a test note content.',
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  const mockUpdateNote = vi.fn()

  beforeEach(() => {
    vi.mocked(noteStore).mockReturnValue({
      updateNote: mockUpdateNote,
    })
  })

  test('renders the title correctly', () => {
    vi.mocked(useInputToggler).mockReturnValue({
      isEditing: true,
      title: mockNote.title,
      inputRef: { current: null },
      handleInput: vi.fn(),
      handleBlurOrSubmit: vi.fn(),
      handleTrigger: vi.fn(),
      activateEditing: vi.fn(),
      _debug: {
        setIsEditing: vi.fn(),
        setTitle: vi.fn(),
      }
    })

    render(
      <MemoryRouter>
        <EditableTitle note={mockNote} />
      </MemoryRouter>
    )
    expect(screen.getByRole('textbox').getAttribute('value')).toBe(mockNote.title)
  })

  test('activates editing mode on title click', () => {
    const mockActivateEditing = vi.fn()
    vi.mocked(useInputToggler).mockReturnValue({
      isEditing: false,
      title: mockNote.title,
      inputRef: { current: null },
      handleInput: vi.fn(),
      handleBlurOrSubmit: vi.fn(),
      handleTrigger: vi.fn(),
      activateEditing: mockActivateEditing,
      _debug: {
        setIsEditing: vi.fn(),
        setTitle: vi.fn(),
      }
    })

    render(
      <MemoryRouter>
        <EditableTitle note={mockNote} />
      </MemoryRouter>
    )

    fireEvent.click(screen.getByText('Test Note'))
    expect(mockActivateEditing).toHaveBeenCalled()
  })

  test('does not render when note is undefined', () => {
    vi.mocked(useInputToggler).mockReturnValue({
      isEditing: false,
      title: '',
      inputRef: { current: null },
      handleInput: vi.fn(),
      handleBlurOrSubmit: vi.fn(),
      handleTrigger: vi.fn(),
      activateEditing: vi.fn(),
      _debug: {
        setIsEditing: vi.fn(),
        setTitle: vi.fn(),
      }
    })

    const { container } = render(
      <MemoryRouter>
        <EditableTitle note={undefined} />
      </MemoryRouter>
    )
    expect(container.firstChild).toBeNull()
  })
})