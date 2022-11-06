import FutureImage from 'next/image'
import { Question, Container, Response } from './QuestionBoxStyles'

interface QuestionBoxProps {
  question: string
  response: string
  hasBorder?: boolean
}

export function QuestionBox({
  question,
  response,
  hasBorder = true
}: QuestionBoxProps) {
  return (
    <Container hasBorder={hasBorder}>
      <Question>
        <strong>{question}</strong>
        <FutureImage
          src={'/icons/fac-question-arrow.svg'}
          alt="Icone Flexa azul"
          width={16}
          height={11}
        />
      </Question>
      <Response>
        <p dangerouslySetInnerHTML={{ __html: response }} />
      </Response>
    </Container>
  )
}
