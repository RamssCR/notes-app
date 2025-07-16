import { Button } from '@components/ui/Button'
import { Modal } from "@components/ui/Modal"
import { Selectable } from './Selectable'
import { Switch } from "@components/ui/Switch"
import { Text } from "@components/ui/Text"
import { Title } from "@components/ui/Title"
import fonts from '@data/fonts.json'
import { themeStore } from "@stores/themeStore"
import { classMerger } from '@utils/classMerger'
import { fontStore } from '@stores/fontStore'
import type { MouseEventHandler } from 'react'

type SettingsProps = {
  active?: boolean
  onClose?: () => void
}

/**
 * Settings component for managing user preferences.
 * It allows users to change the theme, select typography, and export notes.
 */
export const Settings = ({ active = true, onClose }: SettingsProps) => {
  const { font: storedFont, setFont } = fontStore()
  const { theme, setTheme } = themeStore()

  const handleThemeChange = () => setTheme(theme === 'light' ? 'dark' : 'light')

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = (e.target as HTMLElement).closest<HTMLDivElement>('[data-font-id]')
    if (target) {
      const fontId = target.dataset.fontId
      if (fontId) setFont(fontId)
    }
  }

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
        <article className="w-full flex flex-col items-start gap-0.5 lg:gap-1">
          <Title as="h3" size="lg">Theme</Title>
          <Text className="text-muted-foreground text-sm">
            We know you can switch themes in the editor, but it will also be here in the settings.
          </Text>
          <Switch
            checked={theme === 'dark'}
            onChange={handleThemeChange}
            className="mt-2"
            size="sm"
          />
        </article>
        <article className="w-full flex flex-col items-start gap-0.5 lg:gap-1">
          <Title as="h3" size="lg">Typography</Title>
          <Text className="text-muted-foreground text-sm">
            Default font style looks off? Choose between these styles.
          </Text>
          <div
            className="w-full flex items-center gap-2 mt-2"
            onClick={handleClick}
          >
            {fonts.map(font => (
              <Selectable
                key={font.id}
                data-font-id={font.id}
                className={classMerger(
                  'w-fit transition-colors font-normal hover:border-primary',
                  font.utility,
                  font.id === storedFont && 'border-primary bg-gray-200 dark:bg-[#2c2b2b]'
                )}
              >
                {font.label}
              </Selectable>
            ))}
          </div>
        </article>
        <article className="w-full flex flex-col items-start gap-0.5 lg:gap-1">
          <Title as="h3" size="lg">Export your notes</Title>
          <Text className="text-muted-foreground text-sm">
            Export your notes as a text file to keep a backup or share them with others.
          </Text>
          <Button className="mt-2 px-6" variant="primary">Export</Button>
        </article>
      </section>
    </Modal>
  )
}