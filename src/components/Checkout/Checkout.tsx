import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Container from '../Container'
import GoBackLink from '../GoBackLink'
import Typography from '../Typography'
import BillingDetails from './Form/BillingDetails'
import PaymentDetails from './Form/PaymentDetails'
import ShippingInfo from './Form/ShippingInfo'
import Summary from './Summary'

export default function Checkout() {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm()

  const [isFormCompleted, setIsFormCompleted] = useState(false)

  const onSubmit = (data: any) => {
    console.log('Form submitted with data:', data)
    setIsFormCompleted(Object.keys(errors).length === 0)
  }
  return (
    <>
      <GoBackLink>Go Back</GoBackLink>
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row">
          <form className="flex flex-1 flex-col justify-evenly gap-8 rounded-lg bg-white px-[28px] py-[30px] md:gap-[54px] lg:px-12 lg:py-[54px]">
            <div className="flex flex-col gap-8 md:gap-10">
              <Typography as="h2" variant="h2-2">
                Checkout
              </Typography>
              <BillingDetails errors={errors} register={register} />
            </div>
            <ShippingInfo errors={errors} register={register} />
            <PaymentDetails errors={errors} register={register} />
          </form>
          <Summary
            isFormCompleted={isFormCompleted}
            onContinue={handleSubmit(onSubmit)}
          />
        </div>
      </Container>
    </>
  )
}
