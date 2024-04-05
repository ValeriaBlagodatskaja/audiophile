import clsx from 'clsx'
import { ReactNode } from 'react'

interface TypographyProps {
  as: keyof JSX.IntrinsicElements
  children: ReactNode
  className?: string
  color:
    | '13px'
    | '14px'
    | '15px'
    | '18px'
    | '24px'
    | '28px'
    | '32px'
    | '40px'
    | '56px'
    | 'h1'
    | 'h2'
}

export default function Typography({
  as,
  children,
  className,
  color,
}: TypographyProps) {
  const Element = as

  const fontBaseClass = 'font-sans'

  const colorClasses = {
    '13px': 'font-bold text-[13px] leading-[25px] tracking-[1px] uppercase',
    '14px': 'font-normal text-[14px] leading-[19px] tracking-[10px] uppercase',
    '15px': 'font-medium text-[15px] leading-[25px]',
    '18px': 'font-bold text-[18px] leading-[24px] tracking-[1.3px] uppercase',
    '24px': 'font-bold text-[24px] leading-[33px] tracking-[1.7px] uppercase',
    '28px': 'font-bold text-[28px] leading-[38px] tracking-[2px] uppercase',
    '32px': 'font-bold text-[32px] leading-[36px] tracking-[1.15px] uppercase',
    '40px': 'font-bold text-[40px] leading-[44px] tracking-[1.5px] uppercase',
    '56px': 'font-bold text-[56px] leading-[58px] tracking-[2px] uppercase',
    h1: 'font-bold text-[36px] leading-[40px] tracking-[1.29px] uppercase md:text-[56px] md:leading-[58px] md:tracking-[2px] lg:text-[56px] lg:leading-[58px] lg:tracking-[2px]',
    h2: 'font-bold text-[28px] leading-[38px] tracking-[2px] uppercase md:text-[40px] md:leading-[44px] md:tracking-[1.5px]',
  }

  const classNames = clsx(fontBaseClass, colorClasses[color], className)
  return <Element className={classNames}>{children}</Element>
}
