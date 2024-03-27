import { LinkButton } from './Button'
import Typography from './Typography'

interface MenuLinkProps {
  children?: string
  className?: string
  src?: string
  srcDesktop?: string
  to: string
}

function MenuLink({ children, src, srcDesktop, to }: MenuLinkProps) {
  return (
    <div className="relative flex h-[165px] w-[327px] items-center justify-center rounded-lg bg-gray-light md:w-56 lg:h-[204px] lg:w-[350px]">
      {src && (
        <img className="absolute top-[-50px] block  lg:hidden" src={src} />
      )}
      {srcDesktop && (
        <img
          className="absolute top-[-74px] hidden lg:block "
          src={srcDesktop}
        />
      )}
      <div className="mt-[62px] flex flex-col gap-[17px] lg:mt-[72px] lg:gap-[15px] lg:pt-[20px]">
        <Typography
          as="h2"
          className="!font-bold tracking-[1.07px]"
          variant="15px"
        >
          {children}
        </Typography>
        <LinkButton to={to} variant="tertiary">
          <Typography as="h3" variant="13px">
            SHOP
          </Typography>
        </LinkButton>
      </div>
    </div>
  )
}
export default MenuLink
