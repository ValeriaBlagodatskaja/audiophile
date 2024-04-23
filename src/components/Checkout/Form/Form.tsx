import { useState } from 'react'
import { useForm } from 'react-hook-form'

import IconCash from '../../../assets/checkout/icon-cash-on-delivery.svg?react'
import Container from '../../Container'
import Typography from '../../Typography'
import Input from '../Input'

export default function Form() {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm()
  const [data, setData] = useState('')

  const onSubmit = (data: any) => {
    console.log('data', data)
    setData(data)
  }

  const [selectedPayment, setSelectedPayment] = useState('e-money')

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment(event.target.value)
  }

  return (
    <>
      <Container>
        <form
          className="flex flex-1 flex-col justify-evenly gap-8 rounded-lg bg-white px-[28px] py-[30px] md:gap-[54px] lg:px-12 lg:py-[54px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <div className="flex flex-col gap-8 md:gap-10">
              <Typography as="h2" variant="h2-2">
                Checkout
              </Typography>
              <Typography
                as="p"
                className="pb-4 text-orange-dark"
                variant="13px"
              >
                billing details
              </Typography>
            </div>

            <div className="flex flex-col gap-6 md:flex-row md:gap-4">
              <div className="grow">
                <Input
                  error={errors.name && (errors.name.message as string)}
                  placeholder="John Doe"
                  {...register('name', { required: 'Required field' })}
                  className="mb-6"
                  label="Name"
                />
                <Input
                  error={errors.mail && (errors.mail.message as string)}
                  placeholder="johndoe@example.com"
                  {...register('mail', {
                    required: 'Email Address is required',
                  })}
                  label="Email Address"
                  type="email"
                />
              </div>
              <div className="grow">
                <Input
                  error={errors.tel && (errors.tel.message as string)}
                  placeholder="+372..."
                  {...register('tel', {
                    pattern: {
                      message: 'Invalid phone number format',
                      value: /^\+(?:[0-9] ?){6,14}[0-9]$/,
                    },
                    required: 'Phone Number is required',
                  })}
                  label="Phone Number"
                  type="tel"
                />
              </div>
            </div>
          </div>

          <div>
            <Typography as="p" className="pb-4 text-orange-dark" variant="13px">
              shipping info
            </Typography>
            <div className="flex flex-col gap-6">
              <Input
                error={errors.address && (errors.address.message as string)}
                placeholder="1137 Williams Avenue"
                {...register('address', { required: 'Required field' })}
                label="Address"
              />
              <div className="flex flex-col gap-6 md:flex-row md:gap-4">
                <div className="grow">
                  <Input
                    error={errors.zip && (errors.zip.message as string)}
                    placeholder="10001"
                    {...register('zip', { required: 'Required field' })}
                    className="mb-6"
                    label="ZIP Code"
                  />
                  <Input
                    error={errors.city && (errors.city.message as string)}
                    placeholder="New York"
                    {...register('city', { required: 'Required field' })}
                    label="City"
                  />
                </div>
                <div className="grow">
                  <Input
                    error={errors.country && (errors.country.message as string)}
                    placeholder="United States"
                    {...register('country', { required: 'Required field' })}
                    label="Country"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
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
                    errors.eMoneyNumber &&
                    (errors.eMoneyNumber.message as string)
                  }
                  placeholder="238521993"
                  {...register('eMoneyNumber', { required: 'Required field' })}
                  label="e-Money Number"
                />
                <Input
                  error={
                    errors.eMoneyPin && (errors.eMoneyPin.message as string)
                  }
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
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </Typography>
              </div>
            )}
            <button type="submit">submit</button>
          </div>
        </form>
      </Container>
    </>
  )
}
