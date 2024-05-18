import clsx from 'clsx'
import { ReactNode } from 'react'

interface TextButtonProps {
  children: ReactNode
  className?: string
  disabled?: boolean
  onClick?: () => void
  to?: string
}

export default function TextButton({
  children,
  className,
  disabled,
  onClick,
}: TextButtonProps) {
  return (
    <button
      className={clsx(
        'text-black opacity-50 transition-colors hover:text-orange-dark',
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
