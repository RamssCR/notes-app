import { cva, type VariantProps } from 'class-variance-authority'

export const variants = cva(
  'flex w-full rounded-md border bg-transparent px-3 py-1 shadow-sm transition-colors file:border-0 file:font-medium file:rounded-lg file:mr-2 file:px-2 hover:file:cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-muted text-primary file:text-background file:bg-primary hover:file:bg-muted placeholder:text-muted-foreground/60',
        transparent: 'border-transparent text-primary file:text-background file:bg-primary hover:file:bg-muted placeholder:text-muted-foreground/60',
      },
      dimension: {
        sm: 'h-9 text-sm file:py-0.75',
        md: 'h-10 text-base md:text-sm file:text-sm file:py-1.25',
        lg: 'h-11 text-lg md:text-base file:text-sm file:py-1.75',
      },
    },
    defaultVariants: {
      variant: 'default',
      dimension: 'md',
    },
  }
)

export type InputVariants = VariantProps<typeof variants>