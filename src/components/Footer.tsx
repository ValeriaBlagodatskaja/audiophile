import { Link } from 'react-router-dom'

import Facebook from '../assets/exported-figma/facebook.svg?react'
import Instagram from '../assets/exported-figma/instagram.svg?react'
import Twitter from '../assets/exported-figma/twitter.svg?react'
import Logo from '../assets/shared/desktop/logo.svg?react'
import Container from './Container'
import Typography from './Typography'

export default function Footer() {
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
    <div className="mb:mt-[120px] mt-24 h-[654px] bg-[#191919] md:h-[400px] lg:mt-40 lg:h-[365px]">
      <Container className=" flex flex-col items-center justify-center md:items-start lg:items-stretch">
        <div className="h-[4px] w-[101px] bg-orange-dark" />
        <div className="mb-[48px] md:mb-[32px] lg:mb-[36px] lg:mt-[75px] lg:flex lg:flex-row lg:justify-between ">
          <Link className="flex items-center" to="/">
            <Logo className="mb-[48px] mt-[52px] md:mb-[32px] md:mt-[60px] lg:my-0" />
          </Link>
          <div className="flex flex-col gap-[16px] text-center text-white md:flex-row md:gap-[34px]">
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
        </div>

        <div className="relative flex flex-col gap-[48px] text-center md:gap-[80px] md:text-start lg:gap-[56px]">
          <Typography
            as="p"
            className=" text-white opacity-50 lg:max-w-[540px]"
            variant="15px"
          >
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </Typography>
          <div className="flex flex-col gap-[48px] md:flex md:flex-row md:items-start md:justify-between ">
            <Typography
              as="p"
              className=" text-white opacity-50 "
              variant="15px"
            >
              Copyright 2024. All Rights Reserved
            </Typography>
            <div className="flex justify-center gap-[16px] lg:absolute lg:right-[.30px] lg:top-[68px]">
              <a href="#">
                <Facebook className="fill-white transition-colors hover:fill-orange-dark" />
              </a>
              <a href="#">
                <Twitter className="fill-white transition-colors hover:fill-orange-dark" />
              </a>
              <a href="#">
                <Instagram className="fill-white transition-colors hover:fill-orange-dark" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
