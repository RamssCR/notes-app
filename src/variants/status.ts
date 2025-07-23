import { cva, type VariantProps } from 'class-variance-authority'

export const status = cva(
  'text-xs inline-flex items-center gap-1 font-medium',
  {
    variants: {
      variant: {
        success: 'text-green-600 dark:text-green-400',
        error: 'text-red-600 dark:text-red-400',
        loading: 'text-blue-600 dark:text-blue-400',
      }
    },
    defaultVariants: {
      variant: 'success',
    }
  }
)

export type StatusVariants = VariantProps<typeof status>