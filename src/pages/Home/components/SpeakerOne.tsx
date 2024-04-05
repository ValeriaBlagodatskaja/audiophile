import SpeakerImageZX9Mobile from '../../../assets/exported-figma/image-speaker-zx9-mobile.png'
import SpeakerImageZX9Tablet from '../../../assets/exported-figma/image-speaker-zx9-tablet.png'
import SpeakerImageZX9Desktop from '../../../assets/home/desktop/image-speaker-zx9.png'
import Circles from '../../../assets/home/desktop/pattern-circles.svg?react'
import { LinkButton } from '../../../components/Button'
import Container from '../../../components/Container'
import Typography from '../../../components/Typography'

export default function SpeakerOne() {
  return (
    <Container>
      <div className="relative flex h-[600px] flex-col items-center justify-center gap-[24px] overflow-hidden rounded-lg bg-orange-dark text-center md:h-[720px] lg:h-[560px] lg:flex-row lg:gap-[138px]">
        <div className="absolute top-[-370px] h-[800px] w-[800px] rounded-full border-[1px] border-white border-opacity-20 md:top-[-300px] md:h-[950px] md:w-[950px] lg:h-[850px] lg:w-[850px] lg:border-0" />

        <Circles className="lg:absolute lg:left-[-166px] lg:top-[-60px]" />
        <div className="relative mb-[-50px] md:mb-[-120px]">
          <div className="overfow-hidden flex h-[320px] w-[320px] items-center justify-center rounded-full border-[1px] border-white border-opacity-20 md:h-[540px] md:w-[540px] lg:border-0">
            <div className="flex items-center justify-center">
              <div className="flex h-[276px] w-[276px] items-center justify-center overflow-hidden rounded-full ring-[1px] ring-white ring-opacity-20 md:h-[450px] md:w-[450px] lg:ring-0">
                <picture className="absolute  lg:top-[20px] lg:max-w-[400px]">
                  <source
                    media="(min-width:1100px)"
                    srcSet={SpeakerImageZX9Desktop}
                  />
                  <source
                    media="(min-width:768px)"
                    srcSet={SpeakerImageZX9Tablet}
                  />
                  <img src={SpeakerImageZX9Mobile} />
                </picture>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mb-[58px] flex flex-col items-center justify-center gap-[24px] text-center md:mb-[150px] lg:mb-0 lg:flex lg:items-start lg:text-left">
          <Typography as="h1" className=" text-white" color="h1">
            ZX9 <br />
            SPEAKER
          </Typography>
          <Typography
            as="p"
            className="w-[280px] text-white md:mb-[16px] md:w-[349px]"
            color="15px"
          >
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </Typography>
          <LinkButton color="black" to="/">
            <Typography as="p" color="13px">
              SEE PRODUCT
            </Typography>
          </LinkButton>
        </div>
      </div>
    </Container>
  )
}
