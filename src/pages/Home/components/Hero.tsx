import HeroDesktopImage from '../../../assets/home/desktop/image-hero.jpg'
import HeroMobileImage from '../../../assets/home/mobile/image-header.jpg'
import HeroTabletImage from '../../../assets/home/tablet/image-header.jpg'
import { LinkButton } from '../../../components/Button'
import Container from '../../../components/Container'
import Typography from '../../../components/Typography'

export default function Hero() {
  return (
    <div className="relative bg-[#191919]">
      <Container className="relative flex h-[510px] items-center justify-center overflow-hidden md:h-[640px]  lg:justify-between">
        <picture className="absolute ">
          <source media="(min-width:1100px)" srcSet={HeroDesktopImage} />
          <source media="(min-width:768px)" srcSet={HeroTabletImage} />
          <img className="mt-[-115px] h-auto w-auto" src={HeroMobileImage} />
        </picture>
        <div className="absolute flex w-[375px] flex-col items-center justify-center text-center md:h-[346px] md:w-[398px] lg:items-start lg:text-left">
          <Typography as="p" className="text-white opacity-50" variant="14px">
            NEW PRODUCT
          </Typography>
          <Typography
            as="h1"
            className="mb-6 mt-4 text-white md:my-6"
            variant="36px-56px"
          >
            XX99 Mark II Headphones
          </Typography>
          <Typography
            as="p"
            className="mb-7 w-[328px] text-white opacity-75 md:mb-10 md:w-[349px]"
            variant="15px"
          >
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Typography>
          <LinkButton color="orange" to="/xx99-mark-two-headphones">
            <Typography as="p" variant="13px">
              SEE PRODUCT
            </Typography>
          </LinkButton>
        </div>
      </Container>
    </div>
  )
}
