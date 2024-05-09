import { useParams } from 'react-router-dom'

import data from '../../../data.json'
import GoBackLink from '../../components/GoBackLink'
import ProductLinks from '../Home/components/ProductLinks'
import Store from '../Home/components/Store'
import ProductDetails, {
  ProductDetailsProps,
} from './components/ProductDetails'

interface OtherProduct {
  image: {
    desktop: string
    mobile: string
    tablet: string
  }
  name: string
  slug: string
}

export default function ProductInfoPage() {
  const { slug } = useParams()
  const product = data.find((item) => item.slug === slug)
  if (!product) {
    return <div>Product not found</div>
  }

  const mapOthersData = (others: OtherProduct[]) => {
    return others.map(({ image, name, slug }) => ({
      images: {
        lg: image.desktop,
        md: image.tablet,
        sm: image.mobile,
      },
      name,
      slug,
    }))
  }

  const remapDataToMatchProps = () => {
    const productObject: ProductDetailsProps = {
      description: product.description,
      features: product.features,
      galleryImages: [
        {
          lg: product.gallery.first.desktop,
          md: product.gallery.first.tablet,
          sm: product.gallery.first.mobile,
        },
        {
          lg: product.gallery.second.desktop,
          md: product.gallery.second.tablet,
          sm: product.gallery.second.mobile,
        },
        {
          lg: product.gallery.third.desktop,
          md: product.gallery.third.tablet,
          sm: product.gallery.third.mobile,
        },
      ],
      id: product.id,
      includes: product.includes,
      newProduct: product.new,
      others: mapOthersData(product.others),
      price: product.price,
      srcSet: {
        lg: product.image.desktop,
        md: product.image.tablet,
        sm: product.image.mobile,
      },
      title: product.name,
    }
    return productObject
  }
  const remappedData = remapDataToMatchProps()

  return (
    <>
      <GoBackLink />
      <div className="flex flex-col gap-[172px] lg:gap-60">
        <ProductDetails {...remappedData} />
        <div className="flex flex-col gap-[120px] lg:gap-10">
          <ProductLinks />
        </div>
        <Store />
      </div>
    </>
  )
}
