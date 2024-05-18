import Container from '@/components/Container'
import TextButton from '@/components/TextButton'
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
        <TextButton onClick={handleGoBack}>Go back</TextButton>
      </Typography>
    </Container>
  )
}
