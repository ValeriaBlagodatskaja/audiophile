import data from '../../data.json'
import { ProductProps } from '../components/Product'
import ProductListPage from '../components/ProductListPage'

export default function Speakers() {
  const speakers = data.filter(({ category }) => category === 'speakers')

  const remapDataToMatchProps = () => {
    const sortedSpeakers = [...speakers].sort((a, b) =>
      a.new === b.new ? 0 : a.new ? -1 : 1
    )

    return sortedSpeakers.map((product) => {
      const productObject: ProductProps = {
        description: product.description,
        newProduct: product.new,
        srcSet: {
          lg: product.categoryImage.desktop,
          md: product.categoryImage.tablet,
          sm: product.categoryImage.mobile,
        },
        title: product.name,
        to: `/${product.slug}`,
      }
      return productObject
    })
  }
  const remappedData = remapDataToMatchProps()
  return <ProductListPage products={remappedData} title="Speakers" />
}
