import Container from '../Container'
import GoBackLink from '../GoBackLink'
import Form from './Form/Form'
import Summary from './Summary'

export default function Checkout() {
  return (
    <>
      <GoBackLink>Go Back</GoBackLink>
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row">
          <Form />
          <Summary />
        </div>
      </Container>
    </>
  )
}
