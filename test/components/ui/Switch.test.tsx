import { act, fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import { Switch } from '@components/ui/Switch'

describe('Switch', () => {
    test('renders the switch component', () => {
        render(<Switch />)
        const switchElement = screen.getByLabelText('Switch')
        expect(switchElement).toBeDefined()
    })

    test('calls onChange when clicked', () => {
        const handleChange = vi.fn()
        render(<Switch onChange={handleChange} />)
        const switchElement = screen.getByLabelText('Switch')
        fireEvent.click(switchElement)
        expect(handleChange).toHaveBeenCalled()
    })

    test('toggles checked state', async () => {
        render(<Switch checked={false} />)
        const switchElement = screen.getByLabelText('Switch')

        expect(switchElement.querySelector('input')?.checked).toBe(false)

        await act(async () => {
            fireEvent.click(switchElement)
            expect(switchElement.querySelector('input')?.checked).toBe(true)
        })

    })
})