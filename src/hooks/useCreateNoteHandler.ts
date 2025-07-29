import { useState } from "react"
import { noteStore } from '@stores/noteStore'

type UseCreateNoteHandler = {
  onClose: () => void
}

/**
 * Custom hook to handle the creation of a new note.
 * It manages the form data, validation, and submission logic.
 */
export const useCreateNoteHandler = ({ onClose }: UseCreateNoteHandler) => {
  const [formData, setFormData] = useState({ title: '' })
  const [error, setError] = useState('')
  const { addNote } = noteStore()

  const cleanUp = () => {
    setFormData({ title: '' })
    setError('')
  }

  const handleChange = (name: string, value: string) => {
    setError('')
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const trimmedTitle = formData.title.trim()
    if (!trimmedTitle) return 'Title is required'
    if (trimmedTitle.length > 30) return 'Title must be less than 30 characters'
    return ''
  }

  const handleSubmit = () => {
    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }

    const id = addNote(formData.title.trim())
    cleanUp()
    onClose?.()
    return id
  }

  return {
    formData,
    error,
    handleChange,
    handleSubmit,
    cleanUp,
    validate
  }
}