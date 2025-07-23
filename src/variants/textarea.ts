import { cva, type VariantProps } from 'class-variance-authority'

export const textarea = cva(
  'flex w-full rounded-sm bg-transparent resize-none px-1.5 text-base focus-visible:outline-none focus:ring-0 focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'text-primary placeholder:text-primary/60',
      },
      dimension: {
        sm: 'min-h-[4em]',
        md: 'min-h-[6em]',
        lg: 'min-h-[8em]',
        full: 'min-h-[screen]'
      }
    },
    defaultVariants: {
      variant: 'default',
      dimension: 'md',
    }
  }
)

export type TextareaVariants = VariantProps<typeof textarea>