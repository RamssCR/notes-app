import type { NoteProps } from '@@types/note'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type NoteStore = {
  notes: NoteProps[]
  addNote: (title: string) => void
  updateNote: (id: string, updatedNote: Partial<NoteProps>) => void
  deleteNote: (id: string) => void
}

export const noteStore = create<NoteStore>()(
  persist(
    (set) => ({
      notes: [],
      addNote: (title) =>
        set((state) => ({
          notes: [
            ...state.notes,
            {
              title,
              id: crypto.randomUUID(),
              content: '',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
        })),
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
