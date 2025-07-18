import { Moon, Settings as SettingsIcon, Sun } from 'lucide-react'
import { EditableTitle } from './EditableTitle'
import { User } from "@components/user/User"
import { SettingButton } from './SettingButton'
import { Settings } from '@components/settings/Settings'
import { themeStore } from '@stores/themeStore'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { noteStore } from '@stores/noteStore'

/**
 * Header component for the editor.
 * This component displays the title of the page and includes settings and user information.
 * It uses the SettingButton component for settings and light mode toggling.
 */
export const Header = () => {
  const { id } = useParams<{ id: string }>()
  const { notes } = noteStore()
  const [active, setActive] = useState(false)
  const { theme, setTheme } = themeStore()

  const toggleModal = () => setActive(!active)
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
  const note = notes.find(note => note.id === id)

  return (
    <header className="w-full flex flex-col items-start gap-3 lg:flex-row lg:gap-0 lg:items-center lg:justify-between">
      {id && (
        <EditableTitle note={note} />
      )}
      <section className="ml-auto w-full justify-end lg:justify-start lg:w-fit flex items-center gap-3">
        <SettingButton
          Icon={SettingsIcon}
          label="Settings"
          title="Settings"
          onClick={toggleModal}
        />
        <SettingButton
          Icon={theme === 'light' ? Moon : Sun}
          title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          label="Light Mode"
          onClick={toggleTheme}
        />
        <User />
      </section>
      <Settings active={active} onClose={toggleModal} />
    </header>
  )
}