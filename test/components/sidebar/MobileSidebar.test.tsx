import { beforeEach, describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { MobileSidebar } from '@components/sidebar/MobileSidebar'
import { useSidebarToggle } from '@hooks/useSidebarToggle'

vi.mock('@hooks/useSidebarToggle')

describe('MobileSidebar', () => {
  const mockToggle = vi.fn()
  const mockNotes = [
    { id: '1', title: 'Note 1', content: 'Content 1', createdAt: new Date(), updatedAt: new Date() },
  ]

  beforeEach(() => {
    vi.mocked(useSidebarToggle).mockReturnValue({
      noteActive: false,
      deleteActive: false,
      toggleDelete: vi.fn(),
      toggleNoteCreator: vi.fn(),
      notes: mockNotes,
      id: '1',
    })
  })

  test('renders the sidebar with notes', () => {
    render(
      <MemoryRouter>
        <MobileSidebar active={true} toggle={mockToggle} />
      </MemoryRouter>
    )

    expect(screen.getByText('Notes')).toBeDefined()
    expect(screen.getByText('Your notes')).toBeDefined()
    expect(screen.getByText('Note 1')).toBeDefined()
  })

  test('calls toggle function when sidebar is closed', () => {
    render(
      <MemoryRouter>
        <MobileSidebar active={true} toggle={mockToggle} />
      </MemoryRouter>
    )

    const closeButton = screen.getByTestId('sheet-close-button')
    closeButton.click()

    expect(mockToggle).toHaveBeenCalled()
  })
})