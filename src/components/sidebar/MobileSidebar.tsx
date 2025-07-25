import { Suspense, lazy } from "react"
import { CreateNote as CreateNoteButton } from "./CreateNote"
import { Loader } from "@components/ui/Loader"
import { Note } from "./Note"
import { Sheet } from "@components/ui/Sheet"
import { Text } from "@components/ui/Text"
import { Title } from "@components/ui/Title"
import { sortNotes } from "@utils/sortNotes"
import { useSidebarToggle } from "@hooks/useSidebarToggle"

const DeleteNote = lazy(() => import("@components/editor/DeleteNote"))
const CreateNote = lazy(() => import("@components/editor/CreateNote"))

type MobileSidebarProps = {
  active: boolean
  toggle: () => void
}

/**
 * Mobile sidebar component for managing notes.
 * This component provides a sidebar that allows users to view, create, and delete notes on mobile devices.
 * It includes a list of notes, a button to create new notes, and a delete confirmation dialog.
 */
export const MobileSidebar = ({ active, toggle }: MobileSidebarProps) => {
  const {
    noteActive,
    deleteActive,
    toggleDelete,
    toggleNoteCreator,
    notes,
    id,
  } = useSidebarToggle()

  return (
    <Sheet
      active={active}
      onClose={toggle}
      cardClassName="p-0"
    >
      <aside className="flex w-full h-[100svh] flex-col items-start">
        <section className="flex flex-col items-start gap-4 py-6 px-6">
          <article className="flex flex-col items-start gap-1">
            <Title size="2xl" as="h2">Notes</Title>
            <Text size="sm" variant="muted" weight="medium">
              Yes, the generic app yet another React developer has made is here.
            </Text>
          </article>
          <section className="w-full flex flex-col items-start gap-2 mt-4">
            <Text variant="muted" weight="medium" className="ml-1.5">
              Your notes
            </Text>
            <article className="w-full flex flex-col items-start gap-0.5 overflow-y-auto">
              {sortNotes(notes)
                .map(note => (
                  <Note
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    active={id === note.id}
                    onClick={toggle}
                    onDelete={toggleDelete}
                  />
                ))}
            </article>
          </section>
        </section>
        <CreateNoteButton
          className="mt-auto"
          onClick={toggleNoteCreator}
          aria-label="Create Note"
        />
        <Suspense fallback={<Loader />}>
          <CreateNote
            active={noteActive}
            onClose={toggleNoteCreator}
          />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <DeleteNote
            id={id!}
            active={deleteActive}
            onClose={toggleDelete}
          />
        </Suspense>
      </aside>
    </Sheet>
  )
}