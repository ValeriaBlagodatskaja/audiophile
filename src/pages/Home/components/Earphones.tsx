import Container from '@/components/Container'
import LinkButton from '@/components/LinkButton'
import Typography from '@/components/Typography'

const earphonesYX1Desktop = '/assets/home/desktop/image-earphones-yx1.jpg'
const earphonesYX1Mobile = '/assets/home/mobile/image-earphones-yx1.jpg'
const earphonesYX1Tablet = '/assets/home/tablet/image-earphones-yx1.jpg'

export default function Earphones() {
  return (
    <Container className="mb-[120px] md:mb-24 lg:mb-[200px]">
      <div className="flex flex-col gap-6 md:flex-row  lg:flex-row">
        <div className="w-full">
          <picture className="flex h-[200px] grow rounded-lg md:h-80">
            <source media="(min-width:1100px)" srcSet={earphonesYX1Desktop} />
            <source media="(min-width:768px)" srcSet={earphonesYX1Tablet} />
            <img
              className="h-full grow rounded-lg object-cover object-center"
              src={earphonesYX1Mobile}
            />
          </picture>
        </div>
        <div className="flex h-[200px]  w-full rounded-lg bg-gray-light md:h-[320px] ">
          <div className="ml-6 flex w-full flex-col items-start justify-center gap-8 md:ml-[41px] lg:ml-[95px]">
            <Typography as="p" variant="28px">
              YX1 earphones
            </Typography>
            <LinkButton color="white" to="/yx1-earphones">
              <Typography as="p" variant="13px">
                See product
              </Typography>
            </LinkButton>
          </div>
        </div>
      </div>
    </Container>
  )
}
