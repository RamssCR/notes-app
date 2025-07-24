import type { MouseEventHandler } from 'react'
import { Selectable } from "./Selectable"
import { Text } from "@components/ui/Text"
import { Title } from "@components/ui/Title"
import { classMerger } from '@utils/classMerger'
import { fontStore } from '@stores/fontStore'
import fonts from '@data/fonts.json'

/**
 * Font settings component for managing typography preferences.
 * It allows users to select their preferred font style.
 */
export const FontSettings = () => {
  const { font: storedFont, setFont } = fontStore()

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = (e.target as HTMLElement).closest<HTMLDivElement>('[data-font-id]')
    if (target) {
      const fontId = target.dataset.fontId
      if (fontId) setFont(fontId)
    }
  }

  return (
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
  )
}