import clsx from 'clsx'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
interface ButtonProps {
  children: ReactNode
  color: 'black' | 'gray' | 'orange' | 'white'
  onClick: () => void
}

interface LinkButtonProps {
  children: ReactNode
  className?: string
  color: 'black' | 'gray' | 'orange' | 'white'
  onClick?: () => void
  to?: string
}

const commonClasses = {
  black:
    'flex justify-center items-center  h-12 w-40 hover:border hover:border-0 hover:bg-gray-800 hover:text-white bg-black text-white',
  gray: 'gap-[13px] text-black opacity-50 flex items-center justify-center hover:text-orange-dark bg-transparent',
  orange:
    'flex justify-center items-center  h-12 w-40 bg-orange-dark hover:bg-orange-light border-0 px-[30px] py-[15px] text-white',
  white:
    'flex justify-center items-center  h-12 w-40 border border-black bg-transparent text-black hover:bg-black hover:text-white',
}

export default function Button({ children, color, onClick }: ButtonProps) {
  return (
    <button className={clsx(commonClasses[color])} onClick={onClick}>
      <span>{children}</span>
    </button>
  )
}

export function LinkButton({
  children,
  className,
  color,
  onClick,
  to = '',
}: LinkButtonProps) {
  return (
    <Link
      className={clsx(commonClasses[color], className)}
      onClick={onClick}
      to={to}
    >
      <span>{children}</span>
    </Link>
  )
}
