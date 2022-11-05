import * as S from './HowIsEasySectionStyles'
import FutureImage from 'next/image'
import { CTAButton } from '@/shared/components/CTAButton/CTAButton'
import { AtractionCard } from '@/modules/home/components/HowIsEasySection/AtractionCard/AtractionCard'
import { useRouter } from 'next/router'
export function HowIsEasySection() {
  const router = useRouter()
  return (
    <S.Container>
      <S.Content>
        <S.RegisterSteps>
          <S.SeeHowIsEasyColumn>
            <h3>Veja como é fácil!</h3>
            <p>
              Realize o seu sonho de viajar para Disney nas próximas férias.
              Seja criança novamente, se emocione com o show de fogos.{' '}
              <strong>Faça o cadastro, é grátis!</strong>
            </p>

            <S.StepsBox>
              <FutureImage
                className="steps"
                src={'/images/steps.svg'}
                alt="Passos Para Inscrição"
                width={24}
                height={160}
              />
              <S.StepsContent>
                <span>Realize o seu cadastro</span>
                <span>Ganhe números da sorte</span>
                <span>Concorra a uma viagem para a Disney</span>
              </S.StepsContent>
            </S.StepsBox>
            <CTAButton
              onClick={() => {
                router.push('/register')
              }}
              text="Concorra agora mesmo"
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
          </S.SeeHowIsEasyColumn>

          <S.ImageGalery>
            <S.BoxOne>
              <FutureImage
                className="image-galery-1"
                src={'/images/image-galery-1.jpg'}
                alt="Mickey Mouse"
                width={217}
                height={231}
              />
              <FutureImage
                className="image-galery-2"
                src={'/images/image-galery-2.jpg'}
                alt="Disney"
                width={217}
                height={231}
              />
            </S.BoxOne>
            <S.BoxTwo>
              <FutureImage
                className="image-galery-3"
                src={'/images/image-galery-3.jpg'}
                alt="Frosen"
                width={217}
                height={478}
              />
            </S.BoxTwo>
          </S.ImageGalery>
        </S.RegisterSteps>

        <S.Atractions>
          <h3>
            Grandes atrações esperando <span> por você!</span>
          </h3>

          <S.AtractionsList>
            <AtractionCard
              name="Magic Kingdom"
              imgSrc="/images/atraction-1.jpg"
            />
            <AtractionCard
              name="Hollywood Studios"
              imgSrc="/images/atraction-2.jpg"
            />
            <AtractionCard
              name="Animal Kingdom"
              imgSrc="/images/atraction-3.jpg"
            />
            <AtractionCard
              name="Typhoon Lagoon"
              imgSrc="/images/atraction-4.jpg"
            />
          </S.AtractionsList>
        </S.Atractions>
      </S.Content>
    </S.Container>
  )
}
