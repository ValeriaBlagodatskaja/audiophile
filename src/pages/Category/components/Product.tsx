import { LinkButton } from '@/components/Button'
import Typography from '@/components/Typography'
import clsx from 'clsx'
import { motion } from 'framer-motion'

export interface ProductProps {
  alignment?: string
  description: string
  newProduct: boolean
  srcSet: {
    lg: string
    md: string
    sm: string
  }
  title: string
  to: string
}

export default function Product({
  alignment,
  description,
  newProduct,
  srcSet,
  title,
  to,
}: ProductProps) {
  const delayChildren = 0.5
  const staggerChildren = 0.5

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren,
        ease: 'easeInOut',
        staggerChildren,
      },
    },
  }

  const riseUpVariant = {
    container,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
      },
    },
  }

  return (
    <motion.div
      className={clsx(
        'flex flex-col items-center justify-center gap-8 md:gap-[52px] lg:gap-[125px]',
        alignment === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
      )}
      initial="hidden"
      variants={riseUpVariant.container}
      viewport={{ amount: 0.2, once: true }}
      whileInView="visible"
    >
      <motion.div variants={riseUpVariant.item}>
        <picture className="max-w-[380px] md:max-w-[780px]">
          <source media="(min-width:1100px)" srcSet={srcSet.lg} />
          <source media="(min-width:768px)" srcSet={srcSet.md} />
          <img srcSet={srcSet.sm} />
        </picture>
      </motion.div>
      <div className="flex flex-col items-center lg:flex lg:h-[560px] lg:items-start lg:justify-center lg:text-left">
        <motion.div variants={riseUpVariant.item}>
          {newProduct && (
            <Typography
              as="span"
              className="mb-6 text-orange-dark"
              variant="14px"
            >
              New product
            </Typography>
          )}
        </motion.div>
        <motion.div variants={riseUpVariant.item}>
          <Typography
            as="h1"
            className="text-center lg:text-left"
            variant="28px-40px"
          >
            {title}
          </Typography>
        </motion.div>
        <motion.div variants={riseUpVariant.item}>
          <Typography
            as="p"
            className="my-6 w-full text-center opacity-50 md:mb-6 md:mt-8 md:max-w-[572px] lg:mb-10 lg:max-w-none  lg:text-left"
            variant="15px"
          >
            {description}
          </Typography>
        </motion.div>
        <motion.div variants={riseUpVariant.item}>
          <LinkButton color="orange" to={to}>
            <Typography as="p" variant="13px">
              See product
            </Typography>
          </LinkButton>
        </motion.div>
      </div>
    </motion.div>
  )
}
