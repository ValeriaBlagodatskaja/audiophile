import BestGearDesktop from '@/assets/shared/desktop/image-best-gear.jpg'
import BestGearMobile from '@/assets/shared/mobile/image-best-gear.jpg'
import BestGearTablet from '@/assets/shared/tablet/image-best-gear.jpg'
import Container from '@/components/Container'
import Typography from '@/components/Typography'
import { motion } from 'framer-motion'

export default function Store() {
  const text =
    'Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.'
  const words = text.split(' ')

  const fromTopMotion = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
      y: 0,
    },
  }

  return (
    <Container className="flex flex-col gap-10 md:gap-[63px] lg:flex lg:flex-row-reverse lg:gap-[125px]">
      <div className="w-full">
        <picture className="flex h-[300px] grow rounded-lg lg:h-[588px]">
          <source media="(min-width:1100px)" srcSet={BestGearDesktop} />
          <source media="(min-width:768px)" srcSet={BestGearTablet} />
          <img
            className="h-full grow rounded-lg object-cover object-center"
            src={BestGearMobile}
          />
        </picture>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 lg:items-start lg:text-left">
        <motion.div
          initial="hidden"
          variants={fromTopMotion}
          viewport={{ amount: 0.5, once: true }}
          whileInView="visible"
        >
          <Typography
            as="h2"
            className="w-[327px] text-center md:w-[573px] lg:w-[445px] lg:text-left"
            variant="28px-40px"
          >
            Bringing you the{' '}
            <span className="font-bold text-orange-dark">best</span> audio gear
          </Typography>
        </motion.div>

        <Typography
          as="p"
          className="h-[250px] w-full text-center opacity-50 md:h-[150px] md:max-w-[573px] lg:max-w-[445px] lg:text-left xl:h-[175px]"
          variant="15px"
        >
          {words.map((word, index) => (
            <motion.span
              initial={{ opacity: 0 }}
              key={index}
              transition={{
                delay: index / 10,
                duration: 0.25,
              }}
              viewport={{ amount: 0.2, once: true }}
              whileInView={{ opacity: 1 }}
            >
              {word}{' '}
            </motion.span>
          ))}
        </Typography>
      </div>
    </Container>
  )
}
