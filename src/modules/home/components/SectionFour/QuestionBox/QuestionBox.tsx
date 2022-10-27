import FutureImage from 'next/future/image'
import { Question, Container, Response } from './QuestionBoxStyles'

interface QuestionBoxProps {
  question: string
  response: string
}

export function QuestionBox({ question, response }: QuestionBoxProps) {
  return (
    <Container>
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
        <p>{response}</p>
      </Response>
    </Container>
  )
}
