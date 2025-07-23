import { useFPS } from "@hooks/useFPS"

/**
 * Component that renders the current frames per second (FPS) in a fixed position on the screen.
 * It uses the `useFPS` hook to get the FPS value and displays it in a paragraph element.
 * The FPS value is updated in real-time as the component re-renders.
 */
export const FPS = () => {
  const fps = useFPS()

  return (
    <p
      className="fixed bottom-1 right-1 z-100 text-primary/70 text-sm font-medium"
    >
      FPS: {fps}
    </p>
  )
}