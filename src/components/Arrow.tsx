import ArrowRightIcon from '@/assets/icon-arrow-right.svg?react'
import { motion } from 'framer-motion'

const Arrow = ({ animateOnHover }: { animateOnHover: boolean }) => {
  return (
    <motion.div
      animate={animateOnHover ? { scale: 1.1, x: 10 } : { x: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <ArrowRightIcon className="flex" />
    </motion.div>
  )
}

export default Arrow
