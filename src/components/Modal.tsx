import useClickOutside from '@/hooks/useClickOutside'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode, useRef } from 'react'
import ReactDom from 'react-dom'

export interface ModalProps {
  children: ReactNode
  className?: string
  onClose?: () => void
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal({
  children,
  className,
  onClose,
  open,
  setOpen,
}: ModalProps) {
  const modalContentRef = useRef(null)
  useClickOutside(modalContentRef, open, () => {
    setOpen(false)
    onClose?.()
  })

  const modalVariants = {
    exit: {
      opacity: 0,
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
    hidden: {
      opacity: 0,
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
  }

  return ReactDom.createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          animate="visible"
          className="z-1000 fixed inset-0 flex items-center justify-center bg-black bg-opacity-40"
          exit="exit"
          initial="hidden"
          variants={modalVariants}
        >
          <div
            className={clsx(
              'z-1000 mx-auto w-[327px] transform rounded-[8px] bg-white px-3 py-8 md-custom:w-[377px] md-custom:px-8',
              className
            )}
            ref={modalContentRef}
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById('portal') as HTMLElement
  )
}
