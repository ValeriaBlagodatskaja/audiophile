import OrderConfirmationIcon from '@/assets/icon-order-confirmation.svg?react'
import { CartItem } from '@/components/Cart/context/CartContext'
import LinkButton from '@/components/LinkButton'
import Modal, { ModalProps } from '@/components/Modal'
import Typography from '@/components/Typography'
import { useCart } from '@/hooks/useCart'
import clsx from 'clsx'
import numbro from 'numbro'
import { useState } from 'react'

interface OrderConfirmationModalProps {
  cartItems: CartItem[]
  grandTotal: number
  onClose?: ModalProps['onClose']
  open: ModalProps['open']
  setOpen: ModalProps['setOpen']
}

export default function OrderConfirmationModal({
  cartItems,
  grandTotal,
  onClose,
  open,
  setOpen,
}: OrderConfirmationModalProps) {
  const [showAllItems, setShowAllItems] = useState(false)
  const { removeAllFromCart } = useCart()

  const toggleShowAllItems = () => {
    setShowAllItems(!showAllItems)
  }

  const displayedItems = showAllItems ? cartItems : cartItems.slice(0, 1)

  return (
    <Modal
      className="md:w-[540px]"
      onClose={onClose}
      open={open}
      setOpen={setOpen}
    >
      <div className="flex flex-col gap-6 md:gap-8 ">
        <OrderConfirmationIcon />
        <div className="flex flex-col gap-4 md:gap-6">
          <Typography as="h3" variant="24px-32px">
            Thank you for your order
          </Typography>
          <Typography as="p" className="opacity-50" variant="15px">
            You will receive an email confirmation shortly.
          </Typography>
        </div>

        <div className="flex flex-col overflow-hidden rounded-lg md:flex-row">
          <ul className="flex grow flex-col gap-6 bg-gray-light p-6">
            {displayedItems.map((item, index) => (
              <li key={item.id}>
                <div
                  className={clsx(
                    'flex flex-row items-center justify-between',
                    index === displayedItems.length - 1 &&
                      cartItems.length > 1 &&
                      'border-b border-gray-light-200'
                  )}
                >
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
                        {numbro(item.price).formatCurrency('$ 0,0')}
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
                  {!showAllItems && index === 0 && cartItems.length > 1 && (
                    <button
                      className="pt-6 text-[13px] font-bold opacity-50"
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
              className="whitespace-nowrap uppercase text-white opacity-50"
              variant="15px"
            >
              Grand total
            </Typography>
            <Typography as="h3" className="text-white" variant="18px">
              {numbro(grandTotal).formatCurrency('$ 0,0')}
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
            Back to home
          </Typography>
        </LinkButton>
      </div>
    </Modal>
  )
}
