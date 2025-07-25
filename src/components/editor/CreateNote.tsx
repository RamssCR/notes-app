import type { ChangeEventHandler } from 'react'
import { Button } from '@components/ui/Button'
import { Input } from '@components/ui/Input'
import { InputError } from './InputError'
import { Label } from '@components/ui/Label'
import { Modal } from '@components/ui/Modal'
import { Text } from '@components/ui/Text'
import { useCreateNoteHandler } from '@hooks/useCreateNoteHandler'
import { useNavigate } from 'react-router-dom'

type CreateNoteProps = {
  active?: boolean
  onClose: () => void
}

/**
 * Display a modal for creating a new note.
 * This component is a placeholder for the note creation functionality.
 */
const CreateNote = ({ active = false, onClose }: CreateNoteProps) => {
  const {
    formData,
    error,
    handleChange,
    handleSubmit,
    cleanUp,
  } = useCreateNoteHandler({ onClose })
  const navigateTo = useNavigate()

  const handleInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target
    handleChange(name, value)
  }

  const handleClose = () => {
    cleanUp()
    onClose()
  }

  const handleCreateNote = () => {
    const id = handleSubmit()
    if (id) navigateTo(`/${id}`)
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
          onChange={handleInput}
          placeholder="e.g. I failed chemistry, now I'm in serious trouble..."
          className="border border-border"
        />
        {error && <InputError error={error} />}
      </article>
      <Button
        className="px-6 mt-2"
        variant="primary"
        onClick={handleCreateNote}
      >
        Create Note
      </Button>
    </Modal>
  )
}

// Exporting as default for code splitting purposes
export default CreateNote