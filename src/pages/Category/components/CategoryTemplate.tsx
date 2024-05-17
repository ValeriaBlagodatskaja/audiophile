import Container from '@/components/Container'
import Typography from '@/components/Typography'
import Product, { ProductProps } from '@/pages/Category/components/Product'
import ProductLinks from '@/pages/Home/components/ProductLinks'
import Store from '@/pages/Home/components/Store'
import { motion } from 'framer-motion'
interface ProductListPageProps {
  products: ProductProps[]
  title: string
}

export default function ProductListPage({
  products,
  title,
}: ProductListPageProps) {
  const fromTopMotion = {
    hidden: { opacity: 0, transition: { duration: 0.5 }, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }
  return (
    <>
      <div className="flex h-[102px] items-center justify-center bg-[#191919] md:h-[246px] lg:h-[239px]">
        <motion.div
          initial="hidden"
          variants={fromTopMotion}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <Typography as="h2" className="text-white" variant="28px-40px">
            {title}
          </Typography>
        </motion.div>
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
