import Typography from '@/components/Typography'
import clsx from 'clsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import Arrow from './Arrow'

interface MenuLinkProps {
  children?: string
  onClick?: () => void
  src: string
  to: string
}

function MenuLink({ children, onClick, src, to }: MenuLinkProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      className="relative flex h-[165px] w-full max-w-[327px] items-center justify-center rounded-lg bg-gray-light md:max-w-56 lg:h-[204px] lg:max-w-[350px]"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      to={to}
    >
      <picture className="absolute top-[-50px] h-[155px] w-[165px] lg:top-[-74px] lg:h-[200px] lg:w-[210px]">
        <img alt="Menu Image" className="size-full" src={src} />
      </picture>
      <div className="mt-[62px] flex flex-col gap-[17px] lg:mt-[72px] lg:gap-[15px] lg:pt-[20px]">
        <Typography
          as="h2"
          className="!font-bold tracking-[1.07px]"
          variant="15px"
        >
          {children}
        </Typography>
        <div
          className={clsx(
            'flex items-center justify-center gap-[13px] bg-transparent uppercase text-black opacity-50',
            isHovered && 'text-orange-dark'
          )}
        >
          <Typography as="h3" variant="13px">
            Shop
          </Typography>
          <Arrow animateOnHover={isHovered} />
        </div>
      </div>
    </Link>
  )
}

export default MenuLink
