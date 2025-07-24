import { 
  type ChangeEventHandler, 
  type ComponentProps, 
  useEffect, 
  useRef, 
  useState 
} from "react"
import type { NoteProps } from "@@types/note"
import { Textarea } from "@components/ui/Textarea"
import { useDebounce } from "@hooks/useDebounce"
import { useResizeHeight } from "@hooks/useResizeHeight"

type NoteEditorProps = ComponentProps<typeof Textarea> & {
  updateNote: (id: string, updatedNote: Partial<NoteProps>) => void
  id: string
}

/**
 * The main editor component for notes.
 * This component allows users to edit the content of a note.
 * It uses a debounced function to update the note content
 * to avoid excessive updates while typing.
 */
export const NoteEditor = ({ updateNote, value, id, ...props }: NoteEditorProps) => {
  const [content, setContent] = useState(value ?? '')
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  useResizeHeight(textareaRef, String(content))

  useEffect(() => {
    setContent(value ?? '')
  }, [value])

  const debouncedUpdate = useDebounce(
    (value: string) => updateNote(id, { content: value }),
    500,
  )

  const handleContent: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value)
    debouncedUpdate(e.target.value)
  }

  return (
    <Textarea 
      ref={textareaRef}
      name="content"
      className="mt-6"
      dimension="lg"
      spellCheck="false"
      placeholder="Start writing your note..."
      value={content}
      onChange={handleContent}
      {...props}
    />
  )
}