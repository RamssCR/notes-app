/**
 * Exports a note as a .txt file.
 * It creates a Blob from the note's title and content,
 * then creates a link to download the file.
 */
export const exportNoteAsTxt = (note: { title?: string; content: string }) => {
  const blob = new Blob(
    [`${note.title}\n\n${note.content}`],
    { type: 'text/plain;charset=utf-8' }
  )

  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = `${note.title ?? 'note'}.txt`
  link.click()

  URL.revokeObjectURL(link.href)
}
