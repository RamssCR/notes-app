import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { CreateNote } from "@components/editor/CreateNote"
import { CreateNote as CreateNoteButton } from "./CreateNote"
import { DeleteNote } from "@components/editor/DeleteNote"
import { Note } from "./Note"
import { Text } from "@components/ui/Text"
import { Title } from "@components/ui/Title"
import { noteStore } from "@stores/noteStore"

/**
 * Sidebar component for the notes application.
 */
export const Sidebar = () => {
  const { id } = useParams<{ id: string }>()
  const { notes } = noteStore()
  const [active, setActive] = useState(false)
  const [deleteActive, setDeleteActive] = useState(false)
  const toggle = () => setActive(!active)
  const toggleDelete = () => setDeleteActive(!deleteActive)
  const navigateTo = useNavigate()

  useEffect(() => {
    if (!id) {
      navigateTo('/')
    }
  }, [id, navigateTo])

  return (
    <aside className="hidden bg-muted w-full h-[100svh] lg:col-span-1 xl:col-span-1 lg:flex flex-col items-start border-r border-border">
      <section className="flex flex-col items-start gap-4 py-4 px-6">
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
            {notes
              .slice()
              .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
              .map(note => (
              <Note
                key={note.id}
                id={note.id}
                title={note.title}
                active={id === note.id}
                onDelete={toggleDelete}
              />
            ))}
          </article>
        </section>
      </section>
      <CreateNoteButton 
        className="mt-auto" 
        onClick={toggle}
        aria-label="Create Note"
      />
      <CreateNote
        active={active}
        onClose={toggle}
      />
      <DeleteNote
        id={id!}
        active={deleteActive}
        onClose={toggleDelete}
      />
    </aside>
  )
}