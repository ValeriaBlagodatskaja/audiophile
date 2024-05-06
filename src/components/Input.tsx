import clsx from 'clsx'
import { InputHTMLAttributes, Ref, forwardRef } from 'react'

import Typography from './Typography'

interface InputProps extends InputHTMLAttributes<HTMLElement> {
  error?: string
  inputType?: 'number' | 'text'
  label: string
  rootClassName?: string
}

const InputComponent = (
  { error, inputType, label, rootClassName, ...inputAttributes }: InputProps,
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
            'border-gray-light-200 h-14 w-full rounded-lg border-[1px] pl-6 text-[14px] tracking-[-0.25px] placeholder-black placeholder-opacity-40 outline-none focus:border-orange-dark',
            inputAttributes.className,
            inputType === 'number' &&
              '[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none',

            error && 'border-red-600'
          )}
          pattern={inputType === 'number' ? '[0-9]*' : undefined}
          ref={ref}
          type={inputType}
        />
      </div>
    </label>
  )
}
const Input = forwardRef(InputComponent)
export default Input
