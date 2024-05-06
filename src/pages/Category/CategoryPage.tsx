import data from '../../../data.json'
import ProductListPage from './components/CategoryTemplate'
import { ProductProps } from './components/Product'

interface CategoryPageProps {
  category: string
}

export default function CategoryPage({ category }: CategoryPageProps) {
  const filteredProducts = data.filter(
    (product) => product.category === category
  )

  const remapDataToMatchProps = () => {
    const sortedProducts = [...filteredProducts].sort((a, b) =>
      a.new === b.new ? 0 : a.new ? -1 : 1
    )
    return sortedProducts.map((product) => {
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

  return (
    <ProductListPage
      products={remappedData}
      title={category.charAt(0).toUpperCase() + category.slice(1)}
    />
  )
}
