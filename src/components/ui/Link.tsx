import { type LinkProps, Link as RouterLink } from 'react-router-dom'
import { type LinkVariants, variants } from '@variants/link'
import { classMerger } from '@utils/classMerger'

/**
 * Renders a styled link component using React Router's Link.
 * It is used for navigation within the application.
 */
export const Link = ({ 
  variant, 
  className, 
  ...props 
}: LinkProps & LinkVariants) => (
  <RouterLink 
    className={classMerger(
      variants({ variant }), 
      className
    )}
    {...props} 
  />
)