import { Button } from '@components/ui/Button'
import { Input } from '@components/ui/Input'
import { Label } from '@components/ui/Label'
import { Modal } from '@components/ui/Modal'
import { Text } from '@components/ui/Text'

type CreateNoteProps = {
  active?: boolean
  onClose?: () => void
}

/**
 * Display a modal for creating a new note.
 * This component is a placeholder for the note creation functionality.
 */
export const CreateNote = ({ active = false, onClose }: CreateNoteProps) => {
  return (
    <Modal
      onClose={onClose}
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
          placeholder="e.g. I fail chemistry, now I'm in serious trouble..."
          className="border border-border"
        />
      </article>
      <Button
        className="px-6 mt-2"
        variant="primary"
      >
        Create Note
      </Button>
    </Modal>
  )
}