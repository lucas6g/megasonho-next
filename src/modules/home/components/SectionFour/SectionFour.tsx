import { CTAButton } from '@/shared/components/CTAButton/CTAButton'
import FutureImage from 'next/future/image'
import { QuestionBox } from './QuestionBox/QuestionBox'
import * as S from './SectionFourStyles'
export function SectionFour() {
  return (
    <S.Container>
      <S.IsFreeContent>
        <S.BoxOne>
          <h4>
            Não fique de fora, increva-se <br />
            agora mesmo, <span> é grátis!</span>
          </h4>
          <CTAButton text="Quero o meu número da sorte" />
          <S.BePartYouTooBox>
            <FutureImage
              src={'/images/participants.svg'}
              alt="Trevo"
              width={136}
              height={40}
            />
            <p>
              Faça parte{' '}
              <span>
                você
                <br /> também!
              </span>
            </p>
          </S.BePartYouTooBox>
        </S.BoxOne>
        <FutureImage
          id="is-free"
          src={'/images/is-free.png'}
          width={541}
          height={256}
          alt="Card É Gratis"
        />
      </S.IsFreeContent>
      <S.QuestinsContainer>
        <h5>
          Ainda está com dúvidas? <br /> <span>Vamos te ajudar!</span>
        </h5>
        <QuestionBox
          question="O que é a MEGASONHO?"
          response="A MEGASONHO é uma startup com o propósito de ajudar os brasileiros a realizar o sonho da viagem para Walt Disney World.
          Ensinamos educação financeira de maneira descomplicado para todos nossos clientes."
        />
        <QuestionBox
          question="Como concorrer a viagem para a Disney?"
          response="Hospedagem, entrada para as atrações e mais $10.000 para gastar como quiser."
        />
        <QuestionBox
          question="Porque devo preencher minhas informações corretamente?"
          response="Hospedagem, entrada para as atrações e mais $10.000 para gastar como quiser."
        />
        <QuestionBox
          question="O que está incluso no sorteio da viagem para a Disney?"
          response="Hospedagem, entrada para as atrações e mais $10.000 para gastar como quiser."
        />
        <QuestionBox
          question="Como funciona o sorteio da viagem para a Disney?"
          response="Hospedagem, entrada para as atrações e mais $10.000 para gastar como quiser."
        />
        <QuestionBox
          question="O sorteio da viagem para a Disney é sério?"
          response="Hospedagem, entrada para as atrações e mais $10.000 para gastar como quiser."
        />
        <QuestionBox
          question="Como é o processo do sorteio da viagem para a Disney?"
          response="Hospedagem, entrada para as atrações e mais $10.000 para gastar como quiser."
        />
        <QuestionBox
          question="Como fico sabendo se ganhei a viagem para a Disney?"
          response="Hospedagem, entrada para as atrações e mais $10.000 para gastar como quiser."
        />
      </S.QuestinsContainer>
    </S.Container>
  )
}
