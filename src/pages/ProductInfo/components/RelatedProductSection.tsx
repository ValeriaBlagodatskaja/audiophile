import { LinkButton } from '@/components/Button'
import Typography from '@/components/Typography'

interface RelatedProductSectionProps {
  others: {
    images: {
      lg: string
      md: string
      sm: string
    }
    name: string
    slug: string
  }[]
}
export default function RelatedProductSection({
  others,
}: RelatedProductSectionProps) {
  return (
    <div className="flex flex-col items-center gap-10 md:gap-14 lg:gap-16">
      <Typography as="h3" variant="24px-32px">
        You may also like
      </Typography>
      <div className="flex flex-col gap-14 md:flex-row md:gap-3 lg:gap-[30px]">
        {others.map((other, index) => (
          <div className="flex flex-col items-center gap-8" key={index}>
            <Typography as="h3" variant="24px">
              {other.name}
            </Typography>
            <picture>
              <source media="(min-width:1100px)" srcSet={other.images.lg} />
              <source media="(min-width:768px)" srcSet={other.images.md} />
              <img className="rounded-lg" src={other.images.sm} />
            </picture>
            <LinkButton color="orange" to={`/${other.slug}`}>
              <Typography as="p" variant="13px">
                See product
              </Typography>
            </LinkButton>
          </div>
        ))}
      </div>
    </div>
  )
}
