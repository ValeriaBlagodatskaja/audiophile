import { Spin as Hamburger } from 'hamburger-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import ShadowEarPhones from '../assets/exported-figma/earphones-with-shadow.png'
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
    },
    {
      href: '/speakers',
      label: 'Speakers',
    },
    {
      href: '/earphones',
      label: 'Earphones',
    },
  ]

  return (
    <div className="bg-black">
      <Container className="border-b-1 relative flex h-[90px] items-center justify-between border-white border-opacity-20   md:justify-normal   xl:justify-between ">
        <div className="xl:hidden">
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
          <Logo className="ml-0 md:ml-[40px] xl:ml-0" />
        </Link>

        <div className="hidden gap-[34px] text-white xl:flex">
          {links.map((link, index) => (
            <Link key={index} to={link.href}>
              <Typography as="p" variant="13px">
                {link.label}
              </Typography>
            </Link>
          ))}
        </div>
        <CartIcon className="md:ml-auto xl:ml-0" />
      </Container>

      {isOpen && (
        <div className="absolute top-[90px] h-[calc(100%-90px)] w-full bg-black bg-opacity-40 " />
      )}
      {isOpen && (
        <div className="absolute flex w-full flex-col items-center gap-[68px] rounded-b-lg  bg-white pb-[35px] pt-[84px] md:flex-row md:justify-center md:gap-[10px] md:pb-[67px] md:pt-[108px] ">
          {links.map((link, index) => {
            if (link.label === 'Home') {
              return null
            }

            return (
              <MenuLink
                key={index}
                src={
                  link.label === 'Headphones'
                    ? ShadowHeadphones
                    : link.label === 'Speakers'
                      ? ShadowSpeakers
                      : link.label === 'Earphones'
                        ? ShadowEarPhones
                        : ''
                }
                to={link.href}
              >
                {link.label.toUpperCase()}
              </MenuLink>
            )
          })}
        </div>
      )}
    </div>
  )
}
export default NavBar
