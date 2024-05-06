import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

import Input from '../../../components/Input'
import Typography from '../../../components/Typography'
import { CheckoutFormData } from '../CheckoutPage'

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
              min: 0,
              pattern: {
                message: 'Please enter a 5-digit positive number',
                value: /^\d{5}$/,
              },
              required: 'Required field',
            })}
            label="ZIP Code"
            type="number"
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
