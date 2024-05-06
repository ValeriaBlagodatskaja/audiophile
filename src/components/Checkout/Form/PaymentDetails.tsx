import { useState } from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

import IconCash from '../../../assets/checkout/icon-cash-on-delivery.svg?react'
import RadioInput from '../../RadioInput'
import Typography from '../../Typography'
import { CheckoutFormData } from '../Checkout'
import Input from './Input'

interface PaymentDetailsProps {
  errors: FieldErrors<FieldValues>
  register: UseFormRegister<CheckoutFormData>
}

export default function PaymentDetails({
  errors,
  register,
}: PaymentDetailsProps) {
  const [selectedPayment, setSelectedPayment] = useState('e-money')

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment(event.target.value)
  }
  return (
    <>
      <div className="grid gap-4">
        <Typography as="p" className="text-orange-dark" variant="13px">
          Payment Details
        </Typography>
        <div className="grid gap-4 md:grid-cols-2">
          <Typography as="label" className="grow" variant="12px">
            Payment Method
          </Typography>

          <div className="grid gap-4 text-[14px] font-bold tracking-[-0.25px]">
            <RadioInput
              {...register('payment', { required: true })}
              checked={selectedPayment === 'e-money'}
              label="e-Money"
              onChange={handlePaymentChange}
              type="radio"
              value="e-money"
            />
            <RadioInput
              {...register('payment', { required: true })}
              checked={selectedPayment === 'cash'}
              label="Cash on Delivery"
              onChange={handlePaymentChange}
              type="radio"
              value="cash"
            />
          </div>
        </div>
      </div>
      {selectedPayment === 'e-money' && (
        <div className="grid gap-4 md:grid-cols-2">
          <Input
            error={
              errors.eMoneyNumber && (errors.eMoneyNumber.message as string)
            }
            placeholder="238521993"
            {...register('eMoneyNumber', {
              required: 'Required field',
            })}
            label="e-Money Number"
            type="number"
          />
          <Input
            error={errors.eMoneyPin && (errors.eMoneyPin.message as string)}
            placeholder="6891"
            {...register('eMoneyPin', {
              min: 0,
              pattern: {
                message: 'Please enter a 4-digit positive number',
                value: /^\d{4}$/,
              },
              required: 'Required field',
            })}
            label="e-Money PIN"
            type="number"
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
