import { ReactNode } from 'react'

import { LinkButton } from '../components/Button'
import Typography from '../components/Typography'

interface GoBackLinkProps {
  children: ReactNode
  onClick?: () => void
  to?: string
}

export default function GoBackLink({ children, onClick, to }: GoBackLinkProps) {
  return (
    <Typography
      as="p"
      className="flex items-start pt-4 md:pt-8 lg:pt-20"
      variant="15px"
    >
      <LinkButton color="gray" onClick={onClick} to={to}>
        {children}{' '}
      </LinkButton>
    </Typography>
  )
}
