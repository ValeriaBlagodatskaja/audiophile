import clsx from 'clsx'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { LinkButton } from '../components/Button'
import Typography from '../components/Typography'

interface GoBackLinkProps {
  children: ReactNode
  onClick?: () => void
  to: string
}

export default function GoBackLink({ children, onClick, to }: GoBackLinkProps) {
  return (
    <Typography as="p" className="flex items-start" variant="15px">
      <LinkButton color="gray" onClick={onClick} to={to}>
        {children}{' '}
      </LinkButton>
    </Typography>
  )
}
