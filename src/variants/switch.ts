import { cva, type VariantProps } from 'class-variance-authority'

export const track = cva(
  'rounded-full transition-all',
  {
    variants: {
      variant: {
        default: 'bg-muted-foreground peer-checked:bg-primary',
      },
      size: {
        sm: 'w-11 h-6',
        md: 'w-13 h-7',
        lg: 'w-15 h-8',
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    }
  }
)

export const thumb = cva(
  'absolute rounded-full transition-all',
  {
    variants: {
      variant: {
        default: 'bg-background',
      },
      size: {
        sm: 'w-4.5 h-4.5 left-[0.22rem] top-0.75 peer-checked:translate-x-5',
        md: 'w-5 h-5 left-1 top-1 peer-checked:translate-x-6',
        lg: 'w-6 h-6 left-1 top-1 peer-checked:translate-x-7',
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    }
  }
)

export type SwitchVariants = VariantProps<typeof track>