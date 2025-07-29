import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ExportSettings } from '@components/settings/ExportSettings'
import { exportNoteAsTxt } from '@helpers/generateTextFile'
import { useParams } from 'react-router-dom'

vi.mock('react-router-dom')
vi.mock('@helpers/generateTextFile', () => ({
  exportNoteAsTxt: vi.fn(),
}))

describe('ExportSettings', () => {
  test('renders export settings component', () => {
    (useParams as unknown as ReturnType<typeof vi.fn>).mockReturnValue({ id: '123' })
    render(<ExportSettings />)

    expect(screen.getByRole('heading', { name: /export your note/i })).toBeDefined()
    expect(screen.getByText(/export your note you're currently viewing as a text file to keep a backup or share it with others/i)).toBeDefined()
    expect(screen.getByRole('button', { name: /export/i })).toBeDefined()
  })

  test('displays error message when no note is opened', () => {
    (useParams as unknown as ReturnType<typeof vi.fn>).mockReturnValue({ id: undefined })
    render(<ExportSettings />)

    expect(screen.getByText(/you need to open a note or create it first to export it/i)).toBeDefined()
    expect(screen.getByRole('button', { name: /export/i }).className).toContain('opacity-50')
  })

  test('calls exportNoteAsTxt with possible empty parameters when export button is clicked', () => {
    ;(useParams as unknown as ReturnType<typeof vi.fn>).mockReturnValue({ id: '123' })

    render(<ExportSettings />)

    const exportButton = screen.getByRole('button', { name: /export/i })
    exportButton.click()

    expect(exportNoteAsTxt).toHaveBeenCalled()
  })
})