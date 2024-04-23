import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Typography from '../../Typography'
import BillingDetails from './BillingDetails'
import PaymentDetails from './PaymentDetails'
import ShippingInfo from './ShippingInfo'

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
  console.log('errors', errors)
  return (
    <>
      <form
        className="flex flex-1 flex-col justify-evenly gap-8 rounded-lg bg-white px-[28px] py-[30px] md:gap-[54px] lg:px-12 lg:py-[54px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-8 md:gap-10">
          <Typography as="h2" variant="h2-2">
            Checkout
          </Typography>
          <BillingDetails errors={errors} register={register} />
        </div>
        <ShippingInfo errors={errors} register={register} />
        <PaymentDetails errors={errors} register={register} />
        <button type="submit">submit</button>
      </form>
    </>
  )
}
