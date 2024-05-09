import Container from '../../../components/Container'
import MenuLink from '../../../components/MenuLink'
import { links } from '../../../constants/links'

export default function ProductLinks() {
  return (
    <Container className="relative flex items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center gap-[68px] md:flex-row md:gap-2.5 lg:gap-[30px]">
        {links.map((link, index) => {
          if (link.label === 'Home' || !link.src) {
            return null
          }

          return (
            <MenuLink key={index} src={link.src} to={link.href}>
              {link.label.toUpperCase()}
            </MenuLink>
          )
        })}
      </div>
    </Container>
  )
}
