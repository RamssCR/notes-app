import type { 
  ComponentProps,
  ForwardRefExoticComponent, 
  RefAttributes 
} from 'react'
import { Button } from '@components/ui/Button'
import type { LucideProps } from 'lucide-react'

type SettingButtonProps = ComponentProps<typeof Button> & {
  Icon: ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>>
  label: string
}

/**
 * Renders a button for settings in the editor.
 * This component uses the Button component for styling and accepts an Icon and label.
 */
export const SettingButton = ({ Icon, label, ...props }: SettingButtonProps) => (
  <Button
    size="icon"
    className="rounded-full"
    {...props}
  >
    <Icon aria-hidden="true" className="size-5 text-primary" />
    <span className="sr-only">{label}</span>
  </Button>
)