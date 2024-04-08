import ShadowEarphones from '../../../assets/exported-figma/earphones-with-shadow.png'
import ShadowEarphonesDesktop from '../../../assets/exported-figma/earphones-with-shadow-desktop.png'
import ShadowHeadphones from '../../../assets/exported-figma/headphones-with-shadow.png'
import ShadowHeadphonesDesktop from '../../../assets/exported-figma/headphones-with-shadow-desktop.png'
import ShadowSpeakers from '../../../assets/exported-figma/speakers-with-shadow.png'
import ShadowSpeakersDesktop from '../../../assets/exported-figma/speakers-with-shadow-desktop.png'
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
      srcSet: {
        lg: ShadowHeadphonesDesktop,
        md: ShadowHeadphones,
        sm: ShadowHeadphones,
      },
    },
    {
      href: '/speakers',
      label: 'Speakers',
      srcSet: {
        lg: ShadowSpeakersDesktop,
        md: ShadowSpeakers,
        sm: ShadowSpeakers,
      },
    },
    {
      href: '/earphones',
      label: 'Earphones',
      srcSet: {
        lg: ShadowEarphonesDesktop,
        md: ShadowEarphones,
        sm: ShadowEarphones,
      },
    },
  ]
  return (
    <Container className="align-center relative flex justify-center">
      <div className="flex w-full flex-col items-center gap-[68px] md:flex-row md:gap-2.5 lg:gap-[30px]">
        {links.map((link, index) => {
          if (link.label === 'Home' || !link.srcSet) {
            return null
          }

          return (
            <MenuLink key={index} srcSet={link.srcSet} to={link.href}>
              {link.label.toUpperCase()}
            </MenuLink>
          )
        })}
      </div>
    </Container>
  )
}
