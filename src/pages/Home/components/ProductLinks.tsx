import ShadowEarphones from '../../../assets/shared/desktop/image-category-thumbnail-earphones.png'
import ShadowHeadphones from '../../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import ShadowSpeakers from '../../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import Container from '../../../components/Container'
import MenuLink from '../../../components/MenuLink'

export default function ProductLinks() {
  const links = [
    {
      href: '/',
      label: 'Home',
    },
    {
      href: '/headphones',
      label: 'Headphones',
      src: ShadowHeadphones,
    },
    {
      href: '/speakers',
      label: 'Speakers',
      src: ShadowSpeakers,
    },
    {
      href: '/earphones',
      label: 'Earphones',
      src: ShadowEarphones,
    },
  ]
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
