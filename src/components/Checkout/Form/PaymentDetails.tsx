import { useState } from 'react'
import { useForm } from 'react-hook-form'

import IconCash from '../../../assets/checkout/icon-cash-on-delivery.svg?react'
import Typography from '../../Typography'
import Input from '../Input'

interface PaymentDetailsProps {
  register: any
}

export default function PaymentDetails({ register }: PaymentDetailsProps) {
  const {
    formState: { errors },
  } = useForm()

  const [selectedPayment, setSelectedPayment] = useState('e-money')

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment(event.target.value)
  }
  return (
    <>
      <Typography as="p" className="pb-4 text-orange-dark" variant="13px">
        payment details
      </Typography>
      <div className="flex flex-col gap-4 md:flex-row">
        <Typography as="label" className="grow" variant="12px">
          Payment Method
        </Typography>

        <div className="flex grow flex-col gap-4 pb-[30px] text-[14px] font-bold tracking-[-0.25px]">
          <label className="flex h-14 w-full items-center gap-4 rounded-lg border-[1px] pl-6 focus:border-orange-dark">
            <input
              {...register('payment', { required: true })}
              checked={selectedPayment === 'e-money'}
              onChange={handlePaymentChange}
              type="radio"
              value="e-money"
            />
            e-Money
          </label>
          <label className="flex h-14 w-full items-center gap-4 rounded-lg border-[1px] pl-6 focus:border-orange-dark">
            <input
              {...register('payment', { required: true })}
              checked={selectedPayment === 'cash'}
              onChange={handlePaymentChange}
              type="radio"
              value="cash"
            />
            Cash on Delivery
          </label>
        </div>
      </div>
      {selectedPayment === 'e-money' && (
        <div className="flex grow flex-col gap-4 md:flex-row">
          <Input
            error={
              errors.eMoneyNumber && (errors.eMoneyNumber.message as string)
            }
            placeholder="238521993"
            {...register('eMoneyNumber', { required: 'Required field' })}
            label="e-Money Number"
          />
          <Input
            error={errors.eMoneyPin && (errors.eMoneyPin.message as string)}
            placeholder="6891"
            {...register('eMoneyPin', { required: 'Required field' })}
            label="e-Money PIN"
          />
        </div>
      )}
      {selectedPayment === 'cash' && (
        <div className="flex flex-row items-center gap-8">
          <div>
            <IconCash />
          </div>
          <Typography as="p" className="opacity-50" variant="15px">
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </Typography>
        </div>
      )}
    </>
  )
}
