import { fontStore } from '@stores/fontStore'
import { useEffect } from 'react'

export const useFontEffect = () => {
  const { font } = fontStore()

  useEffect(() => {
    document.body.style.fontFamily = `var(--font-${font})`
  }, [font])
};

