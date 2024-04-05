import ShopLink from '../components/ShopLink'
import Typography from './Typography'

interface MenuLinkProps {
  children?: string
  className?: string
  onClick?: () => void
  srcSet: {
    lg: string
    md: string
    sm: string
  }
  to: string
}

function MenuLink({ children, onClick, srcSet, to }: MenuLinkProps) {
  return (
    <div className="relative flex h-[165px] w-[327px] items-center justify-center rounded-lg bg-gray-light md:w-56 lg:h-[204px] lg:w-[350px]">
      <picture className="absolute top-[-50px] lg:top-[-74px]">
        <source media="(min-width:1100px)" srcSet={srcSet.lg} />
        <source media="(min-width:768px)" srcSet={srcSet.md} />
        <img srcSet={srcSet.sm} />
      </picture>
      <div className="mt-[62px] flex flex-col gap-[17px] lg:mt-[72px] lg:gap-[15px] lg:pt-[20px]">
        <Typography
          as="h2"
          className="!font-bold tracking-[1.07px]"
          color="15px"
        >
          {children}
        </Typography>
        <ShopLink onClick={onClick} to={to}>
          <Typography as="h3" color="13px">
            SHOP
          </Typography>
        </ShopLink>
      </div>
    </div>
  )
}
export default MenuLink
