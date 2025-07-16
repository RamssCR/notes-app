import {
  type AvatarFallbackVariants,
  avatar,
  fallback,
} from '@variants/avatar'
import type { ImgHTMLAttributes } from 'react'
import { classMerger } from '@utils/classMerger'

type AvatarProps = AvatarFallbackVariants & ImgHTMLAttributes<HTMLImageElement> & {
  fallbackText?: string
}

/**
 * Renders an avatar component with optional fallback text.
 * It is designed to display a user's profile picture, and 
 * if the image fails to load, it shows a fallback text.
 */
export const Avatar = ({ 
  className, 
  size, 
  variants, 
  fallbackText, 
  ...props 
}: AvatarProps) => {
  return (
    <div 
      className={classMerger(avatar({ size }), className)}
    >
      <img
        className="rounded-full"
        {...props}
      />
      {fallbackText && (
        <div 
          className={classMerger(fallback({ size, variants }))}
        >
          {fallbackText}
        </div>
      )}
    </div>
  )
}