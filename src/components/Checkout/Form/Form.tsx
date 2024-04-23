import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Container from '../../Container'
import BillingDetails from './BillingDetails'
import PaymentDetails from './PaymentDetails'
import ShippingInfo from './ShippingInfo'

export default function Form() {
  const { handleSubmit, register } = useForm()
  const [data, setData] = useState('')

  const onSubmit = (data: any) => {
    console.log('data', data)
    setData(data)
  }

  return (
    <>
      <Container>
        <form
          className="flex flex-1 flex-col justify-evenly gap-8 rounded-lg bg-white px-[28px] py-[30px] md:gap-[54px] lg:px-12 lg:py-[54px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <BillingDetails register={register} />
          <ShippingInfo register={register} />
          <PaymentDetails register={register} />
          <button type="submit">submit</button>
        </form>
      </Container>
    </>
  )
}
