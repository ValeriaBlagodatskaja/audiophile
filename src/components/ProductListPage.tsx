import Container from '../components/Container'
import Product, { ProductProps } from '../components/Product'
import Typography from '../components/Typography'
import ProductLinks from '../pages/Home/components/ProductLinks'
import Store from '../pages/Home/components/Store'
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
        <Typography as="h2" className="text-white" variant="28px-40px">
          {title}
        </Typography>
      </div>
      <Container className="mb-[172px] mt-16 flex flex-col gap-[120px] md:mt-[120px] lg:mb-60 lg:mt-40 lg:gap-40">
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
      <div className="flex flex-col gap-[120px] lg:gap-40">
        <ProductLinks />
        <Store />
      </div>
    </>
  )
}
