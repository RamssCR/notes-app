import { Button } from "@components/ui/Button"
import type { ComponentProps } from "react"

/**
 * A button component with outline variant.
 * It is used for selectable items in the settings.
 */
export const Selectable = ({ ...props }: ComponentProps<typeof Button>) => (
  <Button
    variant="outline"
    {...props}
  />
)