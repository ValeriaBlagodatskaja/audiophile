import { links } from '@/constants/links'
import { useCart } from '@/hooks/useCart'
import { AnimatePresence, motion } from 'framer-motion'
import { Spin as Hamburger } from 'hamburger-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import CartIcon from '../assets/shared/desktop/icon-cart.svg?react'
import Logo from '../assets/shared/desktop/logo.svg?react'
import Cart from '../components/Cart/Cart'
import useClickOutside from '../hooks/useClickOutside'
import Container from './Container'
import MenuLink from './MenuLink'
import Modal from './Modal'
import Typography from './Typography'

interface NavBarProps {
  closeOnClickOutside?: boolean
}

function NavBar({ closeOnClickOutside = true }: NavBarProps) {
  const [isOpen, setOpen] = useState(false)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const { cartItems } = useCart()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1100) {
        setOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const dotVariants = {
    exit: { scale: 0 },
    hidden: { y: -10 },
    transition: {
      ease: 'easeInOut',
      type: 'spring',
    },
    visible: { y: 0 },
  }

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
  }

  const modalVariants = {
    hidden: {
      opacity: 0,
      y: '-100%',
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeInOut' },
      y: 0,
    },
  }

  const fromTopMotion = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' },
      y: 0,
    },
  }

  const modalContentRef = useRef(null)
  useClickOutside(modalContentRef, closeOnClickOutside ? isOpen : false, () =>
    setOpen(false)
  )

  const getCartProductAmount = () => {
    let amount = 0
    cartItems.forEach((item) => {
      amount += item.quantity
    })
    return amount
  }

  return (
    <div className="sticky top-0 z-20 lg:bg-[#191919]">
      <Container className="relative z-30 bg-[#191919]">
        <div className="flex h-[90px] items-center justify-between border-b-[1px] border-white border-opacity-20 ">
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
            <Logo />
          </Link>

          <div className="hidden gap-[34px]  text-white lg:flex">
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
            className="relative flex h-12 w-12 items-center justify-center"
            onClick={() => setIsModalOpen(true)}
          >
            <CartIcon />
            <AnimatePresence>
              {cartItems.length > 0 && (
                <motion.div
                  animate="visible"
                  className="absolute right-1.5 top-[22px] flex size-4 -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full bg-red-500 text-xs font-normal text-white"
                  exit="exit"
                  initial="hidden"
                  variants={dotVariants}
                >
                  {getCartProductAmount()}
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
        <AnimatePresence>
          <motion.div
            animate="visible"
            exit="hidden"
            initial="hidden"
            variants={fromTopMotion}
          >
            <Modal
              className="-translate-y-[400px] md:left-auto md:right-10 md:-translate-x-0"
              open={isModalOpen}
              setOpen={setIsModalOpen}
            >
              <Cart onClose={() => setIsModalOpen(false)} />
            </Modal>
          </motion.div>
        </AnimatePresence>
      </Container>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              animate="visible"
              className="fixed top-0 z-10 h-full w-full  bg-black bg-opacity-40 "
              exit="hidden"
              initial="hidden"
              variants={backdropVariants}
            ></motion.div>
            <motion.div
              animate="visible"
              className="absolute z-10 flex w-full flex-col items-center gap-[68px]  rounded-b-lg bg-white pb-[35px] pt-[84px] md:flex-row md:justify-center md:gap-2.5 md:pb-[67px] md:pt-[108px] "
              exit="hidden"
              initial="hidden"
              ref={modalContentRef}
              variants={modalVariants}
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
export default NavBar
