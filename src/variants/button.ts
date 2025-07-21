import { cva, type VariantProps } from 'class-variance-authority'

export const variants = cva(
  'flex items-center justify-center rounded-sm text-sm font-medium transition-all hover:cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-transparent hover:bg-gray-200 dark:hover:bg-[#2c2b2b] text-primary',
        primary: 'bg-primary text-background hover:bg-primary/90',
        ghost: 'bg-ghost text-light hover:pointer-events-none',
        outline: 'bg-transparent text-primary border border-border hover:bg-gray-200 dark:hover:bg-[#2c2b2b]',
        none: 'bg-transparent text-primary hover:bg-transparent',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3 py-1',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export type ButtonVariants = VariantProps<typeof variants>