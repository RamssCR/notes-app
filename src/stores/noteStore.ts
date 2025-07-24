import type { NoteProps } from '@@types/note'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type NoteStore = {
  notes: NoteProps[]
  addNote: (title: string) => string
  updateNote: (id: string, updatedNote: Partial<NoteProps>) => void
  deleteNote: (id: string) => void
  getNoteById: (id: string) => (state: NoteStore) => NoteProps | undefined
}

export const noteStore = create<NoteStore>()(
  persist(
    (set) => ({
      notes: [],
      addNote: (title) => {
        const id = crypto.randomUUID()
        set((state) => ({
          notes: [
            ...state.notes,
            {
              title,
              id,
              content: '',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
        }))
        return id
      },
      updateNote: (id, updatedNote) =>
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id
              ? { ...note, ...updatedNote, updatedAt: new Date() }
              : note
          ),
        })),
      deleteNote: (id) =>
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id),
        })),
      getNoteById: (id) =>
        (state: NoteStore) => state.notes.find((note) => note.id === id),
      getNotes: () => (state: NoteStore) => state.notes,
    }),
    {
      name: 'note-storage',
      storage: {
        getItem: (name) => {
          const str = localStorage.getItem(name)
          if (!str) return null
          const parsed = JSON.parse(str)
          parsed.state.notes = parsed.state.notes.map((note: unknown) => ({
            ...(note as NoteProps),
            createdAt: new Date((note as NoteProps).createdAt),
            updatedAt: new Date((note as NoteProps).updatedAt),
          }))
          return parsed
        },
        setItem: (name, value) => {
          localStorage.setItem(name, JSON.stringify(value))
        },
        removeItem: (name) => {
          localStorage.removeItem(name)
        },
      },
    }
  )
)
