import clsx from 'clsx'
import { InputHTMLAttributes, Ref, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLElement> {
  error?: string
  label: string
  rootClassName?: string
}

const InputComponent = (
  { error, label, rootClassName, ...inputAttributes }: InputProps,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <label className={clsx('w-full', rootClassName)}>
      <div
        className={clsx('flex justify-between gap-2', error && 'text-red-300')}
      >
        <div>{label}</div> <div>{error}</div>
      </div>
      <input
        {...inputAttributes}
        className={clsx(
          'bg-gray w-full rounded-lg border-[1px] p-2 outline-none',
          inputAttributes.className,
          error && 'border-red-300'
        )}
        ref={ref}
      />
    </label>
  )
}
const Input = forwardRef(InputComponent)
export default Input
