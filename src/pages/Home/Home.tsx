import Earphones from './components/Earphones'
import Hero from './components/Hero'
import ProductLinks from './components/ProductLinks'
import SpeakerOne from './components/SpeakerOne'
import SpeakerTwo from './components/SpeakerTwo'
import Store from './components/Store'

export default function Home() {
  return (
    <>
      <div className="mb-[120px] flex flex-col gap-[92px] md:mb-24 md:gap-[148px] lg:mb-[168px] lg:gap-[200px]">
        <Hero />
        <ProductLinks />
      </div>
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
        <SpeakerOne />
        <SpeakerTwo />
        <Earphones />
      </div>
      <Store />
    </>
  )
}