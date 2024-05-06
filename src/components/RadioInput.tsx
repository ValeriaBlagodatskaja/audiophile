import clsx from 'clsx'
import { InputHTMLAttributes, forwardRef } from 'react'

interface RadioInputProps extends InputHTMLAttributes<HTMLElement> {
  label: string
  rootClassName?: string
}
const RadioInputComponent = ({
  label,
  rootClassName,
  ...inputAttributes
}: RadioInputProps) => {
  return (
    <label
      className={clsx(
        'flex h-14 w-full items-center gap-4 rounded-lg border pl-6 focus-within:border-orange-dark',
        rootClassName
      )}
    >
      <input
        {...inputAttributes}
        className="outline-gray-light-200 size-4 appearance-none rounded-full border-4 border-white outline outline-1 checked:bg-orange-dark"
        type="radio"
      />
      {label}
    </label>
  )
}
const RadioInput = forwardRef(RadioInputComponent)
export default RadioInput
