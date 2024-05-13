import Earphones from '@/pages/Home/components/Earphones'
import Hero from '@/pages/Home/components/Hero'
import ProductLinks from '@/pages/Home/components/ProductLinks'
import SpeakerOne from '@/pages/Home/components/SpeakerOne'
import SpeakerTwo from '@/pages/Home/components/SpeakerTwo'
import Store from '@/pages/Home/components/Store'

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
