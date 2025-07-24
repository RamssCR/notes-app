import type { ComponentProps } from "react"
import { Button } from "@components/ui/Button"
import { Plus } from "lucide-react"
import { classMerger } from "@utils/classMerger"

/**
 * Render a button to create a new note in the sidebar.
 * This component uses the Button component for styling.
 */
export const CreateNote = ({ className, ...props }: ComponentProps<typeof Button>) => {
  return (
    <Button 
      className={classMerger(
        'border-t border-border w-full flex items-center gap-2 justify-start py-6 rounded-none',
        className
      )}
      {...props}
    >
      <Plus className="size-6 text-primary" />
      Create Note
    </Button>
  )
}