import { Spin as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import CartIcon from '../assets/shared/desktop/icon-cart.svg?react'
import Logo from '../assets/shared/desktop/logo.svg?react'
import MenuLink from './MenuLink'
import Typography from './Typography'

function NavBar() {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <div className="flex h-[90px] items-center justify-between bg-black px-[24px] md:justify-normal  md:px-[39px] xl:justify-between xl:px-[165px]">
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

        <Logo className="ml-0 md:ml-[42px] xl:ml-0" />

        <div className="hidden gap-[34px] text-white xl:flex">
          <Link to="/">
            <Typography as="p" variant="13px">
              Home
            </Typography>
          </Link>
          <Link to="/headphones">
            <Typography as="p" variant="13px">
              HEADPHONES
            </Typography>
          </Link>
          <Link to="/speakers">
            <Typography as="p" variant="13px">
              SPEAKERS
            </Typography>
          </Link>
          <Link to="/earphones">
            <Typography as="p" variant="13px">
              EARPHONES
            </Typography>
          </Link>
        </div>
        <CartIcon className="md:ml-auto xl:ml-0" />
      </div>

      <div className="mx-[165px] hidden h-px bg-white opacity-20 md:mx-[39px] md:opacity-10 xl:block"></div>
      <div className={`${isOpen ? 'block' : 'hidden'}`}>
        <MenuLink />
      </div>
    </>
  )
}
export default NavBar
