import { useForm } from 'react-hook-form'

import Typography from '../../Typography'
import Input from '../Input'

interface BillingDetailsProps {
  register: any
}

export default function BillingDetails({ register }: BillingDetailsProps) {
  const {
    formState: { errors },
  } = useForm()

  return (
    <div>
      <div className="flex flex-col gap-8 md:gap-10">
        <Typography as="h2" variant="h2-2">
          Checkout
        </Typography>
        <Typography as="p" className="pb-4 text-orange-dark" variant="13px">
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
  )
}
