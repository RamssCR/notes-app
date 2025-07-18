import type { NoteProps } from '@@types/note'
import { Input } from '@components/ui/Input'
import { Title } from '@components/ui/Title'
import { useInputToggler } from '@hooks/useInputToggler'
import { noteStore } from '@stores/noteStore'
import { useNavigate } from 'react-router-dom'

/**
 * Renders an editable title component.
 * This component allows users to edit the title of a note.
 */
export const EditableTitle = ({ note }: { note?: NoteProps }) => {
  const { updateNote } = noteStore()
  const navigateTo = useNavigate()

  const { 
    isEditing, 
    title, 
    inputRef, 
    handleInput, 
    handleBlurOrSubmit, 
    handleTrigger, 
    activateEditing 
  } = useInputToggler({ 
    initialTitle: note?.title,
    id: note?.id || '',
    onUpdate: updateNote as unknown as (id: string, { title }: { title: string }) => void,
  })

  if (!note) {
    navigateTo('/')
    return null
  }

  return (
    <div className="w-full flex items-center gap-3">
      {isEditing ? (
        <Input
          ref={inputRef}
          value={title}
          onChange={handleInput}
          onBlur={handleBlurOrSubmit}
          onKeyDown={handleTrigger}
          className="flex-1/2"
          variant="transparent"
        />
      ) : (
        <Title 
          size="2xl" 
          onClick={activateEditing}
          className="transition-colors hover:cursor-pointer p-1 border-2 border-transparent rounded-lg hover:border-primary"
        >
          {title}
        </Title>
      )}
    </div>
  )
}