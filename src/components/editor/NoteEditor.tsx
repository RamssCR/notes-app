import type { NoteProps } from "@@types/note"
import { Textarea } from "@components/ui/Textarea"
import { useResizeHeight } from "@hooks/useResizeHeight"
import { type ComponentProps, useRef } from "react"

type NoteEditorProps = ComponentProps<typeof Textarea> & {
  updateNote: (id: string, updatedNote: Partial<NoteProps>) => void
  id: string
}

export const NoteEditor = ({ updateNote, value, id, ...props }: NoteEditorProps) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  useResizeHeight(textareaRef, String(value))

  return (
    <Textarea 
      ref={textareaRef}
      name="content"
      className="mt-6"
      spellCheck="false"
      placeholder="Start writing your note..."
      onChange={(e) => updateNote(id, { content: e.target.value })}
      {...props}
      value={value ?? ''}
    />
  )
}