import { describe, expect, test, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Note } from '@components/sidebar/Note'
import { MemoryRouter } from 'react-router-dom'

describe('Note', () => {
  test('renders the note title', () => {
    render(
      <MemoryRouter>
        <Note id="1" title="Test Note" active={false} />
      </MemoryRouter>
    )
    expect(screen.getByText('Test Note')).toBeDefined()
  })

  test('handles delete button click', () => {
    const onDelete = vi.fn()
    render(
      <MemoryRouter>
        <Note 
          id="1" 
          title="Test Note" 
          onDelete={onDelete} 
          active={true}
        />
      </MemoryRouter>
    )

    const deleteButton = screen.getByRole('button')
    fireEvent.click(deleteButton)

    expect(onDelete).toHaveBeenCalled()
  })
})