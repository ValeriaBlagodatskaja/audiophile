import clsx from 'clsx'

import Button from '../../../components/Button'

interface ItemAmountProps {
  amount: number
  className?: string

  updateQuantity: (newQuantity: number) => void
}

export default function ItemAmount({
  amount,
  className,
  updateQuantity,
}: ItemAmountProps) {
  const increaseAmount = () => {
    updateQuantity(amount + 1)
  }

  const decreaseAmount = () => {
    if (amount > 1) {
      updateQuantity(amount - 1)
    }
  }

  return (
    <div
      className={clsx(
        'flex h-12 w-[120px] place-content-around items-center bg-gray-light',
        className
      )}
    >
      <Button
        className="h-12 w-[60px] text-[20px]"
        color="gray"
        onClick={decreaseAmount}
      >
        -
      </Button>
      <span className="text-[15px] font-bold">{amount}</span>
      <Button
        className="h-12 w-[60px] text-[20px]"
        color="gray"
        onClick={increaseAmount}
      >
        +
      </Button>
    </div>
  )
}
