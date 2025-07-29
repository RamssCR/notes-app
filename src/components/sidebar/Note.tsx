import type { ComponentProps, MouseEventHandler } from "react"
import type { NoteProps } from "@@types/note"
import { Link } from "@components/ui/Link"
import { Trash2 } from 'lucide-react'
import { classMerger } from "@utils/classMerger"
import { Button } from "@components/ui/Button"

type NoteComponentProps = 
  Pick<NoteProps, 'id' | 'title'> & 
  Omit<ComponentProps<typeof Link>, 'to' | 'title' | 'id'> & {
    active?: boolean
    onDelete?: MouseEventHandler<HTMLButtonElement>
  }

/**
 * Note component for displaying a single note in the sidebar.
 * This component uses the Link component for navigation.
 * It displays the note title and provides a link to the note's detail page.
 */
export const Note = ({ 
  id, 
  title, 
  active = false, 
  onDelete,
  ...props 
}: NoteComponentProps) => {
  const handleDelete: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    e.preventDefault()
    onDelete?.(e)
  }

  return (
    <Link
      to={`/${id}`}
      variant="sidebar"
      className={classMerger(
        'text-sm line-clamp-1 relative group',
        active && 'bg-slate-200 dark:bg-[#2c2b2b]',
      )}
      title={title}
      {...props}
    >
      {title}
      {active && (
        <Button 
          variant="none"
          aria-label="Delete Note"
          onClick={handleDelete}
          className={classMerger(
            'absolute -right-2 top-1/2 -translate-y-1/2 group-hover:opacity-100 transition-opacity focus-visible:opacity-100 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:bg-transparent',
          )}
        >
          <Trash2 className="size-4 hover:text-red-500" aria-hidden="true" />
        </Button>
      )}
      <span className="sr-only">Open note {title}</span>
    </Link>
  )
}