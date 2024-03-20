import ShadowEarPhones from '../assets/exported-figma/earphones-with-shadow.png'
import ShadowHeadphones from '../assets/exported-figma/headphones-with-shadow.png'
import ShadowSpeakers from '../assets/exported-figma/speakers-with-shadow.png'
import MenuLink from './MenuLink'

function MenuLinks() {
  return (
    <div className="absolute flex w-full flex-col items-center gap-[68px] rounded-b-lg  bg-white pb-[35px] pt-[84px] md:flex-row md:justify-center md:gap-[10px] md:pb-[67px] md:pt-[108px] ">
      <MenuLink src={ShadowHeadphones}>HEADPHONES</MenuLink>
      <MenuLink src={ShadowSpeakers}>SPEAKERS</MenuLink>
      <MenuLink src={ShadowEarPhones}>EARPHONES</MenuLink>
    </div>
  )
}
export default MenuLinks
