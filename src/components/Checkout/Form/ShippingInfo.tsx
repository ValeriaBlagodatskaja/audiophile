import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

import Typography from '../../Typography'
import { CheckoutFormData } from '../Checkout'
import Input from '../Input'

interface ShippingDetailsProps {
  errors: FieldErrors<FieldValues>
  register: UseFormRegister<CheckoutFormData>
}

export default function ShippingDetails({
  errors,
  register,
}: ShippingDetailsProps) {
  return (
    <div className="flex flex-col gap-4">
      <Typography as="p" className="text-orange-dark" variant="13px">
        shipping info
      </Typography>
      <div className="flex flex-col gap-6">
        <Input
          error={errors.address && (errors.address.message as string)}
          placeholder="1137 Williams Avenue"
          {...register('address', { required: 'Required field' })}
          label="Address"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4">
          <Input
            error={errors.zip && (errors.zip.message as string)}
            placeholder="10001"
            {...register('zip', {
              pattern: {
                message: 'Use only numbers',
                value: /^[0-9]+$/,
              },
              required: 'Required field',
            })}
            label="ZIP Code"
          />
          <Input
            error={errors.city && (errors.city.message as string)}
            placeholder="New York"
            {...register('city', { required: 'Required field' })}
            label="City"
          />

          <Input
            error={errors.country && (errors.country.message as string)}
            placeholder="United States"
            {...register('country', { required: 'Required field' })}
            label="Country"
          />
        </div>
      </div>
    </div>
  )
}
