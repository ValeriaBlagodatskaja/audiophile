import ShopLink from '@/components/ShopLink'
import Typography from '@/components/Typography'

interface MenuLinkProps {
  children?: string
  className?: string
  onClick?: () => void
  src: string
  to: string
}

function MenuLink({ children, onClick, src, to }: MenuLinkProps) {
  return (
    <div className="relative flex h-[165px] w-full max-w-[327px] items-center justify-center rounded-lg bg-gray-light md:max-w-56 lg:h-[204px] lg:max-w-[350px]">
      <picture className="absolute top-[-50px] h-[155px] w-[165px] lg:top-[-74px] lg:h-[200px] lg:w-[210px] ">
        <img className="h-full w-full" src={src} />
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
            Shop
          </Typography>
        </ShopLink>
      </div>
    </div>
  )
}
export default MenuLink
