import { beforeEach, describe, expect, test, vi } from 'vitest'
import { noteStore, customStorage } from '@stores/noteStore'

describe('noteStore', () => {
  beforeEach(() => {
    localStorage.clear()
    noteStore.persist.clearStorage()
    noteStore.setState({ notes: [] })
  })

  test('should add a note', () => {
    const title = 'Test Note'
    const id = noteStore.getState().addNote(title)
    const notes = noteStore.getState().notes
    expect(notes).toHaveLength(1)
    expect(notes[0].title).toBe(title)
    expect(notes[0].id).toBe(id)
  })

  test('should update a note', () => {
    const title = 'Test Note'
    const id = noteStore.getState().addNote(title)
    const updatedContent = 'Updated content'
    noteStore.getState().updateNote(id, { content: updatedContent })
    const note = noteStore.getState().getNoteById(id)(noteStore.getState())
    expect(note?.content).toBe(updatedContent)
  })

  test('should retrieve a note by ID', () => {
    const title = 'Test Note'
    const id = noteStore.getState().addNote(title)
    const note = noteStore.getState().getNoteById(id)(noteStore.getState())
    expect(note?.title).toBe(title)
  })

  test('should hydrate from localStorage', async () => {
    const now = new Date().toISOString()
    const mockedData = {
      state: {
        notes: [
          {
            id: '1',
            title: 'Restored Note',
            content: 'Lorem',
            createdAt: now,
            updatedAt: now,
          },
        ],
      },
      version: 0,
    }

    localStorage.setItem('note-storage', JSON.stringify(mockedData))
    const newStore = await import('@stores/noteStore').then((mod) => mod.noteStore)

    const notes = newStore.getState().notes
    expect(notes).toHaveLength(1)
    expect(notes[0].title).toBe('Restored Note')
  })

  test('should add and delete a note', async () => {
    const spy = vi.spyOn(localStorage, 'setItem')

    const id = noteStore.getState().addNote('Nota de prueba')
    expect(noteStore.getState().notes).toHaveLength(1)

    noteStore.getState().deleteNote(id)

    const state = noteStore.getState()
    expect(state.notes).toHaveLength(0)

    spy.mockRestore()
  })

  test('should clear storage when persist.clearStorage() is called', () => {
    const spy = vi.spyOn(customStorage, 'removeItem')
    noteStore.persist.clearStorage()

    expect(spy).toHaveBeenCalledWith('note-storage')
    spy.mockRestore()
  })

  test('should update a note and persist changes', () => {
    const title = 'Test Note'
    const id = noteStore.getState().addNote(title)
    const updatedContent = 'Updated content'
    noteStore.getState().addNote('Another Note')
    
    noteStore.getState().updateNote(id, { content: updatedContent })
    
    const note = noteStore.getState().getNoteById(id)(noteStore.getState())
    expect(note?.content).toBe(updatedContent)
  })
})