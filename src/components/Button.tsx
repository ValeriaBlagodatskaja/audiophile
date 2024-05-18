import clsx from 'clsx'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface LinkButtonProps {
  children: ReactNode
  className?: string
  color: 'black' | 'orange' | 'white'
  disabled?: boolean
  onClick?: () => void
  to?: string
}

export default function LinkButton({
  children,
  className,
  color,
  disabled,
  onClick,
  to = '',
}: LinkButtonProps) {
  const colorClasses = {
    black: 'bg-black text-white hover:bg-gray-800 hover:text-white',
    orange: 'bg-orange-dark text-white hover:bg-orange-light',
    white:
      'border border-black bg-transparent text-black hover:bg-black hover:text-white',
  }

  const commonProps = {
    className: clsx(
      'flex h-12 w-40 items-center justify-center transition-colors',
      !disabled && colorClasses[color],
      disabled &&
        'pointer-events-none cursor-not-allowed border-0 bg-gray-light px-[30px] py-[15px] text-gray-500',
      className
    ),
    onClick,
  }

  if (to) {
    return (
      <Link {...commonProps} to={to}>
        {children}
      </Link>
    )
  }

  return (
    <button {...commonProps} disabled={disabled}>
      {children}
    </button>
  )
}
