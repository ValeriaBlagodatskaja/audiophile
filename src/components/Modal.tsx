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

  if (!open) {
    return <div className="hidden" />
  }

  return ReactDom.createPortal(
    <>
      <div className="z-1000 fixed inset-0 bg-black bg-opacity-40" />
      <div
        className={clsx(
          'z-1000 md-custom:px-8 md-custom:w-[377px] fixed left-1/2 right-0 top-1/2 mx-auto w-[327px] -translate-x-1/2 transform rounded-[8px] bg-white px-3 py-8',
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
