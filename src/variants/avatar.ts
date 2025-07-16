import { cva, type VariantProps } from 'class-variance-authority'

export const avatar = cva(
  'rounded-full max-w-14 max-h-14 overflow-hidden relative shrink-0',
  {
    variants: {
      size: {
        sm: 'size-8',
        md: 'size-10',
        lg: 'size-12',
        xl: 'size-14',
      }
    },
    defaultVariants: {
      size: 'md',
    }
  }
)

export const fallback = cva(
  'aspect-square max-w-14 max-h-14 rounded-full flex items-center justify-center text-center font-medium',
  {
    variants: {
      size: {
        sm: 'size-8',
        md: 'size-10',
        lg: 'size-12',
        xl: 'size-14',
      },
      variants: {
        primary: 'bg-background text-primary',
      }
    },
    defaultVariants: {
      size: 'md',
      variants: 'primary',
    }
  }
)

export type AvatarVariants = VariantProps<typeof avatar>
export type AvatarFallbackVariants = VariantProps<typeof fallback>