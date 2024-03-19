import clsx from 'clsx'
import { ReactNode } from 'react'

interface TypographyProps {
  as: keyof JSX.IntrinsicElements
  children: ReactNode
  variant:
    | '13px'
    | '14px'
    | '15px'
    | '18px'
    | '24px'
    | '28px'
    | '32px'
    | '40px'
    | '56px'
}

export default function Typography({ as, children, variant }: TypographyProps) {
  const Element = as
  const variantClasses = {
    '13px':
      'font-sans font-bold text-[13px] leading-[25px] tracking-[1px] uppercase',
    '14px':
      'font-sans font-normal text-[14px] leading-[19px] tracking-[10px] uppercase',
    '15px': 'font-sans font-medium text-[15px] leading-[25px]',
    '18px':
      'font-sans font-bold text-[18px] leading-[24px] tracking-[1.3px] uppercase',
    '24px':
      'font-sans font-bold text-[24px] leading-[33px] tracking-[1.7px] uppercase',
    '28px':
      'font-sans font-bold text-[28px] leading-[38px] tracking-[2px] uppercase',
    '32px':
      'font-sans font-bold text-[32px] leading-[36px] tracking-[1.15px] uppercase',
    '40px':
      'font-sans font-bold text-[40px] leading-[44px] tracking-[1.5px] uppercase',
    '56px':
      'font-sans font-bold text-[56px] leading-[58px] tracking-[2px] uppercase',
  }
  const classNames = clsx(variantClasses[variant])
  return <Element className={classNames}>{children}</Element>
}
