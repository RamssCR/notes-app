import { Avatar } from "@components/ui/Avatar"
import { Title } from "@components/ui/Title"

type UserProps = {
  username?: string
  fallback?: string
}

/**
 * User component displays user information including avatar and name.
 * It uses the Avatar component to show the user's profile picture
 * from GitHub, with a fallback text if the image is not available.
 */
export const User = ({ username = "RamssCR", fallback = "RC" }: UserProps) => (
  <article className="flex items-center gap-2">
    <Avatar
      src={`https://github.com/${username}.png`}
      alt={username}
      fallbackText={fallback}
    />
    <Title as="h2">{username}</Title>
  </article>
)