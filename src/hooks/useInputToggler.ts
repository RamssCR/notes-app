import { 
  type ChangeEvent,
  type KeyboardEventHandler,
  useRef, 
  useEffect, 
  useState, 
} from "react"

type UseInputToggler = {
  initialTitle?: string
  onUpdate?: (title: string) => void
}

/**
 * Custom hook to manage the editing state of an input field.
 * It allows toggling between editing and viewing modes,
 * handles input changes, and manages focus on the input field.
 */
export const useInputToggler = ({ initialTitle = "New Note", onUpdate }: UseInputToggler) => {
  const [title, setTitle] = useState(initialTitle)
  const [isEditing, setIsEditing] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [isEditing])

  /**
   * Handles the blur or submit action for the input field.
   * It sets the editing state to false and calls the onUpdate callback with the current title.
   */
  const handleBlurOrSubmit = () => {
    const value = title.trim() === "" ? initialTitle : title

    setTitle(value)
    setIsEditing(false)
    onUpdate?.(value)
  }

  /**
   * Handles input changes for the input field.
   * It updates the title state with the current input value.
   */
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)

  /**
   * Handles keyboard events for the input field.
   * It triggers the blur or submit action on Enter key press
   * and cancels editing on Escape key press.
   */
  const handleTrigger: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') handleBlurOrSubmit()
    if (e.key === 'Escape') setIsEditing(false)
  }

  /**
   * Activates the editing state for the input field.
   * This function sets the isEditing state to true,
   * allowing the input field to be focused and edited.
   */
  const activateEditing = () => setIsEditing(true)

  return {
    isEditing,
    title,
    inputRef,
    handleInput,
    handleBlurOrSubmit,
    handleTrigger,
    activateEditing,
    _debug: {
      setIsEditing,
      setTitle,
    }
  }
}
