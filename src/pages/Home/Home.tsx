import Footer from '../../components/Footer'
import Earphones from './components/Earphones'
import Hero from './components/Hero'
import ProductLinks from './components/ProductLinks'
import SpeakerOne from './components/SpeakerOne'
import SpeakerTwo from './components/SpeakerTwo'
import Store from './components/Store'

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-[92px] md:gap-[148px] lg:gap-[200px]">
        <Hero />
        <ProductLinks />
      </div>
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
        <SpeakerOne />
        <SpeakerTwo />
        <Earphones />
      </div>
      <div className="flex flex-col gap-[120px] md:gap-24 lg:gap-[200px] ">
        <Store />
        <Footer />
      </div>
    </>
  )
}
