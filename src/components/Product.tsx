import clsx from 'clsx'

import { LinkButton } from '../components/Button'
import Typography from '../components/Typography'

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
  console.log(alignment)
  return (
    <>
      <div
        className={clsx(
          'flex flex-col items-center justify-center lg:gap-[125px]',
          alignment === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
        )}
      >
        <picture className="mb-8 mt-16  max-w-[380px] md:mb-[52px] md:mt-[120px] md:max-w-[780px] lg:mt-40">
          <source media="(min-width:1100px)" srcSet={srcSet.lg} />
          <source media="(min-width:768px)" srcSet={srcSet.md} />
          <img className="" srcSet={srcSet.sm} />
        </picture>
        <div className="flex flex-col items-center lg:mt-40 lg:flex lg:h-[560px] lg:items-start lg:justify-center lg:text-left">
          {newProduct && (
            <Typography
              as="span"
              className="mb-6 text-orange-dark"
              color="14px"
            >
              new product
            </Typography>
          )}
          <Typography as="h2" className="text-center lg:text-left" color="h2">
            {title}
          </Typography>
          <Typography
            as="p"
            className="my-6 w-[327px] text-center opacity-50 md:mb-6 md:mt-8 md:w-[572px] lg:mb-10 lg:w-[445px] lg:text-left"
            color="15px"
          >
            {description}
          </Typography>
          <LinkButton className="mb-14" color="orange" to={to}>
            <Typography as="p" color="13px">
              SEE PRODUCT
            </Typography>
          </LinkButton>
        </div>
      </div>
    </>
  )
}
