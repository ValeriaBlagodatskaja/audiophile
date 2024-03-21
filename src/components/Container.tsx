import clsx from 'clsx'
import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={clsx(
        'mx-auto w-full max-w-[1110px] px-6 md:px-10 xl:px-0',
        className
      )}
    >
      {children}
    </div>
  )
}

export default Container
