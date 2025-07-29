import { beforeEach, describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Header } from '@components/editor/Header'
import { useHeader } from '@hooks/useHeader'
import { MemoryRouter } from 'react-router-dom'

vi.mock('@hooks/useHeader')
vi.mock('@stores/themeStore')

describe('Header', () => {
  let mockToggleModal: typeof vi.fn
  let mockToggleNotes: typeof vi.fn
  let mockToggleTheme: typeof vi.fn

  beforeEach(() => {
    mockToggleModal = vi.fn()
    mockToggleNotes = vi.fn()
    mockToggleTheme = vi.fn()
  })

  test('renders EditableTitle when id is present', () => {
    vi.mocked(useHeader).mockReturnValue({
      toggleModal: mockToggleModal,
      toggleNotes: mockToggleNotes,
      toggleTheme: mockToggleTheme,
      settingsActive: false,
      notesActive: false,
      theme: 'light',
      note: { title: 'Test Note', content: 'Test Content', id: '1', createdAt: new Date(), updatedAt: new Date() },
      id: '1'
    })

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    expect(screen.getByText('Test Note')).toBeDefined()
  })

  test('renders the component on dark mode', () => {
    vi.mocked(useHeader).mockReturnValue({
      toggleModal: mockToggleModal,
      toggleNotes: mockToggleNotes,
      toggleTheme: mockToggleTheme,
      settingsActive: false,
      notesActive: false,
      theme: 'dark',
      note: { title: 'Test Note', content: 'Test Content', id: '1', createdAt: new Date(), updatedAt: new Date() },
      id: '1'
    })

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    expect(screen.getByTitle('Switch to Light Mode')).toBeDefined()
  })
})