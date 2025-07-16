import type { ComponentProps } from "react"
import type { NoteProps } from "@@types/note"
import { Link } from "@components/ui/Link"

type NoteComponentProps = 
  Pick<NoteProps, 'id' | 'title'> & 
  Omit<ComponentProps<typeof Link>, 'to' | 'title' | 'id'>

/**
 * Note component for displaying a single note in the sidebar.
 * This component uses the Link component for navigation.
 * It displays the note title and provides a link to the note's detail page.
 */
export const Note = ({ id, title, ...props }: NoteComponentProps) => {
  return (
    <Link
      to={`/notes/${id}`}
      variant="sidebar"
      className="text-sm line-clamp-1"
      title={title}
      {...props}
    >
      {title}
      <span className="sr-only">Open note {title}</span>
    </Link>
  )
}