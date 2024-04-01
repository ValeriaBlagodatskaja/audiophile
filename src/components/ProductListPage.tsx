import Container from '../components/Container'
import Footer from '../components/Footer'
import Product, { ProductProps } from '../components/Product'
import Typography from '../components/Typography'
import ProductLinks from '../pages/Home/ProductLinks'
import Store from '../pages/Home/Store'

interface ProductListPageProps {
  products: ProductProps[]
  title: string
}

export default function ProductListPage({
  products,
  title,
}: ProductListPageProps) {
  return (
    <>
      <div className="flex h-[102px] items-center justify-center bg-[#191919] md:h-[246px] lg:h-[239px]">
        <Typography as="h2" className="text-white" variant="h2">
          {title}
        </Typography>
      </div>
      <Container>
        {products.map((product, index) => (
          <Product
            alignment={index % 2 === 0 ? 'left' : 'right'}
            description={product.description}
            key={index}
            newProduct={product.newProduct}
            srcSet={product.srcSet}
            title={product.title}
            to={product.to}
          />
        ))}
      </Container>
      <ProductLinks />
      <Store />
      <Footer />
    </>
  )
}
