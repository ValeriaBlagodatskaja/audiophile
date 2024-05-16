import ArrowRightIcon from '@/assets/shared/desktop/icon-arrow-right.svg?react'
import { motion } from 'framer-motion'

const Arrow = ({ animateOnHover }: { animateOnHover: boolean }) => {
  return (
    <motion.div
      animate={animateOnHover ? { scale: 1.1, x: 20 } : { x: 0 }}
      className="arrow-container"
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <ArrowRightIcon className="flex" />
    </motion.div>
  )
}

export default Arrow
