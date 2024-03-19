import { LinkButton } from './Button'

import ShadowHeadphones from '../assets/exported-figma/headphones-with-shadow.png'
import ShadowSpeakers from '../assets/exported-figma/speakers-with-shadow.png'
import ShadowEarPhones from '../assets/exported-figma/earphones-with-shadow.png'
import Typography from './Typography'

function MenuLink() {
  return (
    <div className="flex flex-row flex-col items-center gap-[68px] rounded-lg md:flex-row md:gap-[10px]">
      <div className="bg-gray-light relative mx-[24px] mt-[84px] flex h-[165px] w-[328px] items-center justify-center rounded-lg md:mb-[67px] md:ml-[40px] md:mr-0 md:mt-[108px] md:w-[224px]">
        <div className="flex flex-col items-center justify-center">
          <img
            className="absolute -top-[50px] right-[76.5px] md:right-[23px]"
            src={ShadowHeadphones}
          />
          <div className="mt-[62px] flex flex-col gap-[17px]">
            <Typography as="h2" variant="15px">
              HEADPHONES
            </Typography>
            <LinkButton to="/" variant="tertiary">
              <Typography as="h3" variant="13px">
                SHOP
              </Typography>
            </LinkButton>
          </div>
        </div>
      </div>
      <div className="bg-gray-light	 relative mx-[24px] flex h-[165px] w-[328px] items-center justify-center rounded-lg md:mb-[67px] md:ml-0 md:mr-0 md:mt-[108px] md:w-[224px]">
        <div className="flex flex-col items-center justify-center">
          <img
            className="absolute -top-[50px] right-[76.5px] md:right-[23px]"
            src={ShadowSpeakers}
          />
          <div className="mt-[62px] flex flex-col gap-[17px]">
            <Typography as="h2" variant="15px">
              SPEAKERS
            </Typography>
            <LinkButton to="/" variant="tertiary">
              <Typography as="h3" variant="13px">
                SHOP
              </Typography>
            </LinkButton>
          </div>
        </div>
      </div>
      <div className="bg-gray-light	 relative mx-[24px] mb-[35px]  flex h-[165px] w-[328px] items-center justify-center rounded-lg md:mb-[67px] md:ml-0 md:mr-[40px] md:mt-[108px] md:w-[224px]">
        <div className="flex flex-col items-center justify-center">
          <img
            className="absolute -top-[50px] right-[76.5px] md:right-[23px]"
            src={ShadowEarPhones}
          />
          <div className="mt-[62px] flex flex-col gap-[17px]">
            <Typography as="h2" variant="15px">
              EARPHONES
            </Typography>
            <LinkButton to="/" variant="tertiary">
              <Typography as="h3" variant="13px">
                SHOP
              </Typography>
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MenuLink
