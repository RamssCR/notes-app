import { useState } from 'react'
import { 
  track, 
  thumb, 
  type SwitchVariants 
} from '@variants/switch'
import { classMerger } from '@utils/classMerger'

type SwitchProps = SwitchVariants & {
  checked?: boolean
  onChange?: (checked: boolean) => void
  className?: string
}

/**
 * Component that renders a switch input.
 * It allows toggling between two states (checked/unchecked).
 * It accepts props for checked state, change handler, variant, 
 * size, and additional class names.
 */
export const Switch = ({ 
  checked = false, 
  onChange, 
  variant, 
  size, 
  className 
}: SwitchProps) => {
  const [active, setActive] = useState<boolean>(checked)

  const handleSwitch = () => {
    const toggleActive = !active
    setActive(toggleActive)
    onChange?.(toggleActive)
  }

  return (
    <label
      className={classMerger(
        'relative inline-flex items-center cursor-pointer',
        className
      )}
      aria-label='Switch'
    >
      <input
        type="checkbox"
        className="sr-only peer"
        checked={active}
        onChange={handleSwitch}
        name="switch"
      />
      <div className={track({ variant, size })} />
      <div className={thumb({ variant, size })} />
    </label>
  )
}