import { NotepadText, Plus } from "lucide-react"
import { Button } from "@components/ui/Button"
import { CreateNote } from "./CreateNote"
import { Text } from "@components/ui/Text"
import { Title } from "@components/ui/Title"
import { useToggle } from "@hooks/useToggle"

/**
 * Displays a message when there are no notes available.
 * This component encourages users to create their first note.
 */
export const NoNotes = () => {
  const { active, toggle } = useToggle()

  return (
    <article
      className="w-full h-[83svh] flex flex-col items-center justify-center gap-1 lg:h-full"
      aria-labelledby="no-notes-title"
      aria-describedby="no-notes-description"
      role="region"
    >
      <NotepadText className="w-8 h-8 text-muted-foreground" />
      <Title
        id="no-notes-title"
        as="h3"
        size="lg"
        className="text-muted-foreground text-center"
      >
        It looks quite empty here...
      </Title>
      <Text
        id="no-notes-description"
        className="text-muted-foreground -mt-1 text-center"
      >
        Don't be shy, we don't judge. Create your first note!
      </Text>
      <Button 
        className="flex items-center gap-2 mt-5 font-medium" 
        variant="primary"
        onClick={toggle}
      >
        <Plus className="size-4" />
        Create Note
      </Button>
      <CreateNote
        active={active}
        onClose={toggle}
      />
    </article>
  )
}