import type { LabelHTMLAttributes, Ref } from 'react'
import { type LabelVariants, variants } from '@variants/label'
import { classMerger } from '@utils/classMerger'

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & LabelVariants & {
  ref?: Ref<HTMLLabelElement>
}

/**
 * Label component for displaying text labels.
 * It supports different variants, sizes, and weights for customization.
 */
export const Label = ({
  className,
  variant,
  size,
  weight,
  ...props
}: LabelProps) => (
  <label
    className={classMerger(
      variants({ variant, size, weight }),
      className
    )}
    {...props}
  />
)
