import { CartItem } from '@/components/Cart/context/CartContext'
import LinkButton from '@/components/LinkButton'
import { ModalProps } from '@/components/Modal'
import Typography from '@/components/Typography'
import OrderConfirmationModal from '@/pages/Checkout/components/OrderConfirmationModal'
import numbro from 'numbro'

interface SummaryProps {
  cartItems: CartItem[]
  onClose: () => void
  onContinue: () => void
  open: ModalProps['open']
  setOpen: ModalProps['setOpen']
}

export default function Summary({
  cartItems,
  onClose,
  onContinue,
  open,
  setOpen,
}: SummaryProps) {
  const subtotal = cartItems.reduce((accumulator, { price, quantity }) => {
    return accumulator + price * quantity
  }, 0)
  const shippingFee = cartItems.length > 0 ? 50 : 0
  const vat = Math.round((subtotal + shippingFee) * 0.22)
  const grandTotal = vat + subtotal

  return (
    <>
      <OrderConfirmationModal
        cartItems={cartItems}
        grandTotal={grandTotal}
        onClose={onClose}
        open={open}
        setOpen={setOpen}
      />
      <div className="flex flex-col gap-8 rounded-lg bg-white px-7 py-[30px] lg:h-fit lg:w-[350px]">
        <Typography as="h4" variant="18px">
          Summary
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
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-between">
              <Typography
                as="h3"
                className="uppercase opacity-50"
                variant="15px"
              >
                Total
              </Typography>
              <Typography as="h3" variant="18px">
                {numbro(subtotal).formatCurrency('$ 0,0')}
              </Typography>
            </div>

            <div className="flex flex-row justify-between">
              <Typography
                as="h3"
                className="uppercase opacity-50"
                variant="15px"
              >
                Shipping
              </Typography>
              <Typography as="h3" variant="18px">
                {numbro(shippingFee).formatCurrency('$ 0')}
              </Typography>
            </div>

            <div className="flex flex-row justify-between">
              <Typography as="h3" className="opacity-50" variant="15px">
                VAT(22%)
              </Typography>
              <Typography as="h3" variant="18px">
                {numbro(vat).formatCurrency('$ 0,0')}
              </Typography>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <Typography as="h3" className="uppercase opacity-50" variant="15px">
              Grand total
            </Typography>
            <Typography as="h3" className="text-orange-dark" variant="18px">
              {numbro(grandTotal).formatCurrency('$ 0,0')}
            </Typography>
          </div>
        </div>
        <LinkButton
          className="w-full"
          color="orange"
          disabled={!cartItems || cartItems.length === 0}
          onClick={onContinue}
        >
          <Typography as="h4" className="font-medium" variant="13px">
            Continue
          </Typography>
        </LinkButton>
      </div>
    </>
  )
}
