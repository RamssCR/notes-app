import { useCallback, useEffect, useRef } from "react"

/**
 * Custom hook to debounce a function call.
 * This hook returns a debounced version of the provided function,
 * which delays its execution until after a specified delay period
 * has passed since the last time it was invoked.
 */
export const useDebounce = <T extends unknown[]>(
  callback: (...args: T) => void,
  delay: number
) => {
  const timeoutRef = useRef<number | null>(null)
  const debounceFn = useCallback((...args: T) => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = window.setTimeout(() => callback(...args), delay)
  }, [callback, delay])

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return debounceFn
}