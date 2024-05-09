import CartIcon from '@/assets/shared/desktop/icon-cart.svg?react'
import Logo from '@/assets/shared/desktop/logo.svg?react'
import Cart from '@/components/Cart/Cart'
import Container from '@/components/Container'
import MenuLink from '@/components/MenuLink'
import Modal from '@/components/Modal'
import Typography from '@/components/Typography'
import { links } from '@/constants/links'
import { useCart } from '@/hooks/useCart'
import useClickOutside from '@/hooks/useClickOutside'
import { Spin as Hamburger } from 'hamburger-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

interface NavBarProps {
  closeOnClickOutside?: boolean
}

function NavBar({ closeOnClickOutside = true }: NavBarProps) {
  const menuRef = useRef(null)
  const [isOpen, setOpen] = useState(false)

  useClickOutside(menuRef, closeOnClickOutside, () => setOpen(false))

  const [isModalOpen, setIsModalOpen] = useState(false)
  const { cartItems } = useCart()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1440) {
        setOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
            toggle={() => setOpen(!isOpen)}
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
              <Typography as="p" variant="13px">
                {link.label}
              </Typography>
            </Link>
          ))}
        </div>
        <button
          className="relative md:ml-auto lg:ml-0"
          onClick={() => setIsModalOpen(true)}
        >
          <CartIcon />
          {cartItems.length > 0 && (
            <div className="absolute right-0 top-0 h-2 w-2 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-red-500"></div>
          )}
        </button>
        <Modal
          className="-translate-y-[400px] md:left-auto md:right-10 md:-translate-x-0"
          open={isModalOpen}
          setOpen={setIsModalOpen}
        >
          <Cart onClose={() => setIsModalOpen(false)} />
        </Modal>
      </Container>
      {isOpen && (
        <>
          <div className="absolute top-[90px] z-10 h-full w-full"></div>
          <div className="fixed top-0 z-10 h-full w-full  bg-black bg-opacity-40 lg:hidden"></div>
          <div
            className="absolute z-40 flex w-full flex-col items-center gap-[68px] rounded-b-lg  bg-white pb-[35px] pt-[84px] md:flex-row md:justify-center md:gap-2.5 md:pb-[67px] md:pt-[108px] lg:hidden "
            ref={menuRef}
          >
            {links.map((link, index) => {
              if (link.label === 'Home' || !link.src) {
                return null
              }
              return (
                <MenuLink
                  key={index}
                  onClick={() => setOpen(false)}
                  src={link.src}
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
