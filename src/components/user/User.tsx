import { Avatar } from "@components/ui/Avatar"
import { Title } from "@components/ui/Title"

/**
 * User component displays user information including avatar and name.
 */
export const User = () => (
  <article className="flex items-center gap-2">
    <Avatar
      src="https://github.com/RamssCR.png"
      alt="RamssCR"
      fallbackText="RC"
    />
    <Title as="h2">RamssCR</Title>
  </article>
)