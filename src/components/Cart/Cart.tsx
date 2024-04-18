import DeleteIcon4 from '../../assets/icon-x.png'
import ItemAmount from '../../pages/ProductInfo/ItemAmount'
import Button, { LinkButton } from '../Button'
import Typography from '../Typography'
import { useCart } from './useCart'

const Cart = () => {
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
    <>
      <div className="flex flex-row justify-between">
        <Typography as="h3" variant="18px">
          CART ({totalItems})
        </Typography>
        <Button color="gray" onClick={() => removeAllFromCart()}>
          Remove all
        </Button>
      </div>
      <ul className="flex flex-col gap-6 py-8">
        {cartItems.map((item) => (
          <li
            className="flex flex-row items-center justify-between"
            key={item.id}
          >
            <div className="flex flex-row items-center gap-1 md:gap-4">
              <img className="h-16 w-16 rounded-lg" srcSet={item.srcSet.sm} />
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
                  $ {item.price}
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
                <img className="w-[15px]" src={DeleteIcon4} />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-6">
        <div className="flex flex-row justify-between">
          <Typography as="h3" variant="15px">
            TOTAL
          </Typography>
          <Typography as="h3" variant="18px">
            $ {subtotal}
          </Typography>
        </div>
        <LinkButton className="mx-auto" color="orange">
          Checkout
        </LinkButton>
      </div>
    </>
  )
}

export default Cart
