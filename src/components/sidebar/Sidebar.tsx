import { CreateNote } from "./CreateNote"
import { Note } from "./Note"
import { Text } from "@components/ui/Text"
import { Title } from "@components/ui/Title"
import notes from '@data/notes.json'

/**
 * Sidebar component for the notes application.
 */
export const Sidebar = () => {
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
            {notes.map(note => (
              <Note
                key={note.id}
                id={note.id}
                title={note.title}
              />
            ))}
          </article>
        </section>
      </section>
      <CreateNote className="mt-auto" />
    </aside>
  )
}