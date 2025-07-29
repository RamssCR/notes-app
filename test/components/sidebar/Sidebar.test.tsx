import { beforeEach, describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Sidebar } from '@components/sidebar/Sidebar'
import { useSidebarToggle } from '@hooks/useSidebarToggle'

vi.mock('@hooks/useSidebarToggle')

describe('Sidebar', () => {
  beforeEach(() => {
    vi.mocked(useSidebarToggle).mockReturnValue({
      noteActive: false,
      deleteActive: false,
      toggleDelete: vi.fn(),
      toggleNoteCreator: vi.fn(),
      notes: [],
      id: '1',
    })
  })

  test('renders the sidebar', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    )

    expect(screen.getByText('Notes')).toBeDefined()
    expect(screen.getByText('Your notes')).toBeDefined()
  })
})