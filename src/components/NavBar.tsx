import { Spin as Hamburger } from 'hamburger-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import ShadowEarphones from '../assets/exported-figma/earphones-with-shadow.png'
import ShadowHeadphones from '../assets/exported-figma/headphones-with-shadow.png'
import ShadowSpeakers from '../assets/exported-figma/speakers-with-shadow.png'
import CartIcon from '../assets/shared/desktop/icon-cart.svg?react'
import Logo from '../assets/shared/desktop/logo.svg?react'
import Container from './Container'
import MenuLink from './MenuLink'
import Typography from './Typography'

function NavBar() {
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1440) {
        setOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const links = [
    {
      href: '/',
      label: 'Home',
    },
    {
      href: '/headphones',
      label: 'Headphones',
      srcSet: {
        lg: ShadowHeadphones,
        md: ShadowHeadphones,
        sm: ShadowHeadphones,
      },
    },
    {
      href: '/speakers',
      label: 'Speakers',
      srcSet: {
        lg: ShadowSpeakers,
        md: ShadowSpeakers,
        sm: ShadowSpeakers,
      },
    },
    {
      href: '/earphones',
      label: 'Earphones',
      srcSet: {
        lg: ShadowEarphones,
        md: ShadowEarphones,
        sm: ShadowEarphones,
      },
    },
  ]

  return (
    <div className="sticky top-0 z-20 bg-[#191919]">
      <Container className="relative z-30 flex h-[90px] items-center justify-between border-b-[1px] border-white border-opacity-20   md:justify-normal   lg:justify-between ">
        <div className="lg:hidden">
          <Hamburger
            color="white"
            direction="right"
            distance="lg"
            duration={0.4}
            easing="ease-in"
            size={20}
            toggle={setOpen}
            toggled={isOpen}
          />
        </div>

        <Link to="/">
          <Logo className="ml-0 md:ml-10 lg:ml-0" />
        </Link>

        <div className="hidden gap-[34px] text-white lg:flex">
          {links.map((link) => (
            <Link
              className="hover:text-orange-dark"
              key={link.href}
              to={link.href}
            >
              <Typography as="p" color="13px">
                {link.label}
              </Typography>
            </Link>
          ))}
        </div>
        <CartIcon className="md:ml-auto lg:ml-0" />
      </Container>
      {isOpen && (
        <>
          <div className="absolute top-[90px] z-10 h-full w-full"></div>
          <div className="fixed top-0 z-10 h-full w-full  bg-black bg-opacity-40 "></div>
          <div className="absolute z-40 flex w-full flex-col items-center gap-[68px]  rounded-b-lg bg-white pb-[35px] pt-[84px] md:flex-row md:justify-center md:gap-2.5 md:pb-[67px] md:pt-[108px] ">
            {links.map((link, index) => {
              if (link.label === 'Home' || !link.srcSet) {
                return null
              }
              return (
                <MenuLink
                  key={index}
                  onClick={() => setOpen(false)}
                  srcSet={link.srcSet}
                  to={link.href}
                >
                  {link.label.toUpperCase()}
                </MenuLink>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
export default NavBar
