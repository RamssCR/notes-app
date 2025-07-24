import { Header } from "@components/editor/Header"
import { Layout } from "@layouts/Layout"
import { NoNotes } from "@components/editor/NoNotes"
import { NoteEditor } from "@components/editor/NoteEditor"
import { WelcomeBack } from "@components/editor/WelcomeBack"
import { noteStore } from "@stores/noteStore"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

/**
 * Renders a view to create and manage notes.
 * This component serves as a placeholder for the Notes page,
 * where users can add, edit, and view their notes.
 */
export const Notes = () => {
  const { id } = useParams()
  const { notes, getNoteById, updateNote } = noteStore()
  const note = getNoteById(id || '')(noteStore.getState())

  const hasNotes = notes.length > 0
  const hasSelectedNote = Boolean(note)

  useEffect(() => {
    const title = document.title
    if (note) {
      document.title = note.title
    }

    return () => {
      document.title = title
    }
  }, [note])

  return (
    <Layout>
      <section className="w-full h-full lg:col-span-3 xl:col-span-4 py-4 px-6 flex flex-col items-start">
        <Header />
        {hasSelectedNote && (
          <NoteEditor 
            updateNote={updateNote} 
            value={note?.content}
            id={id ?? ''} 
          />
        )}
        {!hasNotes && !hasSelectedNote && <NoNotes />}
        {hasNotes && !hasSelectedNote && <WelcomeBack />}
      </section>
    </Layout>
  )
}