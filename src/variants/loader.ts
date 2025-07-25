import { cva, type VariantProps } from 'class-variance-authority'

export const variants = cva(
  'rounded-full border-4 bg-transparent border-muted-foreground/50',
  {
    variants: {
      variant: {
        default: 'border-t-primary'
      },
      size: {
        default: 'size-6',
        sm: 'size-4',
        lg: 'size-10',
        xl: 'size-12',
        '2xl': 'size-16',
        '3xl': 'size-24'
      },
      position: {
        default: 'fixed z-100 bottom-2 right-2',
        development: 'fixed z-100 bottom-7 right-2'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      position: 'default'
    }
  }
)

export type LoaderVariants = VariantProps<typeof variants>