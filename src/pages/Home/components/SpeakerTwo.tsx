import Container from '@/components/Container'
import LinkButton from '@/components/LinkButton'
import Typography from '@/components/Typography'

const speakerZX7Desktop = '/assets/home/desktop/image-speaker-zx7.jpg'
const speakerZX7Mobile = '/assets/home/mobile/image-speaker-zx7.jpg'
const speakerZX7Tablet = '/assets/home/tablet/image-speaker-zx7.jpg'

export default function SpeakerTwo() {
  return (
    <Container className="relative flex h-80 overflow-hidden">
      <picture className="rounded-lg">
        <source media="(min-width:750px)" srcSet={speakerZX7Desktop} />
        <source media="(min-width:390px)" srcSet={speakerZX7Tablet} />
        <img
          className="custom-media h-full max-w-full grow rounded-lg "
          src={speakerZX7Mobile}
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
