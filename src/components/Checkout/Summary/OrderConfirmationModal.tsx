import { useState } from 'react'

import OrderConfirmationIcon from '../../../assets/checkout/icon-order-confirmation.svg?react'
import { LinkButton } from '../../Button'
import { useCart } from '../../Cart/useCart'
import { CartItem } from '../../Cart/useCartProvider'
import Modal from '../../Modal'
import Typography from '../../Typography'

interface OrderConfirmationModalProps {
  cartItems: CartItem[]
  grandTotal: number
  isOpen: boolean
  onClose: () => void
}

export default function OrderConfirmationModal({
  cartItems,
  grandTotal,
  isOpen,
  onClose,
}: OrderConfirmationModalProps) {
  const { removeAllFromCart } = useCart()

  const [showAllItems, setShowAllItems] = useState(false)

  const toggleShowAllItems = () => {
    setShowAllItems(!showAllItems)
  }

  const displayedItems = showAllItems ? cartItems : cartItems.slice(0, 1)

  return (
    <Modal
      className="-translate-y-[340px] md:w-[540px]"
      closeOnClickOutside={false}
      open={isOpen}
      setOpen={onClose}
    >
      <div className="flex flex-col gap-6 md:gap-8 ">
        <OrderConfirmationIcon />
        <div className="flex flex-col gap-4 md:gap-6">
          <Typography as="h3" variant="24px-32px">
            thank you for your order
          </Typography>
          <Typography as="p" className="opacity-50" variant="15px">
            You will receive an email confirmation shortly.
          </Typography>
        </div>

        <div className="flex flex-col overflow-hidden rounded-lg md:flex-row">
          <ul className="flex grow flex-col gap-6 bg-gray-light p-6">
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
                  {index === displayedItems.length - 1 &&
                    cartItems.length > 1 && (
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
          <div className="flex flex-col justify-center gap-2 bg-black py-[15px] pl-6 pr-[26px]">
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
        <LinkButton
          className="mx w-full"
          color="orange"
          onClick={removeAllFromCart}
          to="/"
        >
          <Typography as="h4" className="uppercase" variant="13px">
            back to home
          </Typography>
        </LinkButton>
      </div>
    </Modal>
  )
}
