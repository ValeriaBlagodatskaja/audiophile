import clsx from 'clsx'
import { InputHTMLAttributes, Ref, forwardRef } from 'react'

interface RadioInputProps extends InputHTMLAttributes<HTMLElement> {
  label: string
  rootClassName?: string
}
const RadioInputComponent = (
  { label, rootClassName, ...inputAttributes }: RadioInputProps,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <label
      className={clsx(
        'flex h-14 w-full items-center gap-4 rounded-lg border border-gray-light-200 pl-6 focus-within:border-orange-dark',
        rootClassName
      )}
    >
      <input
        {...inputAttributes}
        className="size-4 appearance-none rounded-full border-4 border-white outline outline-1 outline-gray-light-200 checked:bg-orange-dark"
        ref={ref}
        type="radio"
      />
      {label}
    </label>
  )
}
const RadioInput = forwardRef(RadioInputComponent)
export default RadioInput
