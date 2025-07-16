import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
  font: string
}

type Action = {
  setFont: (font: string) => void
}

export const fontStore = create<State & Action>()(
  persist(
    (set) => ({
      font: 'var(--font-lato)',
      setFont: (font: string) => set({ font }),
    }),
    {
      name: 'vite-ui-font',
    }
  )
);