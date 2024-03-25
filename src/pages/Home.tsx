import ShadowEarphones from '../assets/exported-figma/earphones-with-shadow.png'
import ShadowEarphonesDesktop from '../assets/exported-figma/earphones-with-shadow-desktop.png'
import ShadowHeadphones from '../assets/exported-figma/headphones-with-shadow.png'
import ShadowHeadphonesDesktop from '../assets/exported-figma/headphones-with-shadow-desktop.png'
import ShadowSpeakers from '../assets/exported-figma/speakers-with-shadow.png'
import ShadowSpeakersDesktop from '../assets/exported-figma/speakers-with-shadow-desktop.png'
import DesktopBgImage from '../assets/home/desktop/image-hero.jpg'
import MobileBgImage from '../assets/home/mobile/image-header.jpg'
import TabletBgImage from '../assets/home/tablet/image-header.jpg'
import Button, { LinkButton } from '../components/Button'
import Container from '../components/Container'
import MenuLink from '../components/MenuLink'
import Typography from '../components/Typography'

export default function Home() {
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
    <>
      <div className="relative bg-[#191919]">
        <Container className="xl: relative flex h-[510px] items-center justify-center overflow-hidden md:h-[640px] xl:h-[640px] xl:justify-between">
          <picture className="absolute ">
            <source media="(min-width:1440px)" srcSet={DesktopBgImage} />
            <source media="(min-width:768px)" srcSet={TabletBgImage} />
            <img className="mt-[-115px] h-auto w-auto" src={MobileBgImage} />
          </picture>
          <div className="absolute flex w-[375px] flex-col items-center justify-center text-center md:h-[346px] md:w-[398px] xl:h-[346px] xl:w-[398px] xl:items-start xl:text-left">
            <Typography as="p" className="text-white opacity-50" variant="14px">
              NEW PRODUCT
            </Typography>
            <Typography
              as="h1"
              className="mb-6 mt-4 text-white md:my-6 xl:my-6"
              variant="h1"
            >
              XX99 Mark II Headphones
            </Typography>
            <Typography
              as="p"
              className="mb-7 w-[328px] text-white opacity-75 md:mb-10 md:w-[349px] xl:mb-10 xl:w-[349px]"
              variant="15px"
            >
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </Typography>
            <LinkButton to="/" variant="primary">
              <Typography as="p" variant="13px">
                SEE PRODUCT
              </Typography>
            </LinkButton>
          </div>
        </Container>
      </div>
      <div className="relative z-10"> </div>
      <Container className="align-center relative mb-[120px] mt-[92px] flex justify-center">
        <div className="my-4 flex flex-col gap-[68px] md:flex-row md:gap-2.5 xl:flex-row xl:gap-[30px]">
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
    </>
  )
}
