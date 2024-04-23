import { useForm } from 'react-hook-form'

import Typography from '../../Typography'
import Input from '../Input'

interface ShippingDetailsProps {
  register: any
}

export default function ShippingDetails({ register }: ShippingDetailsProps) {
  const {
    formState: { errors },
  } = useForm()

  return (
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
  )
}
