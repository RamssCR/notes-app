import { describe, expect, test, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { Sheet } from '@components/ui/Sheet'
import { useToggle } from '@hooks/useToggle'

vi.mock('@hooks/useToggle')

describe('Sheet', () => {
  const mockUseToggle = vi.mocked(useToggle)

  test('renders sheet with title and children', () => {
    (mockUseToggle as unknown as ReturnType<typeof vi.fn>).mockReturnValue({ off: vi.fn() })
    render(
      <Sheet active={true} onClose={vi.fn()}>
        <div>Sheet Content</div>
      </Sheet>
    )

    expect(screen.getByText('Sheet Content')).toBeDefined()
  })

  test('calls onClose when backdrop is clicked', async () => {
    const onCloseMock = vi.fn()
    ;(mockUseToggle as unknown as ReturnType<typeof vi.fn>).mockReturnValue({ off: vi.fn() })

    render(
      <Sheet active={true} onClose={onCloseMock}>
        <div>Sheet Content</div>
      </Sheet>
    )

    const backdrop = await screen.findByRole('button')
    act(() => {
      fireEvent.click(backdrop)
    })
    expect(onCloseMock).toHaveBeenCalled()
  })

  test('closes sheet on Escape key press', () => {
    const onCloseMock = vi.fn()
    ;(mockUseToggle as unknown as ReturnType<typeof vi.fn>).mockReturnValue({ off: vi.fn() })

    render(
      <Sheet active={true} onClose={onCloseMock}>
        <div>Sheet Content</div>
      </Sheet>
    )

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    expect(onCloseMock).toHaveBeenCalled()
  })

  test('does not call onClose when Escape is pressed and sheet is inactive', () => {
    const onCloseMock = vi.fn()
    ;(mockUseToggle as unknown as ReturnType<typeof vi.fn>).mockReturnValue({ off: vi.fn() })

    render(
      <Sheet active={false} onClose={onCloseMock}>
        <div>Sheet Content</div>
      </Sheet>
    )

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    expect(onCloseMock).not.toHaveBeenCalled()
  })
})