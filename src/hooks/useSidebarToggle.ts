import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { noteStore } from "@stores/noteStore"

/**
 * Custom hook to manage the state of the sidebar in the notes application.
 * This hook provides functionality to toggle the note creation dialog and the delete confirmation dialog,
 * as well as to navigate to the home page if no note ID is present.
 */
export const useSidebarToggle = () => {
  const { id } = useParams<{ id: string }>()
  const { notes } = noteStore()
  const [noteActive, setNoteActive] = useState(false)
  const [deleteActive, setDeleteActive] = useState(false)
  const toggleDelete = () => setDeleteActive(!deleteActive)
  const toggleNoteCreator = () => setNoteActive(!noteActive)
  const navigateTo = useNavigate()

  useEffect(() => {
    if (!id) {
      navigateTo('/')
    }
  }, [id, navigateTo])

  return {
    noteActive,
    deleteActive,
    toggleDelete,
    toggleNoteCreator,
    notes,
    id,
  }
}