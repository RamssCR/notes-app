import { describe, expect, test, vi } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useLoadSettings } from '@hooks/useLoadSettings'
import { useThemeEffect } from '@hooks/useThemeEffect'
import { useFontEffect } from '@hooks/useFontEffect'

vi.mock('@hooks/useThemeEffect')
vi.mock('@hooks/useFontEffect')

describe('useLoadSettings', () => {
  test('should call useThemeEffect and useFontEffect', () => {
    const themeEffectMock = vi.mocked(useThemeEffect)
    const fontEffectMock = vi.mocked(useFontEffect)

    renderHook(() => useLoadSettings())

    expect(themeEffectMock).toHaveBeenCalled()
    expect(fontEffectMock).toHaveBeenCalled()
  })
})