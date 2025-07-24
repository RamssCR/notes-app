import { useThemeEffect } from './useThemeEffect'
import { useFontEffect } from './useFontEffect'

/**
 * Custom hook to load settings such as theme and font.
 * This hook initializes the theme and font settings
 * when the application starts or when the settings change.
 */
export const useLoadSettings = () => {
  // Load theme settings
  useThemeEffect()

  // Load font settings
  useFontEffect()
  
  // Additional settings can be loaded here in the future
}