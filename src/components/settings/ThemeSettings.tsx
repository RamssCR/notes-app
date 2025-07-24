import { Switch } from "@components/ui/Switch"
import { Text } from "@components/ui/Text"
import { Title } from "@components/ui/Title"
import { themeStore } from "@stores/themeStore"

/**
 * Theme settings component for managing the application's theme.
 * It allows users to toggle between light and dark themes.
 */
export const ThemeSettings = () => {
  const { theme, setTheme } = themeStore()
  const handleThemeChange = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
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
  )
}