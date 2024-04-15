import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

import { LinkButton } from '../components/Button'
import Typography from '../components/Typography'
import Container from './Container'

interface GoBackLinkProps {
  children: ReactNode
}

export default function GoBackLink({ children }: GoBackLinkProps) {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }
  return (
    <Container>
      <Typography
        as="p"
        className="flex items-start pb-6 pt-4 md:pt-8 lg:pb-14 lg:pt-20"
        variant="15px"
      >
        <LinkButton color="gray" onClick={handleGoBack}>
          {children}{' '}
        </LinkButton>
      </Typography>
    </Container>
  )
}
