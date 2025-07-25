import { Button } from "@components/ui/Button"
import { Modal } from "@components/ui/Modal"
import { Text } from "@components/ui/Text"
import { noteStore } from "@stores/noteStore"
import { useNavigate } from "react-router-dom"

type NoteComponentProps = {
  readonly id: string
  active?: boolean
  onClose: () => void
}

/**
 * Component that displays a modal for deleting a note.
 * It confirms the deletion and provides options to proceed or cancel.
 */
const DeleteNote = ({ id, active = false, onClose }: NoteComponentProps) => {
  const { deleteNote } = noteStore()
  const navigate = useNavigate()

  const handleDelete = () => {
    deleteNote(id)
    navigate("/")
    onClose()
  }

  const handleCancel = () => onClose()

  return (
    <Modal
      active={active}
      onClose={onClose}
      modalTitle="Delete Note"
      className="z-100"
    >
      <Text size="sm" variant="muted">
        Are you sure you want to delete this note? This action cannot be undone.
      </Text>
      <Text variant="muted" weight="medium" className="mt-4 mb-6">
        No, for real, this is permanent.
      </Text>
      <article className="w-full flex items-center gap-2">
        <Button className="px-5" variant="primary" onClick={handleDelete}>
          Delete
        </Button>
        <Button className="px-5" variant="outline" onClick={handleCancel}>
          Cancel
        </Button>
      </article>
    </Modal>
  )
}

// Exporting as default for code splitting
export default DeleteNote