import { type LoaderVariants, variants } from '@variants/loader'
import { type HTMLMotionProps, type Transition, motion } from 'motion/react'
import { classMerger } from '@utils/classMerger'
import { DEV } from '@utils/env.config'

type LoaderProps = HTMLMotionProps<'div'> & LoaderVariants

const transition: Transition = {
  duration: 1,
  repeat: Infinity,
  ease: 'easeInOut'
}

/**
 * Component that renders a loading spinner.
 * It uses motion for animation and class-variance-authority for styling.
 */
export const Loader = ({ 
  className,
  variant,
  size, 
  position = DEV ? 'development' : 'default',
  ...props 
}: LoaderProps) => {
  return (
    <motion.div
      className={classMerger(
        variants({ variant, size, position }),
        className
      )}
      animate={{ rotate: 360 }}
      transition={transition}
      {...props}
    />
  )
}