import SpeakerImageZX9Desktop from '@/assets/home/desktop/image-speaker-zx9.png'
import CirclesLG from '@/assets/home/desktop/pattern-circles.svg?react'
import SpeakerImageZX9Mobile from '@/assets/home/mobile/image-speaker-zx9.png'
import CirclesSM from '@/assets/home/mobile/pattern-circles.svg?react'
import SpeakerImageZX9Tablet from '@/assets/home/tablet/image-speaker-zx9.png'
import CirclesMD from '@/assets/home/tablet/pattern-circles.svg?react'
import LinkButton from '@/components/Button'
import Container from '@/components/Container'
import Typography from '@/components/Typography'
import { Variants, motion } from 'framer-motion'

export default function SpeakerOne() {
  const circlesVariants: Variants = {
    hover: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  }

  return (
    <motion.div whileHover="hover">
      <Container>
        <div className="relative flex h-[600px] flex-col items-center justify-center gap-[24px] overflow-hidden rounded-lg bg-orange-dark text-center md:h-[720px] lg:h-[560px] lg:flex-row lg:gap-[138px]">
          <motion.div
            className="absolute hidden lg:left-[-166px] lg:top-[-60px] lg:block"
            variants={circlesVariants}
          >
            <CirclesLG />
          </motion.div>
          <motion.div
            className="absolute hidden md:top-[-196px] md:block lg:hidden"
            variants={circlesVariants}
          >
            <CirclesMD />
          </motion.div>
          <motion.div
            className="absolute top-[-296px] md:hidden"
            variants={circlesVariants}
          >
            <CirclesSM />
          </motion.div>

          <div className="relative mb-[-50px] md:mb-[-120px]">
            <div className="flex items-center justify-center">
              <div className="flex h-[276px] w-[276px] items-center justify-center overflow-hidden md:h-[450px] md:w-[450px] lg:ring-0">
                <picture className="absolute h-[208px] w-[172px]  md:h-[238px] md:w-[198px] lg:top-[-24px] lg:h-[464px] lg:w-[400px]">
                  <source
                    media="(min-width:1100px)"
                    srcSet={SpeakerImageZX9Desktop}
                  />
                  <source
                    media="(min-width:768px)"
                    srcSet={SpeakerImageZX9Tablet}
                  />
                  <img src={SpeakerImageZX9Mobile} />
                </picture>
              </div>
            </div>
          </div>
          <div className="relative mb-[58px] flex flex-col items-center justify-center gap-6 text-center md:mb-[150px] lg:mb-0 lg:flex lg:items-start lg:text-left">
            <Typography as="h1" className=" text-white" variant="36px-56px">
              ZX9 <br />
              speaker
            </Typography>
            <Typography
              as="p"
              className="w-full max-w-[280px] text-white md:mb-[16px] md:max-w-[349px]"
              variant="15px"
            >
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </Typography>
            <LinkButton color="black" to="/zx9-speaker">
              <Typography as="p" variant="13px">
                See product
              </Typography>
            </LinkButton>
          </div>
        </div>
      </Container>
    </motion.div>
  )
}
