import IconCash from '@/assets/checkout/icon-cash-on-delivery.svg?react'
import Input from '@/components/Input'
import RadioInput from '@/components/RadioInput'
import Typography from '@/components/Typography'
import { CheckoutFormData } from '@/pages/Checkout/CheckoutPage'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

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

  const fromTopMotion = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
      y: 0,
    },
  }
  return (
    <>
      <div className="grid gap-4">
        <Typography as="p" className="text-orange-dark" variant="13px">
          Payment details
        </Typography>
        <div className="grid gap-4 md:grid-cols-2">
          <Typography as="label" className="grow capitalize" variant="12px">
            Payment method
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
      <AnimatePresence>
        {selectedPayment === 'e-money' && (
          <motion.div
            className="grid gap-4 md:grid-cols-2"
            initial="hidden"
            variants={fromTopMotion}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <Input
              error={
                errors.eMoneyNumber && (errors.eMoneyNumber.message as string)
              }
              placeholder="238521993"
              {...register('eMoneyNumber', {
                pattern: {
                  message: 'Enter a 9-digit positive number',
                  value: /^[1-9]\d{8}$/,
                },
                required: 'Required field',
              })}
              label="e-Money Number"
              type="number"
            />
            <Input
              error={errors.eMoneyPin && (errors.eMoneyPin.message as string)}
              placeholder="6891"
              {...register('eMoneyPin', {
                pattern: {
                  message: 'Enter a 4-digit positive number',
                  value: /^[1-9]\d{3}$/,
                },
                required: 'Required field',
              })}
              label="e-Money PIN"
              type="number"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedPayment === 'cash' && (
          <motion.div
            className="flex flex-row items-center gap-8"
            initial="hidden"
            variants={fromTopMotion}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <div>
              <IconCash />
            </div>
            <Typography as="p" className="opacity-50" variant="15px">
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </Typography>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
