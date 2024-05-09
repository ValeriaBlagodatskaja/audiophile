import SpeakerZX7Desktop from '../../../assets/home/desktop/image-speaker-zx7.jpg'
import SpeakerZX7Mobile from '../../../assets/home/mobile/image-speaker-zx7.jpg'
import SpeakerZX7Tablet from '../../../assets/home/tablet/image-speaker-zx7.jpg'
import { LinkButton } from '../../../components/Button'
import Container from '../../../components/Container'
import Typography from '../../../components/Typography'

export default function SpeakerTwo() {
  return (
    <Container className="relative flex h-80 overflow-hidden">
      <picture className="rounded-lg">
        <source media="(min-width:750px)" srcSet={SpeakerZX7Desktop} />
        <source media="(min-width:390px)" srcSet={SpeakerZX7Tablet} />
        <img
          className="custom-media h-full max-w-full grow rounded-lg "
          src={SpeakerZX7Mobile}
        />
      </picture>
      <div className="absolute ml-6 flex flex-col gap-8 pt-[101px] md:ml-[62px] lg:ml-[95px]">
        <Typography as="p" variant="28px">
          ZX7 speaker
        </Typography>
        <LinkButton color="white" to="/zx7-speaker">
          <Typography as="p" variant="13px">
            See product
          </Typography>
        </LinkButton>
      </div>
    </Container>
  )
}
