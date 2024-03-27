import BestGearDesktop from '../../assets/shared/desktop/image-best-gear.jpg'
import BestGearMobile from '../../assets/shared/mobile/image-best-gear.jpg'
import BestGearTablet from '../../assets/shared/tablet/image-best-gear.jpg'
import Container from '../../components/Container'
import Typography from '../../components/Typography'

export default function Store() {
  return (
    <Container className="mb-[120px] md:mb-[96px] lg:mb-[200px] lg:flex lg:flex-row-reverse lg:gap-[125px]">
      <div className="w-full">
        <picture className="mb-[40px] flex h-[300px] grow rounded-lg md:mb-[63px] lg:mb-0 lg:h-[588px]">
          <source media="(min-width:1100px)" srcSet={BestGearDesktop} />
          <source media="(min-width:768px)" srcSet={BestGearTablet} />
          <img
            className="h-full rounded-lg object-cover object-center"
            src={BestGearMobile}
          />
        </picture>
      </div>

      <div className="flex flex-col items-center justify-center lg:items-start">
        <Typography
          as="h2"
          className="mb-[32px]  w-[327px] text-center md:w-[573px] lg:w-[445px]"
          variant="h2"
        >
          Bringing you the{' '}
          <span className="font-bold text-orange-dark">best</span> audio gear
        </Typography>
        <Typography
          as="p"
          className="h-[250px] w-[327px] text-center opacity-50 md:h-[150px] md:w-[573px] lg:w-[445px] lg:text-left xl:h-[175px]"
          variant="15px"
        >
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Typography>
      </div>
    </Container>
  )
}
