import clsx from 'clsx'

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
      <button
        className="flex h-12 w-[60px] items-center justify-center gap-[13px] bg-transparent text-[20px] text-black opacity-50 hover:text-orange-dark"
        onClick={decreaseAmount}
      >
        -
      </button>
      <span className="text-[15px] font-bold">{amount}</span>
      <button
        className="flex h-12 w-[60px] items-center justify-center gap-[13px] bg-transparent text-[20px] text-black opacity-50 hover:text-orange-dark"
        onClick={increaseAmount}
      >
        +
      </button>
    </div>
  )
}
