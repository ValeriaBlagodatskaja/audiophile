import { useMediaQuery } from 'react-responsive'

import ShopLink from '../components/ShopLink'
import Typography from './Typography'

interface MenuLinkProps {
  children?: string
  className?: string
  onClick?: () => void
  src: string
  to: string
}

function MenuLink({ children, onClick, src, to }: MenuLinkProps) {
  const isLGScreen = useMediaQuery({ minWidth: 1100 })
  return (
    <div className="relative flex h-[165px] w-full max-w-[327px] items-center justify-center rounded-lg bg-gray-light md:max-w-56 lg:h-[204px] lg:max-w-[350px]">
      <picture
        className="absolute top-[-50px] lg:top-[-74px]"
        style={{
          height: isLGScreen ? '200px' : '155px',
          width: isLGScreen ? '205px' : '160px',
        }}
      >
        <img src={src} style={{ height: '100%', width: '100%' }} />
      </picture>
      <div className="mt-[62px] flex flex-col gap-[17px] lg:mt-[72px] lg:gap-[15px] lg:pt-[20px]">
        <Typography
          as="h2"
          className="!font-bold tracking-[1.07px]"
          variant="15px"
        >
          {children}
        </Typography>
        <ShopLink onClick={onClick} to={to}>
          <Typography as="h3" variant="13px">
            SHOP
          </Typography>
        </ShopLink>
      </div>
    </div>
  )
}
export default MenuLink
