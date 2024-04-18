import clsx from 'clsx'
import { ReactNode, useRef } from 'react'
import ReactDom from 'react-dom'

import useClickOutside from '../hooks/useClickOutside'

interface ModalProps {
  children: ReactNode
  className?: string
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal({
  children,
  className,
  open,
  setOpen,
}: ModalProps) {
  const modalContentRef = useRef(null)
  useClickOutside(modalContentRef, open, () => setOpen(false))

  if (!open) return null
  return ReactDom.createPortal(
    <>
      <div className="z-1000 fixed inset-0 bg-black bg-opacity-40" />
      <div
        className={clsx(
          'z-1000 fixed left-0 right-0 top-0 mx-auto w-[327px] translate-y-1/3 rounded-lg bg-white px-3 py-8 md:left-auto md:right-10 md:w-[377px] md:px-8',
          className
        )}
        ref={modalContentRef}
      >
        {children}
      </div>
    </>,
    document.getElementById('portal') as HTMLElement
  )
}
