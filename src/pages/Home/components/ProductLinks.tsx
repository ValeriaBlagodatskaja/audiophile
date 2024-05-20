import Container from '@/components/Container'
import MenuLink from '@/components/MenuLink'
import { links } from '@/constants/links'
import { motion } from 'framer-motion'

export default function ProductLinks() {
  const linksVariants = {
    offscreen: {
      opacity: 0,
      y: 20,
    },
    onscreen: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
      y: 0,
    },
  }
  return (
    <Container className="relative flex items-center justify-center">
      <motion.div
        className="flex w-full flex-col items-center justify-center gap-[68px] md:flex-row md:gap-2.5 lg:gap-[30px]"
        initial="offscreen"
        variants={linksVariants}
        viewport={{ amount: 0.2, once: true }}
        whileInView="onscreen"
      >
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
      </motion.div>
    </Container>
  )
}
