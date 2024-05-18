import Typography from '@/components/Typography'
import clsx from 'clsx'
import { InputHTMLAttributes, Ref, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLElement> {
  error?: string
  label: string
  rootClassName?: string
}

const InputComponent = (
  {
    error,
    label,
    rootClassName,
    type = 'text',
    ...inputAttributes
  }: InputProps,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <label className={clsx('w-full', rootClassName)}>
      <div className="flex flex-col gap-[9px]">
        <div className="flex justify-between gap-2">
          <Typography as="p" variant="12px">
            {label}
          </Typography>
          <Typography as="p" className={error && 'text-red-600'} variant="12px">
            {error}
          </Typography>
        </div>
        <input
          {...inputAttributes}
          className={clsx(
            'h-14 w-full rounded-lg border border-gray-light-200 pl-6 text-[14px] tracking-[-0.25px] outline-none placeholder:text-black placeholder:text-opacity-40 focus:border-orange-dark',
            inputAttributes.className,
            type === 'number' &&
              '[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none',

            error && 'border-red-600'
          )}
          min={type === 'number' ? 0 : undefined}
          pattern={type === 'number' ? '[0-9]*' : undefined}
          ref={ref}
          type={type}
        />
      </div>
    </label>
  )
}
const Input = forwardRef(InputComponent)
export default Input
