import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook to calculate frames per second (FPS) in a React component.
 * It uses the `requestAnimationFrame` API to track the number of frames rendered.
 */
export function useFPS(): number {
  const [fps, setFps] = useState(0)
  const frameCount = useRef(0)
  const lastTime = useRef(performance.now())

  useEffect(() => {
    let animationId: number

    const update = (now: number) => {
      frameCount.current++

      const delta = now - lastTime.current
      if (delta >= 1000) {
        setFps(Math.round((frameCount.current * 1000) / delta))
        frameCount.current = 0
        lastTime.current = now
      }

      animationId = requestAnimationFrame(update)
    }

    animationId = requestAnimationFrame(update)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return fps
}
