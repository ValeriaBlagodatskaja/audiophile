import { useEffect, useState } from 'react'

import Button from '../../../components/Button'
import { useCart } from '../../../components/Cart/useCart'
import Typography from '../../../components/Typography'
import OrderConfirmationModal from './OrderConfirmationModal'

export default function Summary({
  isFormCompleted,
  onContinue,
}: {
  isFormCompleted: boolean
  onContinue: () => void
}) {
  const { cartItems } = useCart()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (isFormCompleted) {
      setIsModalOpen(true)
    }
  }, [isFormCompleted])

  const handleContinue = () => {
    onContinue()
  }

  const subtotal = cartItems.reduce((accumulator, { price, quantity }) => {
    return accumulator + price * quantity
  }, 0)

  const shippingFee = cartItems.length > 0 ? 50 : 0

  const vat = Math.round((subtotal + shippingFee) * 0.22)

  const grandTotal = vat + subtotal

  return (
    <>
      <div className="flex flex-col gap-8 rounded-lg bg-white px-7 py-[30px] lg:h-fit lg:w-[350px]">
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
        {/* Ainult üks nupp, component Button, see component võtab vastu propi nimega disabled. */}
        {cartItems.length > 0 ? (
          <button
            className="mx hover:orange-light h-12 w-full bg-orange-dark px-4 py-2 text-[13px] tracking-[1px] text-white"
            onClick={handleContinue}
          >
            CONTINUE
          </button>
        ) : (
          <Button
            className="x-4 h-12 w-full py-2 text-[13px] tracking-[1px]"
            color="gray-200"
          >
            CONTINUE
          </Button>
        )}
      </div>
      {isModalOpen && (
        <OrderConfirmationModal
          cartItems={cartItems}
          grandTotal={grandTotal}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  )
}
