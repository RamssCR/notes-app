import { fontStore } from '@stores/fontStore'
import { useEffect } from 'react'

/**
 * A custom hook that applies the selected font to the document body.
 * It listens for changes in the font store and updates the body's font family accordingly.
 */
export const useFontEffect = () => {
  const { font } = fontStore()

  useEffect(() => {
    document.body.style.fontFamily = `var(--font-${font})`
  }, [font])
};

