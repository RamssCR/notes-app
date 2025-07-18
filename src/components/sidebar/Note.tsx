import type { ComponentProps } from "react"
import type { NoteProps } from "@@types/note"
import { Link } from "@components/ui/Link"
import { classMerger } from "@utils/classMerger"

type NoteComponentProps = 
  Pick<NoteProps, 'id' | 'title'> & 
  Omit<ComponentProps<typeof Link>, 'to' | 'title' | 'id'> & {
    active?: boolean
  }

/**
 * Note component for displaying a single note in the sidebar.
 * This component uses the Link component for navigation.
 * It displays the note title and provides a link to the note's detail page.
 */
export const Note = ({ id, title, active = false, ...props }: NoteComponentProps) => {
  return (
    <Link
      to={`/${id}`}
      variant="sidebar"
      className={classMerger(
        'text-sm line-clamp-1',
        active && 'bg-slate-200 dark:bg-[#2c2b2b]',
      )}
      title={title}
      {...props}
    >
      {title}
      <span className="sr-only">Open note {title}</span>
    </Link>
  )
}