import { themeStore } from '@stores/themeStore'
import { useParams } from 'react-router-dom'
import { noteStore } from '@stores/noteStore'
import { useToggle } from './useToggle'

/**
 * Custom hook to manage header state and actions.
 * It provides functions to toggle settings modal, notes visibility, and theme,
 * as well as the current note and theme state.
 */
export const useHeader = () => {
  const { id } = useParams<{ id: string }>()
  const { notes } = noteStore()
  const { active: settingsActive, toggle: toggleModal } = useToggle()
  const { active: notesActive, toggle: toggleNotes } = useToggle()
  const { theme, setTheme } = themeStore()

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
  const note = notes.find(note => note.id === id)

  return {
    toggleModal,
    toggleNotes,
    toggleTheme,
    settingsActive,
    notesActive,
    theme,
    note,
    id
  }
}