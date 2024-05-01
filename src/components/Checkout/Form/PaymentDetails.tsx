import { useState } from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

import IconCash from '../../../assets/checkout/icon-cash-on-delivery.svg?react'
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
          payment details
        </Typography>
        <div className="grid gap-4 md:grid-cols-2">
          <Typography as="label" className="grow" variant="12px">
            Payment Method
          </Typography>

          <div className="grid gap-4 text-[14px] font-bold tracking-[-0.25px]">
            <label className="input-wrapper">
              <input
                {...register('payment', { required: true })}
                checked={selectedPayment === 'e-money'}
                onChange={handlePaymentChange}
                type="radio"
                value="e-money"
              />
              e-Money
            </label>
            <label className="input-wrapper">
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
      </div>
      {selectedPayment === 'e-money' && (
        <div className="grid gap-4 md:grid-cols-2">
          <Input
            error={
              errors.eMoneyNumber && (errors.eMoneyNumber.message as string)
            }
            placeholder="238521993"
            {...register('eMoneyNumber', {
              pattern: {
                message: 'Use only numbers',
                value: /^[0-9]+$/,
              },
              required: 'Required field',
            })}
            label="e-Money Number"
          />
          <Input
            error={errors.eMoneyPin && (errors.eMoneyPin.message as string)}
            placeholder="6891"
            {...register('eMoneyPin', {
              pattern: {
                message: 'Use only numbers',
                value: /^[0-9]+$/,
              },
              required: 'Required field',
            })}
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
