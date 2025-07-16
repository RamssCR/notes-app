import { cva, type VariantProps } from 'class-variance-authority'

export const variants = cva(
  '',
  {
    variants: {
      variant: {
        default: 'text-primary',
        muted: 'text-muted-foreground',
      },
      size: {
        default: 'text-base',
        xxs: 'text-[0.625em]',
        xs: 'text-xs',
        sm: 'text-sm',
        lg: 'text-lg',
      },
      weight: {
        default: 'font-medium',
        thin: 'font-thin',
        extralight: 'font-extralight',
        light: 'font-light',
        normal: 'font-normal',
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      weight: 'default',
    },
  }
)

export type LabelVariants = VariantProps<typeof variants>