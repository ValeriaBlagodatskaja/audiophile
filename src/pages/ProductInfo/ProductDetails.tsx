import React, { useState } from 'react'

import Button from '../../components/Button'
import Typography from '../../components/Typography'
import ItemAmount from './ItemAmount'

export interface ProductDetailsProps {
  description: string
  features: string
  galleryImageThird: {
    lg: string
    md: string
    sm: string
  }
  galleryImages: {
    lg: string
    md: string
    sm: string
  }[]
  includes: { item: string; quantity: number }[]
  newProduct: boolean
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
  galleryImageThird,
  galleryImages,
  includes,
  newProduct,
  price,
  srcSet,
  title,
}: ProductDetailsProps) {
  const [amount, setAmount] = useState(1)

  const handleAddToCart = () => {
    console.log('Products amount added to cart:', amount)
  }

  const renderFeatures = (featuresText: string) => {
    return featuresText.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ))
  }

  return (
    <>
      <div className="flex flex-col items-center text-left ">
        <div className="md:flex md:flex-row md:items-center md:gap-[70px] lg:gap-[124px]">
          <picture>
            <source media="(min-width:1100px)" srcSet={srcSet.lg} />
            <source media="(min-width:768px)" srcSet={srcSet.md} />
            <img
              className="rounded-lg md:max-w-[380px] lg:max-w-[540px]"
              srcSet={srcSet.sm}
            />
          </picture>
          <div>
            {newProduct && (
              <Typography
                as="span"
                className="block pb-6 pt-8 text-orange-dark md:pb-4 md:pt-0"
                variant="14px"
              >
                new product
              </Typography>
            )}
            <div className="flex flex-col gap-6 md:gap-8">
              <Typography as="h1" variant="h2">
                {title}
              </Typography>
              <Typography as="p" className="opacity-50 " variant="15px">
                {description}
              </Typography>
              <Typography as="h3" variant="18px">
                $ {price}
              </Typography>
              <div className="flex gap-4">
                <ItemAmount amount={amount} setAmount={setAmount} />
                <Button color="orange" onClick={handleAddToCart}>
                  <Typography as="p" variant="13px">
                    Add to cart
                  </Typography>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start py-[88px] md:py-[120px] lg:flex-row lg:items-baseline lg:gap-[124px] lg:py-[160px]">
          <Typography as="h3" variant="h3">
            Features
          </Typography>

          <Typography as="p" className="pt-6 opacity-50" variant="15px">
            {renderFeatures(features)}
          </Typography>

          <div className="flex flex-col gap-6 pt-[88px] md:flex-row md:gap-[170px] md:pt-[120px] lg:w-full lg:flex-col lg:gap-8 lg:pt-[160px]">
            <Typography as="h3" variant="h3">
              In the box
            </Typography>
            <ul>
              {includes.map((include, index) => (
                <li className="flex space-x-6" key={index}>
                  <Typography
                    as="p"
                    className=" text-orange-dark"
                    variant="15px"
                  >
                    {include.quantity}x{' '}
                  </Typography>
                  <Typography as="p" className="opacity-50" variant="15px">
                    {include.item}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:flex-row lg:gap-[30px]">
        <div className="flex flex-col gap-5 md:justify-center lg:gap-[30px]">
          {galleryImages.map((galleryImage, index) => (
            <picture key={index}>
              <source media="(min-width:1100px)" srcSet={galleryImage.lg} />
              <source media="(min-width:768px)" srcSet={galleryImage.md} />
              <img className="rounded-lg " srcSet={galleryImage.sm} />
            </picture>
          ))}
        </div>
        <picture>
          <source media="(min-width:1100px)" srcSet={galleryImageThird.lg} />
          <source media="(min-width:768px)" srcSet={galleryImageThird.md} />
          <img className="rounded-lg" srcSet={galleryImageThird.sm} />
        </picture>
      </div>
      <Typography as="h3" variant="h3">
        You may also like
      </Typography>
    </>
  )
}
