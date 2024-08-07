import { CartItem } from '@/components/Cart/context/CartContext'
import Container from '@/components/Container'
import LinkButton from '@/components/LinkButton'
import Typography from '@/components/Typography'
import { useCart } from '@/hooks/useCart'
import FeaturesSection from '@/pages/ProductInfo/components/FeaturesSection'
import GallerySection from '@/pages/ProductInfo/components/GallerySection'
import IncludesSection from '@/pages/ProductInfo/components/IncludesSection'
import ItemAmount from '@/pages/ProductInfo/components/ItemAmount'
import RelatedProductSection from '@/pages/ProductInfo/components/RelatedProductSection'
import { motion } from 'framer-motion'
import numbro from 'numbro'
import { useEffect, useState } from 'react'

export interface ProductDetailsProps {
  description: string
  features: string

  galleryImages: {
    lg: string
    md: string
    sm: string
  }[]
  id: number
  includes: { item: string; quantity: number }[]
  newProduct: boolean
  others: {
    images: {
      lg: string
      md: string
      sm: string
    }
    name: string
    slug: string
  }[]

  price: number
  srcSet: {
    lg: string
    md: string
    sm: string
  }
  title: string
}

export default function ProductDetails({
  description,
  features,

  galleryImages,
  id,
  includes,
  newProduct,
  others,
  price,
  srcSet,
  title,
}: ProductDetailsProps) {
  const [amount, setAmount] = useState(1)
  const { addToCart } = useCart()

  useEffect(() => {
    setAmount(1)
  }, [id])

  const handleAddToCart = () => {
    const newItem: CartItem = {
      id,

      price: price,
      quantity: amount,
      srcSet,
      title: title,
    }
    addToCart(newItem)
  }

  const updateQuantity = (newQuantity: number) => {
    setAmount(newQuantity)
  }

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: 'easeInOut',
      },
    },
  }

  const slideInLeftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeInOut' },
      x: 0,
    },
  }

  const slideInRightVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeInOut' },
      x: 0,
    },
  }

  return (
    <Container>
      <div className="flex flex-col gap-[88px] text-left md:gap-[120px] lg:gap-40">
        <div className="flex flex-col gap-8 md:flex md:flex-row md:items-center md:gap-[70px] lg:gap-[125px]">
          <motion.div
            initial="hidden"
            variants={slideInLeftVariant}
            viewport={{ amount: 0.2, once: true }}
            whileInView="visible"
          >
            <picture>
              <source media="(min-width:1100px)" srcSet={srcSet.lg} />
              <source media="(min-width:768px)" srcSet={srcSet.md} />
              <img
                className="rounded-lg md:max-w-[380px] lg:max-w-[540px]"
                srcSet={srcSet.sm}
              />
            </picture>
          </motion.div>
          <motion.div
            initial="hidden"
            variants={container}
            viewport={{ amount: 0.2, once: true }}
            whileInView="visible"
          >
            <motion.div variants={slideInRightVariant}>
              {newProduct && (
                <Typography
                  as="span"
                  className="block pb-6 text-orange-dark md:pb-4"
                  variant="14px"
                >
                  new product
                </Typography>
              )}

              <div className="flex flex-col gap-6 md:gap-8">
                <Typography as="h1" variant="28px-40px">
                  {title}
                </Typography>

                <Typography as="p" className="w-full opacity-50" variant="15px">
                  {description}
                </Typography>

                <Typography as="h3" variant="18px">
                  {numbro(price).formatCurrency('$ 0,0')}
                </Typography>

                <div className="flex gap-4">
                  <ItemAmount amount={amount} updateQuantity={updateQuantity} />
                  <LinkButton color="orange" onClick={handleAddToCart}>
                    <Typography as="p" variant="13px">
                      Add to cart
                    </Typography>
                  </LinkButton>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className="flex flex-col items-start gap-[88px] md:gap-[120px] lg:flex-row lg:items-baseline lg:gap-[124px]">
          <FeaturesSection features={features} />
          <IncludesSection includes={includes} />
        </div>
        <GallerySection galleryImages={galleryImages} />
        <RelatedProductSection others={others} />
      </div>
    </Container>
  )
}
