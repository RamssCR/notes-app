import { describe, expect, test } from 'vitest'
import { sortNotes } from '@utils/sortNotes'

describe('sortNotes', () => {
  test('should sort notes by createdAt in descending order', () => {
    const notes = [
      { id: '1', title: 'Note 1', content: 'Content 1', createdAt: new Date('2023-01-01'), updatedAt: new Date('2023-01-02') },
      { id: '2', title: 'Note 2', content: 'Content 2', createdAt: new Date('2023-02-01'), updatedAt: new Date('2023-02-02') },
      { id: '3', title: 'Note 3', content: 'Content 3', createdAt: new Date('2023-03-01'), updatedAt: new Date('2023-03-02') },
    ]

    const sortedNotes = sortNotes(notes)

    expect(sortedNotes).toEqual([
      { id: '3', title: 'Note 3', content: 'Content 3', createdAt: new Date('2023-03-01'), updatedAt: new Date('2023-03-02') },
      { id: '2', title: 'Note 2', content: 'Content 2', createdAt: new Date('2023-02-01'), updatedAt: new Date('2023-02-02') },
      { id: '1', title: 'Note 1', content: 'Content 1', createdAt: new Date('2023-01-01'), updatedAt: new Date('2023-01-02') },
    ])
  })
})