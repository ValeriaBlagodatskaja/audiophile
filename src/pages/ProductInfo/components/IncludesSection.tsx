import Typography from '@/components/Typography'
import { motion } from 'framer-motion'

interface IncludesSectionProps {
  includes: { item: string; quantity: number }[]
}

export default function IncludesSection({ includes }: IncludesSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        duration: 0.5,
        ease: 'easeInOut',
        staggerChildren: 0.2,
      },
      x: 0,
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  }
  return (
    <div className="flex flex-col gap-6  md:flex-row md:gap-[170px]  lg:w-full lg:flex-col lg:gap-8 ">
      <Typography as="h3" variant="24px-32px">
        In the box
      </Typography>
      <motion.ul
        initial="hidden"
        variants={containerVariants}
        viewport={{ amount: 0.2, once: true }}
        whileInView="visible"
      >
        {includes.map((include, index) => (
          <motion.li
            className="flex space-x-6"
            key={index}
            variants={itemVariants}
          >
            <Typography as="p" className=" text-orange-dark" variant="15px">
              {include.quantity}x{' '}
            </Typography>
            <Typography as="p" className="opacity-50" variant="15px">
              {include.item}
            </Typography>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}
