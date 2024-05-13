import Container from '@/components/Container'
import GoBackLink from '@/components/GoBackLink'
import Typography from '@/components/Typography'
import BillingDetails from '@/pages/Checkout/components/BillingDetails'
import PaymentDetails from '@/pages/Checkout/components/PaymentDetails'
import ShippingInfo from '@/pages/Checkout/components/ShippingInfo'
import Summary from '@/pages/Checkout/components/Summary'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export interface CheckoutFormData {
  address: string
  city: string
  country: string
  eMoneyNumber?: string
  eMoneyPin?: string
  mail: string
  name: string
  payment: string
  tel: string
  zip: string
}

export default function Checkout() {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<CheckoutFormData>()

  const [isFormCompleted, setIsFormCompleted] = useState(false)

  const onSubmit = () => {
    setIsFormCompleted(Object.keys(errors).length === 0)
  }
  return (
    <>
      <GoBackLink />
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row">
          <form className="flex flex-1 flex-col justify-evenly gap-8 rounded-lg bg-white px-7 py-[30px] md:gap-[54px] lg:px-12 lg:py-[54px]">
            <div className="flex flex-col gap-8 md:gap-10">
              <Typography as="h2" variant="28px-32px">
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