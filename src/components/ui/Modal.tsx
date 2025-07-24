import { useEffect } from 'react'
import { 
  AnimatePresence, 
  type HTMLMotionProps,
  motion 
} from 'motion/react'
import { Button } from './Button'
import { Title } from './Title'
import { X } from 'lucide-react'
import { classMerger } from '@utils/classMerger'
import { useToggle } from '@hooks/useToggle'

/**
 * Modal component that displays a centered modal dialog with a backdrop.
 * It can be used to show additional information or forms.
 */
export const Modal = ({
  className,
  cardClassName,
  children,
  active = false,
  modalTitle,
  onClose,
  ...props
}: HTMLMotionProps<'div'> & {
  cardClassName?: string
  active?: boolean
  modalTitle?: string
  onClose?: () => void
}
) => {
  const { off } = useToggle(active)

  useEffect(() => {
    if (!active) return
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose?.()
    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [onClose, active])

  return (
    <AnimatePresence
      onExitComplete={off}
      mode="wait"
    >
      {active && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className={classMerger(
            'bg-black/50 fixed w-full h-[100svh] top-0 left-0 flex justify-center items-center px-3',
            className
          )}
          {...props}
        >
          <motion.div
            key="modal-card"
            className={classMerger(
              'bg-muted border border-border w-full py-4 pl-6 rounded-md pr-3 max-w-[40em]',
              cardClassName
            )}
            onClick={(e) => e.stopPropagation()}
            initial={{ marginTop: '2em', opacity: 0, transition: { delay: 0.2 } }}
            animate={{ marginTop: '0', opacity: 1 }}
            exit={{ marginTop: '2em', opacity: 0 }}
          >
            <>
              <article className="w-full flex items-center justify-between">
                <Title as="h2" size="lg">{modalTitle}</Title>
                <Button
                  size="icon"
                  onClick={onClose}
                >
                  <X className="text-muted-foreground" />
                </Button>
              </article>
              {children}
            </>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}