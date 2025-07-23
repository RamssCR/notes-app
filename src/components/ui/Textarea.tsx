import type { TextareaHTMLAttributes, Ref } from 'react'
import { type TextareaVariants, textarea } from '@variants/textarea'
import { classMerger } from '@utils/classMerger'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & TextareaVariants & {
  ref?: Ref<HTMLTextAreaElement>
}

/**
 * Component that renders a styled textarea element.
 * It accepts various props to customize its appearance and behavior.
 */
export const Textarea = ({ 
  className, 
  variant, 
  dimension, 
  ref,
  ...props 
}: TextareaProps) => (
  <textarea
    ref={ref}
    className={classMerger(
      textarea({ variant, dimension }),
      className
    )}
    {...props}
  />
)
