import Earphones from '@/pages/Home/components/Earphones'
import Hero from '@/pages/Home/components/Hero'
import ProductLinks from '@/pages/Home/components/ProductLinks'
import SpeakerOne from '@/pages/Home/components/SpeakerOne'
import SpeakerTwo from '@/pages/Home/components/SpeakerTwo'
import Store from '@/pages/Home/components/Store'
import { motion } from 'framer-motion'

export default function Home() {
  const speakerOneVariants = {
    offscreen: {
      opacity: 0,
      y: 20,
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
      y: 0,
    },
  }

  const speakerTwoVariants = {
    offscreen: {
      x: '100%',
    },
    onscreen: {
      transition: {
        bounce: 0.4,
        duration: 0.8,
        type: 'spring',
      },
      x: 0,
    },
  }

  const earphonesVariants = {
    offscreen: {
      y: '100%',
    },
    onscreen: {
      transition: {
        bounce: 0.4,
        duration: 0.8,
        type: 'spring',
      },
      y: 0,
    },
  }
  return (
    <>
      <div className="mb-[120px] flex flex-col gap-[92px] md:mb-24 md:gap-[148px] lg:mb-[168px] lg:gap-[200px]">
        <Hero />
        <ProductLinks />
      </div>
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
        <motion.div
          initial="offscreen"
          viewport={{ amount: 0.2, once: true }}
          whileInView="onscreen"
        >
          <motion.div variants={speakerOneVariants}>
            <SpeakerOne />
          </motion.div>
        </motion.div>

        <motion.div
          initial="offscreen"
          viewport={{ amount: 0.5, once: true }}
          whileInView="onscreen"
        >
          <motion.div variants={speakerTwoVariants}>
            <SpeakerTwo />
          </motion.div>
        </motion.div>

        <motion.div
          initial="offscreen"
          viewport={{ amount: 0.5, once: true }}
          whileInView="onscreen"
        >
          <motion.div variants={earphonesVariants}>
            <Earphones />
          </motion.div>
        </motion.div>
      </div>
      <Store />
    </>
  )
}
