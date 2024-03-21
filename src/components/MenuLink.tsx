import { LinkButton } from './Button'
import Typography from './Typography'

interface MenuLinkProps {
  children?: string
  src?: string
  to: string
}

function MenuLink({ children, src, to }: MenuLinkProps) {
  return (
    <div className="bg-gray-light relative flex h-[165px] w-[328px] items-center justify-center rounded-lg md:w-56">
      <img
        className="absolute right-[76.5px] top-[-50px] md:right-[23px]"
        src={src}
      />
      <div className="mt-[62px] flex flex-col gap-[17px]">
        <Typography as="h2" variant="15px">
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
