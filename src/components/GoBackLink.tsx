import Button from '@/components/Button'
import Container from '@/components/Container'
import Typography from '@/components/Typography'
import { useNavigate } from 'react-router-dom'

export default function GoBackLink() {
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
        <Button className="capitalize" color="gray" onClick={handleGoBack}>
          Go back
        </Button>
      </Typography>
    </Container>
  )
}
