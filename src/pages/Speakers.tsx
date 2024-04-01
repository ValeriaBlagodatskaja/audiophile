import SpeakerZX7Desktop from '../assets/exported-figma/speaker-zx7-preview-desktop.png'
import SpeakerZX7Mobile from '../assets/exported-figma/speaker-zx7-preview-mobile.png'
import SpeakerZX7Tablet from '../assets/exported-figma/speaker-zx7-preview-tablet.png'
import SpeakerZX9Desktop from '../assets/exported-figma/speaker-zx9-preview-desktop.png'
import SpeakerZX9Mobile from '../assets/exported-figma/speaker-zx9-preview-mobile.png'
import SpeakerZX9Tablet from '../assets/exported-figma/speaker-zx9-preview-tablet.png'
import ProductListPage from '../components/ProductListPage'

export default function Speakers() {
  return (
    <ProductListPage
      products={[
        {
          description:
            'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
          newProduct: true,
          srcSet: {
            lg: SpeakerZX9Desktop,
            md: SpeakerZX9Tablet,
            sm: SpeakerZX9Mobile,
          },
          title: 'ZX9 SPEAKER',
          to: 'toote leht',
        },
        {
          description:
            'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
          newProduct: false,
          srcSet: {
            lg: SpeakerZX7Desktop,
            md: SpeakerZX7Tablet,
            sm: SpeakerZX7Mobile,
          },
          title: 'ZX7 SPEAKER',
          to: 'toote leht',
        },
      ]}
      title="Speakers"
    />
  )
}
