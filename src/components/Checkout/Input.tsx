import clsx from 'clsx'
import { InputHTMLAttributes, Ref, forwardRef } from 'react'

import Typography from '../Typography'

interface InputProps extends InputHTMLAttributes<HTMLElement> {
  error?: string
  label?: string
  rootClassName?: string
}

const InputComponent = (
  { error, label, rootClassName, ...inputAttributes }: InputProps,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <label className={clsx('w-full', rootClassName)}>
      <div className="flex flex-col gap-[9px]">
        <div className="flex justify-between gap-2">
          <Typography as="p" variant="12px">
            {label}
          </Typography>
          <Typography
            as="p"
            className={error ? 'text-red-600' : ''}
            variant="12px"
          >
            {error}
          </Typography>
        </div>
        <input
          {...inputAttributes}
          className={clsx(
            'h-14 w-full rounded-lg border-[1px] pl-6 text-[14px] tracking-[-0.25px] outline-none focus:border-orange-dark',
            inputAttributes.className,
            error && 'border-red-600'
          )}
          ref={ref}
        />
      </div>
    </label>
  )
}
const Input = forwardRef(InputComponent)
export default Input
