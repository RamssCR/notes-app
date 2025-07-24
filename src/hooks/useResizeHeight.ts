import { type RefObject, useEffect } from "react"

/**
 * Hook to automatically resize a textarea based on its content.
 * It adjusts the height of the textarea to fit its content dynamically.
 */
export const useResizeHeight = (ref: RefObject<HTMLTextAreaElement | null>, value: string) => {
  useEffect(() => {
    const textarea = ref.current
    if (!textarea) return


    textarea.style.height = "auto"
    textarea.style.height = `${textarea.scrollHeight}px`
    setTimeout(() => {
      textarea.scrollTop = textarea.scrollHeight
    }, 0)
  }, [value, ref])
}