import EarphonesYX1Desktop from '../../assets/home/desktop/image-earphones-yx1.jpg'
import EarphonesYX1Mobile from '../../assets/home/mobile/image-earphones-yx1.jpg'
import EarphonesYX1Tablet from '../../assets/home/tablet/image-earphones-yx1.jpg'
import { LinkButton } from '../../components/Button'
import Container from '../../components/Container'
import Typography from '../../components/Typography'

export default function Earphones() {
  return (
    <Container className="mb-[120px] md:mb-[96px] lg:mb-[200px]">
      <div className=" flex flex-col gap-[24px] md:flex-row  lg:flex-row">
        <div className="w-full">
          <picture className="flex h-[200px] grow rounded-lg md:h-[320px] ">
            <source media="(min-width:1100px)" srcSet={EarphonesYX1Desktop} />
            <source media="(min-width:768px)" srcSet={EarphonesYX1Tablet} />
            <img
              className="h-full grow rounded-lg object-cover object-center"
              src={EarphonesYX1Mobile}
            />
          </picture>
        </div>
        <div className="flex h-[200px]  w-full rounded-lg bg-gray-light md:h-[320px] ">
          <div className="ml-[24px] flex w-full flex-col items-start justify-center gap-[32px] md:ml-[41px] lg:ml-[95px]">
            <Typography as="p" variant="28px">
              YX1 EARPHONES
            </Typography>
            <LinkButton to="/" variant="secondary">
              <Typography as="p" variant="13px">
                SEE PRODUCT
              </Typography>
            </LinkButton>
          </div>
        </div>
      </div>
    </Container>
  )
}
