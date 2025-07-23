import {
  Check,
  LoaderCircle,
  X
} from 'lucide-react'
import { status, type StatusVariants } from '@variants/status'
import type { HTMLAttributes } from 'react'

type StatusProps = StatusVariants & HTMLAttributes<HTMLParagraphElement> & {
  state: NonNullable<StatusVariants['variant']>
}

const structure = {
  'success': { Icon: <Check className="w-5 h-5" />, message: 'Changes saved successfully' },
  'error': { Icon: <X className="w-5 h-5" />, message: 'An error occurred while saving changes' },
  'loading': { Icon: <LoaderCircle className="w-5 h-5 animate-spin" />, message: 'Saving...' },
} as const

export const Status = ({ state }: StatusProps) => {
  if (!structure[state]) return null
  const { Icon, message } = structure[state]

  return (
    <p
      className={status({ variant: state })}
      role="status"
      aria-live="polite"
      aria-label={message}
      aria-busy={state === 'loading'}
    >
      {Icon}
      <span>{message}</span>
      <span className="sr-only">{message}</span>
    </p>
  )
}