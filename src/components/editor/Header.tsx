import { 
  List, 
  Moon, 
  Settings as SettingsIcon, 
  Sun 
} from 'lucide-react'
import { Suspense, lazy } from 'react'
import { EditableTitle } from './EditableTitle'
import { Loader } from '@components/ui/Loader'
import { MobileSidebar } from '@components/sidebar/MobileSidebar'
import { SettingButton } from './SettingButton'
import { User } from "@components/user/User"
import { useHeader } from "@hooks/useHeader"

const Settings = lazy(() => import('@components/settings/Settings'))

/**
 * Header component for the editor.
 * This component displays the title of the page and includes settings and user information.
 * It uses the SettingButton component for settings and light mode toggling.
 */
export const Header = () => {
  const {
    toggleModal,
    toggleNotes,
    toggleTheme,
    settingsActive,
    notesActive,
    theme,
    note,
    id
  } = useHeader()

  return (
    <header className="w-full flex flex-col items-start gap-3 lg:flex-row lg:gap-0 lg:items-center lg:justify-between">
      {id && (
        <EditableTitle note={note} />
      )}
      <section className="ml-auto w-full justify-end lg:justify-start lg:w-fit flex items-center gap-3">
        <SettingButton
          Icon={List}
          label="Notes"
          title="Notes"
          onClick={toggleNotes}
          className="lg:hidden rounded-full"
        />
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
      <Suspense fallback={<Loader />}>
        <Settings active={settingsActive} onClose={toggleModal} />
      </Suspense>
      <MobileSidebar 
        active={notesActive} 
        toggle={toggleNotes} 
      />
    </header>
  )
}