import {
  Question,
  Container,
  Response
} from '@/modules/home/components/SectionFour/QuestionBox/QuestionBoxStyles'
import { CTAButton } from '@/shared/components/CTAButton/CTAButton'
import FutureImage from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { QuestionBox } from './QuestionBox/QuestionBox'
import * as S from './SectionFourStyles'
export default function SectionFour() {
  const router = useRouter()

  return (
    <S.Container>
      <S.IsFreeContent>
        <S.BoxOne>
          <h4>
            Não fique de fora, increva-se <br />
            agora mesmo, <span> é grátis!</span>
          </h4>
          <CTAButton
            onClick={() => {
              router.push('/register')
            }}
            text="Quero o meu número da sorte"
          />
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
          src={'/images/is-free.svg'}
          width={529}
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
          Ensinamos educação financeira de maneira descomplicada para todos os nossos clientes.
          "
        />

        <Container hasBorder>
          <Question>
            <strong>Como concorrer a viagem para a Disney?</strong>
            <FutureImage
              src={'/icons/fac-question-arrow.svg'}
              alt="Icone Flexa azul"
              width={16}
              height={11}
            />
          </Question>
          <Response>
            <p>
              {' '}
              Com a MEGASONHO, o seu sonho da viagem para Walt Disney World se
              torna real. Basta iniciar o cadastro por{' '}
              <Link href="/register">aqui</Link> e preencher todos os dados
              corretamente que você já começará a concorrer ao sorteio.
            </p>
          </Response>
        </Container>
        <QuestionBox
          question="Porque devo preencher minhas informações corretamente?"
          response="A <strong>MEGASONHO</strong> sempre fará o contato por WhatsApp e <strong>E-Mail</strong>, por isso é muito importante fazer a confirmação da validação deles e sempre mantê-los atualizados em seu cadastro."
        />

        <QuestionBox
          question="O que está incluso no sorteio da viagem para a Disney?"
          response="O prêmio do pacote de viagem Disney MEGASONHO é no valor de R$ 40.000,00.
          Nesse valor estão inclusos os itens: Passagem de avião, translado aeroporto para hotel ou aluguel de carro, hospedagem e ingressos para os parques.
          Também existe um contrato de R$ 10.000,00 relacionado ao direito de imagem do vencedor que poderá ser gasto da maneira que desejar.
          "
        />
        <QuestionBox
          question="Como funciona o sorteio da viagem para a Disney?"
          response={`O sorteio é autorizado pelo Governo Federal e realizado pela Loteria Federal.  Leia mais sobre o regulamento do sorteio <a href="#">aqui</a>`}
        />

        <QuestionBox
          question="O sorteio da viagem para a Disney é sério?"
          response="Sim! Quando o assunto é sorteio pode ter certeza que o assunto é sério.
          O sorteio da viagem para a Disney cumpre todos os requisitos legais junto ao Governo Federal e possui certificado de autorização emitido pela SEAE - Secretaria de Advocacia da Concorrência e Competitividade, Planejamento, Energia e Loteria sob o certificado nº 00.000000/0000.
          "
        />
        <QuestionBox
          question="Como é o processo do sorteio da viagem para a Disney?"
          response="Será o ganhador do prêmio, o participante que possuir o número de ordem que coincida com o número formado pela sequência dos três últimos números dos três primeiros prêmios da Loteria Federal. <br/> <br/>


          Lido de cima pra baixo: Exemplificando - Resultado hipotético da <br/> Loteria Federal do dia 31/12/2023:<br/><br/>

          1° prêmio 33.<strong>458</strong><br/>
          2° prêmio 65.<strong>933</strong><br/>
          3° prêmio 94.<strong>452</strong><br/>
          4° prêmio 18.666<br/>
          5° prêmio 22.999<br/><br/>

          O vencedor da viagem para a Disney será o número da sorte:<strong> <u>458.933.452</u></strong>.<br /><br/>

          Se o número contemplado não for distribuído por qualquer motivo ou o vencedor não preencher o formulário com os dados corretos, o vencedor do prêmio será o portador do número distribuído superior ou inferior que estiver mais próximo do número sorteado.
          "
        />
        <QuestionBox
          question="Como fico sabendo se ganhei a viagem para a Disney?"
          response="Você não precisa se preocupar com isso.<br/> <br/>
          A MEGASONHO entrará em contato por <strong>WhatsApp</strong> e <strong>E-Mail</strong>, por isso <br/>
          é muito importante fazer a confirmação da validação deles e sempre <br/>
          mantê-los atualizados em seu cadastro.<br/> <br/>
          Também faremos a divulgação por todas as nossas redes sociais."
        />
        <QuestionBox
          hasBorder={false}
          question="Como ganhar números da sorte na MEGASONHO?"
          response="Ganhar os números da sorte para concorrer a viagem para Disney com a MEGASONHO é bem simples.<br/><br/>
          É muito importante preencher o seu cadastro corretamente  e confirmar o número do WhatsApp e E-Mail; também é possível convidar familiares e amigos para se inscreverem.<br /> <br/>
          Veja abaixo quanto números da sorte você pode ganhar:<br/>
          1 Número da Sorte - Confirmou o número do WhatsApp.<br/>
          1 Número da Sorte - Confirmou o E-Mail.<br/>
          1 Número da Sorte - Informou nome completo e CPF.<br/>
          3 Números da Sorte - Alguém se cadastrou utilizando o seu link.<br/>
          10 Números da Sorte - Alguém comprou o MEGA GUIA DE VIAGENS DISNEY.<br/>
          3 a 100 Números da Sorte - Comprando o MEGA GUIA DE VIAGENS DISNEY.
          "
        />
      </S.QuestinsContainer>
    </S.Container>
  )
}
