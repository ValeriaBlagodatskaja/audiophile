import { useState } from 'react'

import OrderConfirmationIcon from '../../assets/checkout/icon-order-confirmation.svg?react'
import { LinkButton } from '../Button'
import { useCart } from '../Cart/useCart'
import Modal from '../Modal'
import Typography from '../Typography'

export default function Summary({
  isFormCompleted,
  onContinue,
}: {
  isFormCompleted: boolean
  onContinue: () => void
}) {
  const { cartItems } = useCart()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [showAllItems, setShowAllItems] = useState(false)

  const toggleShowAllItems = () => {
    setShowAllItems(!showAllItems)
  }

  const displayedItems = showAllItems ? cartItems : cartItems.slice(0, 1)

  const handleContinue = () => {
    if (isFormCompleted) {
      setIsModalOpen(true)
    } else {
      onContinue()
    }
  }

  const subtotal = cartItems.reduce((accumulator, { price, quantity }) => {
    return accumulator + price * quantity
  }, 0)

  const shippingFee = cartItems.length > 0 ? 50 : 0

  const vat = Math.round((subtotal + shippingFee) * 0.22)

  const grandTotal = vat + subtotal

  return (
    <>
      <div className="flex flex-col gap-8 rounded-lg bg-white px-[28px] py-[30px] lg:h-fit lg:w-[350px]">
        <Typography as="h4" variant="18px">
          summary
        </Typography>
        <ul className="flex flex-col gap-6">
          {cartItems.map((item) => (
            <li key={item.id}>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-4">
                  {item.srcSet && item.srcSet.sm && (
                    <img
                      className="h-16 w-16 rounded-lg"
                      srcSet={item.srcSet.sm}
                    />
                  )}
                  <div className="flex flex-col">
                    <Typography
                      as="p"
                      className="font-bold uppercase"
                      variant="15px"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      as="p"
                      className="text-[14px] opacity-50"
                      variant="15px"
                    >
                      $ {item.price}
                    </Typography>
                  </div>
                </div>
                <Typography
                  as="p"
                  className="text-[14px] opacity-50"
                  variant="15px"
                >
                  x{item.quantity}
                </Typography>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-between">
              <Typography as="h3" className="opacity-50" variant="15px">
                TOTAL
              </Typography>
              <Typography as="h3" variant="18px">
                $ {subtotal}
              </Typography>
            </div>

            <div className="flex flex-row justify-between">
              <Typography as="h3" className="opacity-50" variant="15px">
                SHIPPING
              </Typography>
              <Typography as="h3" variant="18px">
                $ {shippingFee}
              </Typography>
            </div>

            <div className="flex flex-row justify-between">
              <Typography as="h3" className="opacity-50" variant="15px">
                VAT(22%)
              </Typography>
              <Typography as="h3" variant="18px">
                $ {vat}
              </Typography>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <Typography as="h3" className="opacity-50" variant="15px">
              GRAND TOTAL
            </Typography>
            <Typography as="h3" className="text-orange-dark" variant="18px">
              $ {grandTotal}
            </Typography>
          </div>
        </div>
        <button
          className="mx hover:orange-light h-12 w-full bg-orange-dark px-4 py-2 text-[13px] tracking-[1px] text-white"
          onClick={handleContinue}
        >
          CONTINUE
        </button>
      </div>
      {isModalOpen && (
        <Modal
          className="-translate-y-[54%] md:w-[540px]"
          open={isModalOpen}
          setOpen={setIsModalOpen}
        >
          <div className="flex flex-col gap-6 md:gap-8 ">
            <OrderConfirmationIcon />
            <div className="flex flex-col gap-4 md:gap-6">
              <Typography as="h3" variant="h3">
                thank you for your order
              </Typography>
              <Typography as="p" className="opacity-50" variant="15px">
                You will receive an email confirmation shortly.
              </Typography>
            </div>

            <div className="flex flex-col md:flex-row">
              <ul className="flex flex-col gap-6 bg-gray-light p-6 lg:pl-8">
                {displayedItems.map((item, index) => (
                  <li key={item.id}>
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row gap-4">
                        {item.srcSet && item.srcSet.sm && (
                          <img
                            className="h-[50px] w-[50px]"
                            srcSet={item.srcSet.sm}
                          />
                        )}
                        <div className="flex flex-col">
                          <Typography
                            as="p"
                            className="text-[14px] font-bold uppercase"
                            variant="13px"
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            as="p"
                            className="text-[14px] opacity-50"
                            variant="15px"
                          >
                            $ {item.price}
                          </Typography>
                        </div>
                      </div>
                      <Typography
                        as="p"
                        className="text-[14px] opacity-50"
                        variant="15px"
                      >
                        x{item.quantity}
                      </Typography>
                    </div>
                    <div className="flex flex-col gap-6">
                      {index === displayedItems.length - 1 && (
                        <div className="h-[1px] bg-black opacity-[0.08]"></div>
                      )}

                      {!showAllItems && index === 0 && cartItems.length > 1 && (
                        <button
                          className="text-[13px] font-bold opacity-50"
                          onClick={toggleShowAllItems}
                        >
                          and {cartItems.length - 1} other item(s)
                        </button>
                      )}
                    </div>
                  </li>
                ))}
                {showAllItems && (
                  <button
                    className="text-[13px] font-bold opacity-50"
                    onClick={toggleShowAllItems}
                  >
                    View less
                  </button>
                )}
              </ul>
              <div className="flex flex-col  justify-center gap-2 bg-black py-[15px] pl-6 pr-[26px] md:pl-8">
                <Typography
                  as="h3"
                  className="whitespace-nowrap text-white opacity-50"
                  variant="15px"
                >
                  GRAND TOTAL
                </Typography>
                <Typography as="h3" className="text-white" variant="18px">
                  $ {grandTotal}
                </Typography>
              </div>
            </div>
            <LinkButton className="mx w-full" color="orange" to="/">
              <Typography as="h4" className="uppercase" variant="13px">
                back to home
              </Typography>
            </LinkButton>
          </div>
        </Modal>
      )}
    </>
  )
}
