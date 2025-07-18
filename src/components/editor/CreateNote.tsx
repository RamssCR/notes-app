import { 
  type ChangeEventHandler, 
  type MouseEventHandler,
  useState, 
} from 'react'
import { Button } from '@components/ui/Button'
import { Input } from '@components/ui/Input'
import { Label } from '@components/ui/Label'
import { Modal } from '@components/ui/Modal'
import { Text } from '@components/ui/Text'
import { InputError } from './InputError'
import { noteStore } from '@stores/noteStore'

type CreateNoteProps = {
  active?: boolean
  onClose?: () => void
}

/**
 * Display a modal for creating a new note.
 * This component is a placeholder for the note creation functionality.
 */
export const CreateNote = ({ active = false, onClose }: CreateNoteProps) => {
  const [formData, setFormData] = useState({ title: '' })
  const [error, setError] = useState('')
  const { addNote } = noteStore()

  const cleanUp = () => {
    setFormData({ title: '' })
    setError('')
  }

  // TODO: Implement a debounced function to handle note creation
  // This will help in reducing the number of state updates and re-renders.
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target
    setError('')
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (!formData.title.trim()) {
      setError('Title is required')
      return
    }

    if (formData.title.length > 30) {
      setError('Title must be less than 30 characters')
      return
    }

    setError('')
    addNote(formData.title)
    onClose?.()
  }

  const handleClose = () => {
    cleanUp()
    onClose?.()
  }

  return (
    <Modal
      onClose={handleClose}
      active={active}
      modalTitle="Create Note"
    >
      <Text className="text-muted-foreground font-medium text-sm mr-2">
        Great to see you here! Now, let's get started by creating your first note.
      </Text>
      <article className="w-full flex flex-col items-start gap-2 my-6 pr-3">
        <Label htmlFor="title">How you want to title your note?</Label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g. I failed chemistry, now I'm in serious trouble..."
          className="border border-border"
        />
        {error && <InputError error={error} />}
      </article>
      <Button
        className="px-6 mt-2"
        variant="primary"
        onClick={handleClick}
      >
        Create Note
      </Button>
    </Modal>
  )
}