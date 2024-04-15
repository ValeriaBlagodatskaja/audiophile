import Button from '../../components/Button'

interface ItemAmountProps {
  amount: number
  setAmount: React.Dispatch<React.SetStateAction<number>>
}

export default function ItemAmount({ amount, setAmount }: ItemAmountProps) {
  const increaseAmount = () => {
    setAmount(amount + 1)
  }

  const decreaseAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1)
    }
  }

  return (
    <div className="flex h-12 w-[120px] place-content-around items-center	 bg-gray-light">
      <Button color="gray" onClick={decreaseAmount}>
        -
      </Button>
      <span className="text-[13px] font-bold">{amount}</span>
      <Button color="gray" onClick={increaseAmount}>
        +
      </Button>
    </div>
  )
}
