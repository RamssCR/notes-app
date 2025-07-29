import { describe, expect, test, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { useToggle } from '@hooks/useToggle'
import { Modal } from '@components/ui/Modal'

vi.mock('@hooks/useToggle')

describe('Modal', () => {
  const mockUseToggle = vi.mocked(useToggle)

  test('renders modal with title and children', () => {
    (mockUseToggle as unknown as ReturnType<typeof vi.fn>).mockReturnValue({ off: vi.fn() })
    render(
      <Modal active={true} modalTitle="Test Modal">
        <div>Modal Content</div>
      </Modal>
    )

    expect(screen.getByText('Test Modal')).toBeDefined()
    expect(screen.getByText('Modal Content')).toBeDefined()
  })

  test('calls onClose when backdrop is clicked', async () => {
    const onCloseMock = vi.fn()
    ;(mockUseToggle as unknown as ReturnType<typeof vi.fn>).mockReturnValue({ off: vi.fn() })

    render(
      <Modal active={true} onClose={onCloseMock}>
        <div>Modal Content</div>
      </Modal>
    )

    const backdrop = await screen.findByRole('button')
    act(() => {
      fireEvent.click(backdrop)
    })
    expect(onCloseMock).toHaveBeenCalled()
  })

  test('closes modal on Escape key press', () => {
    const onCloseMock = vi.fn()
    ;(mockUseToggle as unknown as ReturnType<typeof vi.fn>).mockReturnValue({ off: vi.fn() })

    render(
      <Modal active={true} onClose={onCloseMock}>
        <div>Modal Content</div>
      </Modal>
    )

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    expect(onCloseMock).toHaveBeenCalled()
  })

  test('does not call onClose when Escape is pressed and modal is inactive', () => {
    const onCloseMock = vi.fn()
    ;(mockUseToggle as unknown as ReturnType<typeof vi.fn>).mockReturnValue({ off: vi.fn() })

    render(
      <Modal active={false} onClose={onCloseMock}>
        <div>Modal Content</div>
      </Modal>
    )

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    expect(onCloseMock).not.toHaveBeenCalled()
  })
})