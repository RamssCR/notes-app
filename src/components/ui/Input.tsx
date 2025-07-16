import type { InputHTMLAttributes, Ref } from 'react'
import { type InputVariants, variants } from '@variants/input'
import { classMerger } from '@utils/classMerger'

type InputProps = InputHTMLAttributes<HTMLInputElement> & InputVariants & {
  ref?: Ref<HTMLInputElement>
}

/**
 * Renders an input field with customizable styles and dimensions.
 * This component uses class-variance-authority for styling variants.
 */
export const Input = ({ 
  className, 
  variant, 
  dimension, 
  type = "text", 
  ...props 
}: InputProps) => {
  return (
    <input
      type={type}
      className={classMerger(
        variants({ variant, dimension }),
        className
      )}
      {...props}
    />
  )
}