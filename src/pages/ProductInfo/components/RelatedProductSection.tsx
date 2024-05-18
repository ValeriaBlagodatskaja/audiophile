import LinkButton from '@/components/Button'
import Typography from '@/components/Typography'
import { motion } from 'framer-motion'
interface RelatedProductSectionProps {
  others: {
    images: {
      lg: string
      md: string
      sm: string
    }
    name: string
    slug: string
  }[]
}
export default function RelatedProductSection({
  others,
}: RelatedProductSectionProps) {
  const containerVariants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  }

  return (
    <div className="flex flex-col items-center gap-10 md:gap-14 lg:gap-16">
      <Typography as="h3" variant="24px-32px">
        You may also like
      </Typography>
      <motion.div
        className="flex flex-col gap-14 md:flex-row md:gap-3 lg:gap-[30px]"
        initial="hidden"
        variants={containerVariants}
        viewport={{ once: true }}
        whileInView="visible"
      >
        {others.map((other, index) => (
          <motion.div
            className="flex flex-col items-center gap-8"
            key={index}
            variants={itemVariants}
          >
            <Typography as="h3" variant="24px">
              {other.name}
            </Typography>
            <picture>
              <source media="(min-width:1100px)" srcSet={other.images.lg} />
              <source media="(min-width:768px)" srcSet={other.images.md} />
              <img className="rounded-lg" src={other.images.sm} />
            </picture>
            <LinkButton color="orange" to={`/${other.slug}`}>
              <Typography as="p" variant="13px">
                See product
              </Typography>
            </LinkButton>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
