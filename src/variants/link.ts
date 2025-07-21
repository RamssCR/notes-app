import { cva, type VariantProps } from 'class-variance-authority'

export const variants = cva(
  'focus:outline-none focus-visible:bg-gray-200 dark:focus-visible:bg-[#2c2b2b] transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-background text-primary',
        sidebar: 'w-full p-2 rounded-md text-primary hover:bg-gray-200 dark:hover:bg-[#2c2b2b]',
        none: 'bg-transparent text-primary',
      }
    },
    defaultVariants: {
      variant: 'default',
    }
  }
)

export type LinkVariants = VariantProps<typeof variants>