import { useEffect } from 'react'
import { themeStore } from '@stores/themeStore'

/**
 * Custom hook to apply the current theme to the document.
 * It listens for changes in the theme and updates the document's root element accordingly.
 */
export const useThemeEffect = () => {
  const theme = themeStore((state) => state.theme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }
  }, [theme])
}