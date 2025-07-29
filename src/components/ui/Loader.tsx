import { 
  type HTMLMotionProps, 
  type Transition, 
  motion 
} from 'motion/react'
import { type LoaderVariants, variants } from '@variants/loader'
import { classMerger } from '@utils/classMerger'

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
  position,
  ...props 
}: LoaderProps) => {
  return (
    <motion.div
      role="status"
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