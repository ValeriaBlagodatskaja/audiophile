import { useCart } from '../Cart/useCart'
import Typography from '../Typography'

export default function Summary() {
  const { cartItems, subtotal } = useCart()

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
        <div>
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
              $50
            </Typography>
          </div>

          <div className="flex flex-row justify-between">
            <Typography as="h3" className="opacity-50" variant="15px">
              VAT (INCLUDED)
            </Typography>
            <Typography as="h3" variant="18px">
              $
            </Typography>
          </div>
          <div className="flex flex-row justify-between">
            <Typography as="h3" className="opacity-50" variant="15px">
              GRAND TOTAL
            </Typography>
            <Typography as="h3" className="text-orange-dark" variant="18px">
              $
            </Typography>
          </div>
        </div>
      </div>
    </>
  )
}
