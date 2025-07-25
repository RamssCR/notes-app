import { FontSettings } from './FontSettings'
import { ExportSettings } from './ExportSettings'
import { Modal } from "@components/ui/Modal"
import { Text } from "@components/ui/Text"
import { ThemeSettings } from './ThemeSettings'

type SettingsProps = {
  active?: boolean
  onClose?: () => void
}

/**
 * Settings component for managing user preferences.
 * It allows users to change the theme, select typography, and export notes.
 */
const Settings = ({ active = true, onClose }: SettingsProps) => {
  return (
    <Modal
      onClose={onClose}
      active={active}
      modalTitle="General Settings"
    >
      <Text className="text-muted-foreground font-medium text-sm">
        Customize your experience when creating notes.
      </Text>
      <section className="w-full flex flex-col items-start gap-5.5 mt-5 pr-2.5">
        <ThemeSettings />
        <FontSettings />
        <ExportSettings />
      </section>
    </Modal>
  )
}

// Exporting as default for code splitting
export default Settings