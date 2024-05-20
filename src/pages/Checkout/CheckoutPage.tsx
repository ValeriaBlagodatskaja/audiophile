import Container from '@/components/Container'
import GoBackLink from '@/components/GoBackLink'
import Typography from '@/components/Typography'
import { useCart } from '@/hooks/useCart'
import BillingDetails from '@/pages/Checkout/components/BillingDetails'
import PaymentDetails from '@/pages/Checkout/components/PaymentDetails'
import ShippingInfo from '@/pages/Checkout/components/ShippingInfo'
import Summary from '@/pages/Checkout/components/Summary'
import { motion } from 'framer-motion'
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
  const [successModalOpen, setSuccessModalOpen] = useState(false)

  const { cartItems, removeAllFromCart } = useCart()

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<CheckoutFormData>()

  const onSubmit = (data: CheckoutFormData) => {
    console.log(data)
    setSuccessModalOpen(true)
  }

  const fromTopMotion = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
      y: 0,
    },
  }
  const fromTopMotionDelayed = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      transition: { delay: 0.3, duration: 0.5 },
      y: 0,
    },
  }

  return (
    <>
      <GoBackLink />
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row">
          <motion.form
            className="flex flex-1 flex-col justify-evenly gap-8 rounded-lg bg-white px-7 py-[30px] md:gap-[54px] lg:px-12 lg:py-[54px]"
            initial="hidden"
            variants={fromTopMotion}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <div className="flex flex-col gap-8 md:gap-10">
              <Typography as="h2" variant="28px-32px">
                Checkout
              </Typography>
              <BillingDetails errors={errors} register={register} />
            </div>
            <ShippingInfo errors={errors} register={register} />
            <PaymentDetails errors={errors} register={register} />
          </motion.form>
          <motion.div
            initial="hidden"
            variants={fromTopMotionDelayed}
            viewport={{ amount: 0.2, once: true }}
            whileInView="visible"
          >
            <Summary
              cartItems={cartItems}
              onClose={() => {
                reset()
                removeAllFromCart()
              }}
              onContinue={handleSubmit(onSubmit)}
              open={successModalOpen}
              setOpen={setSuccessModalOpen}
            />
          </motion.div>
        </div>
      </Container>
    </>
  )
}
