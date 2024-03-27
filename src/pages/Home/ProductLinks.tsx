import ShadowEarphones from '../../assets/exported-figma/earphones-with-shadow.png'
import ShadowEarphonesDesktop from '../../assets/exported-figma/earphones-with-shadow-desktop.png'
import ShadowHeadphones from '../../assets/exported-figma/headphones-with-shadow.png'
import ShadowHeadphonesDesktop from '../../assets/exported-figma/headphones-with-shadow-desktop.png'
import ShadowSpeakers from '../../assets/exported-figma/speakers-with-shadow.png'
import ShadowSpeakersDesktop from '../../assets/exported-figma/speakers-with-shadow-desktop.png'
import Container from '../../components/Container'
import MenuLink from '../../components/MenuLink'

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
      srcDesktop: ShadowHeadphonesDesktop,
    },
    {
      href: '/speakers',
      label: 'Speakers',
      src: ShadowSpeakers,
      srcDesktop: ShadowSpeakersDesktop,
    },
    {
      href: '/earphones',
      label: 'Earphones',
      src: ShadowEarphones,
      srcDesktop: ShadowEarphonesDesktop,
    },
  ]
  return (
    <Container className="align-center relative mb-[120px] mt-[92px] flex justify-center md:mb-[96px] md:mt-[148px] lg:mb-[168px] lg:mt-[200px]">
      <div className="flex flex-col gap-[68px] md:flex-row md:gap-2.5 lg:gap-[30px]">
        {links.map((link, index) => {
          if (link.label === 'Home') {
            return null
          }

          return (
            <MenuLink
              key={index}
              src={link.src}
              srcDesktop={link.srcDesktop}
              to={link.href}
            >
              {link.label.toUpperCase()}
            </MenuLink>
          )
        })}
      </div>
    </Container>
  )
}
