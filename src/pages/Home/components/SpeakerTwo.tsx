import SpeakerZX7Desktop from '../../../assets/home/desktop/image-speaker-zx7.jpg'
import SpeakerZX7Mobile from '../../../assets/home/mobile/image-speaker-zx7.jpg'
import SpeakerZX7Tablet from '../../../assets/home/tablet/image-speaker-zx7.jpg'
import { LinkButton } from '../../../components/Button'
import Container from '../../../components/Container'
import Typography from '../../../components/Typography'

export default function SpeakerTwo() {
  return (
    <Container className="relative flex h-[320px] overflow-hidden">
      <picture className="rounded-lg">
        <source media="(min-width:750px)" srcSet={SpeakerZX7Desktop} />
        <source media="(min-width:390px)" srcSet={SpeakerZX7Tablet} />
        <img
          className="custom-media h-full max-w-full grow rounded-lg "
          src={SpeakerZX7Mobile}
        />
      </picture>
      <div className="absolute ml-[24px] flex flex-col gap-[32px] pt-[101px] md:ml-[62px] lg:ml-[95px]">
        <Typography as="p" variant="28px">
          ZX7 SPEAKER
        </Typography>
        <LinkButton color="white" to="/zx7-speaker">
          <Typography as="p" variant="13px">
            SEE PRODUCT
          </Typography>
        </LinkButton>
      </div>
    </Container>
  )
}
