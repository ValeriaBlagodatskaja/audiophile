import { useParams } from 'react-router-dom'

import data from '../../../data.json'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import GoBackLink from '../../components/GoBackLink'
import ProductLinks from '../Home/components/ProductLinks'
import Store from '../Home/components/Store'
import ProductDetails, { ProductDetailsProps } from './ProductDetails'

interface ProductInfoPageProps {
  to?: string
}

export default function ProductInfoPage({ to }: ProductInfoPageProps) {
  const { slug } = useParams()
  const product = data.find((item) => item.slug === slug)
  console.log(slug)
  if (!product) {
    return <div>Product not found</div>
  }
  const remapDataToMatchProps = () => {
    const productObject: ProductDetailsProps = {
      description: product.description,
      features: product.features,
      galleryImageThird: {
        lg: product.gallery.third.desktop,
        md: product.gallery.third.tablet,
        sm: product.gallery.third.mobile,
      },
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
      ],
      includes: product.includes,
      newProduct: product.new,
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
      <Container>
        <div className="flex flex-col gap-6 pb-[88px] md:pb-[120px] lg:gap-14 lg:pb-0 ">
          <GoBackLink to={to}>Go Back</GoBackLink>
          <ProductDetails
            description={remappedData.description}
            features={remappedData.features}
            galleryImageThird={remappedData.galleryImageThird}
            galleryImages={remappedData.galleryImages}
            includes={remappedData.includes}
            newProduct={remappedData.newProduct}
            price={remappedData.price}
            srcSet={remappedData.srcSet}
            title={remappedData.title}
          />
        </div>
      </Container>
      <div className="flex flex-col gap-[120px] lg:gap-40">
        <ProductLinks />
        <Store />
        <Footer />
      </div>
    </>
  )
}
