import type { MouseEventHandler } from 'react'
import { Button } from '@components/ui/Button'
import { Text } from "@components/ui/Text"
import { Title } from "@components/ui/Title"
import { exportNoteAsTxt } from '@helpers/generateTextFile'
import { noteStore } from '@stores/noteStore'
import { useParams } from 'react-router-dom'

/**
 * Export settings component for managing note export preferences.
 * It allows users to export their notes as a text file.
 */
export const ExportSettings = () => {
  const { id } = useParams()
  const { getNoteById } = noteStore()
  const isExistingId = Boolean(id)

  const note = getNoteById(id || '')(noteStore.getState())
  const handleExport: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    exportNoteAsTxt({
      title: note?.title,
      content: String(note?.content)
    })
  }

  return (
    <article className="w-full flex flex-col items-start gap-0.5 lg:gap-1">
      <Title as="h3" size="lg">Export your note</Title>
      <Text className="text-muted-foreground text-sm">
        Export your note you're currently viewing as a text file to keep a backup or share it with others.
      </Text>
      {!isExistingId && (
        <Text className="text-red-500 text-xs -mt-1">
          You need to open a note or create it first to export it.
        </Text>
      )}
      <Button 
        className="mt-2 px-6" 
        variant="primary"
        disabled={!isExistingId}
        onClick={handleExport}
      >
        Export
      </Button>
    </article>
  )
}