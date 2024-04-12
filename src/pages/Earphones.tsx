import data from '../../data.json'
import { ProductProps } from '../components/Product'
import ProductListPage from '../components/ProductListPage'

export default function Earphones() {
  const earphones = data.filter(({ category }) => category === 'earphones')

  const remapDataToMatchProps = () => {
    return earphones.map((product) => {
      console.log('product', product)
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
  return <ProductListPage products={remappedData} title="Earphones" />
}
