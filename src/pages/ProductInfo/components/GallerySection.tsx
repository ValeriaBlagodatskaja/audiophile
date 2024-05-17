import { motion } from 'framer-motion'

interface GallerySectionProps {
  galleryImages: {
    lg: string
    md: string
    sm: string
  }[]
}

export default function GallerySection({ galleryImages }: GallerySectionProps) {
  const displayedImages = galleryImages.slice(0, 2)

  const thirdImage = galleryImages[2]

  const containerVariants = {
    hidden: { opacity: 0, rotate: -10 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: {
        delayChildren: 0.2,
        duration: 0.5,
        ease: 'easeInOut',
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0 },
  }

  return (
    <motion.div
      className="flex flex-col gap-5 md:flex-row lg:gap-[30px]"
      initial="hidden"
      variants={containerVariants}
      viewport={{ amount: 0.2, once: true }}
      whileInView="visible"
    >
      <div className="flex flex-col gap-5 md:justify-center lg:gap-[30px]">
        {displayedImages.map((galleryImage, index) => (
          <motion.picture key={index} variants={itemVariants}>
            <source media="(min-width:1100px)" srcSet={galleryImage.lg} />
            <source media="(min-width:768px)" srcSet={galleryImage.md} />
            <img className="rounded-lg " srcSet={galleryImage.sm} />
          </motion.picture>
        ))}
      </div>
      {thirdImage && (
        <motion.picture variants={itemVariants}>
          <source media="(min-width:1100px)" srcSet={thirdImage.lg} />
          <source media="(min-width:768px)" srcSet={thirdImage.md} />
          <img className="rounded-lg" srcSet={thirdImage.sm} />
        </motion.picture>
      )}
    </motion.div>
  )
}
