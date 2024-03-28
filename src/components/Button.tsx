import clsx from 'clsx'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import ArrowRightIcon from '../assets/shared/desktop/icon-arrow-right.svg?react'

interface ButtonProps {
  children: ReactNode
  onClick: () => void
  variant: 'primary' | 'quaternary' | 'quinary' | 'secondary' | 'tertiary'
}

interface LinkButtonProps {
  children: ReactNode
  className?: string
  to: string
  variant: 'primary' | 'quaternary' | 'quinary' | 'secondary' | 'tertiary'
}

const commonClasses = {
  primary:
    'flex justify-center items-center  h-12 w-40 bg-orange-dark hover:bg-orange-light border-0 px-[30px] py-[15px] text-white',
  quaternary:
    'flex justify-center items-center  h-12 w-40 hover:border hover:border-black hover:bg-white hover:text-black bg-black text-white',
  quinary: 'hover:text-orange-dark hover:fill-orange-dark',
  secondary:
    'flex justify-center items-center  h-12 w-40 border border-black bg-transparent text-black hover:bg-black hover:text-white',
  tertiary:
    'gap-[13px] text-black opacity-50 flex items-center justify-center hover:text-orange-dark bg-transparent',
}

export default function Button({ children, onClick, variant }: ButtonProps) {
  return (
    <button className={clsx(commonClasses[variant])} onClick={onClick}>
      <span>{children}</span>
      {variant === 'tertiary' && <ArrowRightIcon />}
    </button>
  )
}

export function LinkButton({
  children,
  className,
  to,
  variant,
}: LinkButtonProps) {
  return (
    <Link className={clsx(commonClasses[variant], className)} to={to}>
      <span>{children}</span>
      {variant === 'tertiary' && <ArrowRightIcon className="flex" />}
    </Link>
  )
}
