import clsx from 'clsx'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import ArrowRightIcon from '../assets/shared/desktop/icon-arrow-right.svg?react'

interface ButtonProps {
  children: ReactNode
  onClick: () => void
  variant: 'primary' | 'secondary' | 'tertiary'
}

interface LinkButtonProps {
  children: ReactNode
  to: string
  variant: 'primary' | 'secondary' | 'tertiary'
}

const commonClasses = {
  primary:
    'flex justify-center items-center  h-12 w-40 bg-orange-dark hover:bg-orange-light border-0 px-[30px] py-[15px] text-white',
  secondary:
    'flex justify-center items-center  h-12 w-40 border-[1px] border-black bg-white text-black hover:bg-black hover:text-white',
  tertiary:
    'gap-[13px] flex items-center justify-center text-grey-light hover:text-orange-dark bg-transparent',
}

export default function Button({ children, onClick, variant }: ButtonProps) {
  return (
    <button className={clsx(commonClasses[variant])} onClick={onClick}>
      <span>{children}</span>
      {variant === 'tertiary' && <ArrowRightIcon />}
    </button>
  )
}

export function LinkButton({ children, to, variant }: LinkButtonProps) {
  return (
    <Link className={clsx(commonClasses[variant])} to={to}>
      <span>{children}</span>
      {variant === 'tertiary' && <ArrowRightIcon className="flex" />}
    </Link>
  )
}
