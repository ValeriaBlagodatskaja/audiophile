import { useEffect } from 'react'

type Event = KeyboardEvent | MouseEvent | TouchEvent
type Ref = React.RefObject<HTMLDivElement>
type Handler = (e: Event) => void

/**
 * A custom hook to simplify using "click outside" functionality and handling Escape key press
 * @param ref // A container element where, if clicked on, the handler shouldn't be called
 * @param condition // Boolean describing when the event handlers should be added (e.g., when a modal is visible)
 * @param handler // A function which is eventually called on click outside or Escape press.
 */
const useClickOutside = (
  ref: Ref,
  condition: boolean,
  handler: Handler
): void => {
  useEffect(() => {
    const listener = (event: Event) => {
      if (event.type === 'mousedown' || event.type === 'touchend') {
        if (!ref.current || ref.current.contains(event.target as Node)) {
          return
        }
        handler(event)
      }

      if (
        event.type === 'keydown' &&
        (event as KeyboardEvent).key === 'Escape'
      ) {
        handler(event)
      }
    }

    if (condition) {
      document.addEventListener('mousedown', listener)
      document.addEventListener('touchend', listener)
      document.addEventListener('keydown', listener)
    }

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchend', listener)
      document.removeEventListener('keydown', listener)
    }
  }, [ref, handler, condition])
}

export default useClickOutside
