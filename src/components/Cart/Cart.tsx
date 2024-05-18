import LinkButton from '@/components/LinkButton'
import Modal, { ModalProps } from '@/components/Modal'
import Typography from '@/components/Typography'
import { useCart } from '@/hooks/useCart'
import ItemAmount from '@/pages/ProductInfo/components/ItemAmount'
import numbro from 'numbro'

import TextButton from '../TextButton'

const deleteIcon4 = '/assets/shared/desktop/icon-x.png'

interface CartProps {
  open: ModalProps['open']
  setOpen: ModalProps['setOpen']
}

const Cart = ({ open, setOpen }: CartProps) => {
  const {
    cartItems,
    removeAllFromCart,
    removeFromCart,
    updateCartItemQuantity,
  } = useCart()

  const subtotal = cartItems.reduce((accumulator, { price, quantity }) => {
    return accumulator + price * quantity
  }, 0)

  const totalItems = cartItems.reduce((accumulator, { quantity }) => {
    return accumulator + quantity
  }, 0)

  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="flex flex-row justify-between">
        <Typography as="h3" variant="18px">
          Cart ({totalItems})
        </Typography>
        {totalItems > 0 && (
          <TextButton onClick={() => removeAllFromCart()}>
            Remove all
          </TextButton>
        )}
      </div>
      {cartItems && cartItems.length > 0 && (
        <ul className="flex flex-col gap-6 py-8">
          {cartItems.map((item) => (
            <li
              className="flex flex-row items-center justify-between"
              key={item.id}
            >
              <div className="flex flex-row items-center gap-1 md-custom:gap-4">
                {item.srcSet && item.srcSet.sm && (
                  <img
                    className="h-16 w-16 rounded-lg"
                    srcSet={item.srcSet.sm}
                  />
                )}
                <div>
                  <Typography
                    as="p"
                    className="w-[110px] overflow-hidden text-ellipsis whitespace-nowrap font-bold uppercase"
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
              <div className="flex flex-row gap-1">
                <ItemAmount
                  amount={item.quantity}
                  className="h-8 w-[96px]"
                  updateQuantity={(newQuantity) =>
                    updateCartItemQuantity(item.id, newQuantity)
                  }
                />
                <button onClick={() => removeFromCart(item.id)}>
                  <img className="w-[15px]" src={deleteIcon4} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {totalItems === 0 && (
        <Typography as="p" className="py-8 opacity-50" variant="15px">
          No items in your cart.
        </Typography>
      )}
      <div className="flex flex-col gap-6">
        <div className="flex flex-row justify-between">
          <Typography as="h3" className="opacity-50" variant="15px">
            Total
          </Typography>
          <Typography as="h3" variant="18px">
            {numbro(subtotal).formatCurrency('$ 0,0')}
          </Typography>
        </div>
        <LinkButton
          className="w-full"
          color="orange"
          disabled={!cartItems || cartItems.length === 0}
          onClick={() => setOpen(false)}
          to="/checkout"
        >
          <Typography as="h4" className="font-medium" variant="13px">
            Checkout
          </Typography>
        </LinkButton>
      </div>
    </Modal>
  )
}

export default Cart
