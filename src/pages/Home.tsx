import DesktopBgImage from '../assets/home/desktop/image-hero.jpg'
import MobileBgImage from '../assets/home/mobile/image-header.jpg'
import TabletBgImage from '../assets/home/tablet/image-header.jpg'
import Button, { LinkButton } from '../components/Button'
import Container from '../components/Container'
import Typography from '../components/Typography'

export default function Home() {
  return (
    <>
      <div className="relative bg-[#191919]">
        <Container className="xl: relative flex h-[510px] items-center justify-center overflow-hidden md:h-[640px] xl:h-[640px] xl:justify-between">
          <picture className="absolute ">
            <source media="(min-width:1440px)" srcSet={DesktopBgImage} />
            <source media="(min-width:768px)" srcSet={TabletBgImage} />
            <img className="mt-[-115px] h-auto w-auto" src={MobileBgImage} />
          </picture>
          <div className="xl: absolute flex flex-col items-center justify-center text-center xl:items-start xl:text-left">
            <Typography as="p" className="text-white opacity-50" variant="14px">
              NEW PRODUCT
            </Typography>
            <Typography
              as="h1"
              className="mb-6 mt-4 text-white md:my-6 xl:my-6"
              variant="36px"
            >
              XX99 Mark II <br />
              HeadphoneS
            </Typography>
            <Typography
              as="p"
              className="mb-7 text-white opacity-75 md:mb-10 xl:mb-10"
              variant="15px"
            >
              Experience natural, lifelike audio and <br />
              exceptional build quality made for <br />
              the passionate music enthusiast.
            </Typography>
            <LinkButton to="/" variant="primary">
              <Typography as="p" variant="13px">
                SEE PRODUCT
              </Typography>
            </LinkButton>
          </div>
        </Container>
      </div>
      <div className="relative z-10"> </div>
      <Container>
        <div className="my-4 flex gap-2">
          <Button onClick={() => console.log('')} variant="primary">
            primary
          </Button>
          <Button onClick={() => console.log('')} variant="secondary">
            secondary
          </Button>
          <Button onClick={() => console.log('')} variant="tertiary">
            <Typography as="p" variant="13px">
              SHOP
            </Typography>
          </Button>
        </div>
      </Container>
    </>
  )
}
