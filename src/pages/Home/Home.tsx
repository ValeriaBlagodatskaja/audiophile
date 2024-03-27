import Earphones from '../Home/Earphones'
import Hero from '../Home/Hero'
import ProductLinks from '../Home/ProductLinks'
import SpeakerOne from '../Home/SpeakerOne'
import SpeakerTwo from '../Home/SpeakerTwo'
import Store from '../Home/Store'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative z-10"> </div>
      <ProductLinks />
      <SpeakerOne />
      <SpeakerTwo />
      <Earphones />
      <Store />
    </>
  )
}
