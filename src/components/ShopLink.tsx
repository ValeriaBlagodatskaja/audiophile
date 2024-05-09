import ArrowRightIcon from '@/assets/shared/desktop/icon-arrow-right.svg?react'
import clsx from 'clsx'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ShopLinkProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  to: string
}

export default function ShopLink({
  children,
  className,
  onClick,
  to,
}: ShopLinkProps) {
  return (
    <Link
      className={clsx(
        'flex items-center justify-center gap-[13px] bg-transparent uppercase text-black opacity-50 hover:text-orange-dark',
        className
      )}
      onClick={onClick}
      to={to}
    >
      <span>{children} </span>
      <ArrowRightIcon className="flex" />
    </Link>
  )
}
