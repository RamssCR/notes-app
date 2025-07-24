import { Text } from "@components/ui/Text"
import { Title } from "@components/ui/Title"

/**
 * Welcome back component for displaying a welcome message to the user.
 * It prompts the user to continue where they left off.
 */
export const WelcomeBack = () => (
  <article
    className="w-full h-[83svh] flex flex-col justify-center items-center gap-1 lg:h-full"
    aria-labelledby="welcome-title"
    aria-describedby="welcome-description"
  >
    <Title as="h2" size="3xl" id="welcome-title">Look who's back</Title>
    <Text variant="muted" id="welcome-description">Wanna continue where you left off?</Text>
  </article>
)