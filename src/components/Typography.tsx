import clsx from 'clsx'
import { ReactNode } from 'react'

interface TypographyProps {
  as: keyof JSX.IntrinsicElements
  children: ReactNode
  className?: string
  variant:
    | '12px'
    | '13px'
    | '14px'
    | '15px'
    | '18px'
    | '24px'
    | '24px-32px'
    | '28px'
    | '28px-32px'
    | '28px-40px'
    | '36px-56px'
}

export default function Typography({
  as,
  children,
  className,
  variant,
}: TypographyProps) {
  const Element = as

  const fontBaseClass = 'font-sans'

  const variantClasses = {
    '12px': 'text-[12px] font-bold leading-normal tracking-[0.21px]',
    '13px': 'font-bold text-[13px] leading-[25px] tracking-[1px] uppercase',
    '14px': 'font-normal text-[14px] leading-[19px] tracking-[10px] uppercase',
    '15px': 'font-medium text-[15px] leading-[25px]',
    '18px': 'font-bold text-[18px] leading-[24px] tracking-[1.3px] uppercase',
    '24px': 'font-bold text-[24px] leading-[33px] tracking-[1.7px] uppercase',
    '24px-32px':
      'text-[24px] md:text-[32px] leading-9 tracking-[0.86px] md:tracking-[1.14px] uppercase font-bold',
    '28px': 'font-bold text-[28px] leading-[38px] tracking-[2px] uppercase',
    '28px-32px':
      'font-bold text-[28px] leading-[38px] tracking-[2px] uppercase md:text-[32px] md:leading-[44px] md:tracking-[1.5px]',
    '28px-40px':
      'font-bold text-[28px] leading-[38px] tracking-[2px] uppercase md:text-[40px] md:leading-[44px] md:tracking-[1.5px]',
    '36px-56px':
      'font-bold text-[36px] leading-[40px] tracking-[1.29px] uppercase md:text-[56px] md:leading-[58px] md:tracking-[2px]',
  }

  const classNames = clsx(fontBaseClass, variantClasses[variant], className)
  return <Element className={classNames}>{children}</Element>
}
