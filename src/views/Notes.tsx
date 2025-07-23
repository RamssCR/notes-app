import { Header } from "@components/editor/Header"
import { Layout } from "@layouts/Layout"
import { NoNotes } from "@components/editor/NoNotes"
import { NoteEditor } from "@components/editor/NoteEditor"
import { useParams } from "react-router-dom"
import { noteStore } from "@stores/noteStore"
import { Title } from "@components/ui/Title"
import { Text } from "@components/ui/Text"

/**
 * Renders a view to create and manage notes.
 * This component serves as a placeholder for the Notes page,
 * where users can add, edit, and view their notes.
 */
export const Notes = () => {
  const { id } = useParams()
  const { notes, getNoteById, updateNote } = noteStore()
  const note = getNoteById?.(id || '')(noteStore.getState())

  return (
    <Layout>
      <section className="w-full h-full lg:col-span-3 xl:col-span-4 py-4 px-6 flex flex-col items-start">
        <Header />
        {note && (
          <NoteEditor 
            updateNote={updateNote} 
            value={note.content}
            id={id ?? ''} 
          />
        )}
        {notes.length === 0 && !note && <NoNotes />}
        {notes.length > 0 && !note && (
          <article 
            className="w-full h-[83svh] flex flex-col justify-center items-center gap-1 lg:h-full"
            aria-labelledby="welcome-title"
            aria-describedby="welcome-description"
          >
            <Title as="h2" size="3xl" id="welcome-title">Look who's back</Title>
            <Text variant="muted" id="welcome-description">Wanna continue where you left off?</Text>
          </article>
        )}
      </section>
    </Layout>
  )
}