import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegisterReturn,
} from 'react-hook-form'

import Typography from '../../Typography'
import Input from '../Input'

interface BillingDetailsProps {
  errors: FieldErrors<FieldValues>
  register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn
}

export default function BillingDetails({
  errors,
  register,
}: BillingDetailsProps) {
  return (
    <div className="flex flex-col gap-4">
      <Typography as="p" className="text-orange-dark" variant="13px">
        billing details
      </Typography>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4">
        <Input
          error={errors.name && (errors.name.message as string)}
          placeholder="John Doe"
          {...register('name', { required: 'Required field' })}
          label="Name"
        />
        <Input
          error={errors.mail && (errors.mail.message as string)}
          placeholder="johndoe@example.com"
          {...register('mail', {
            pattern: {
              message: 'Invalid email address format',
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
            },
            required: 'Required field',
          })}
          label="Email Address"
          type="email"
        />
        <Input
          error={errors.tel && (errors.tel.message as string)}
          placeholder="+372..."
          {...register('tel', {
            pattern: {
              message: 'Invalid phone number format',
              value: /^\+(?:[0-9] ?){6,14}[0-9]$/,
            },
            required: 'Required field',
          })}
          label="Phone Number"
          type="tel"
        />
      </div>
    </div>
  )
}
