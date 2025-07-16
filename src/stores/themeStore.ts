import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Theme = 'light' | 'dark' | 'system'

type State = {
  theme: Theme
}

type Action = {
  setTheme: (theme: State['theme']) => void
}

export const themeStore = create<State & Action>()(
  persist(
    (set) => ({
      theme: 'system',
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'vite-ui-theme',
    }
  )
);