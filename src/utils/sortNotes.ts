import type { NoteProps } from "@@types/note"

/**
 * Sorts an array of notes by their creation date in descending order.
 * This function creates a shallow copy of the notes array and sorts it,
 * ensuring that the original array remains unchanged.
 */
export const sortNotes = (notes: NoteProps[]): NoteProps[] =>
  [...notes].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())