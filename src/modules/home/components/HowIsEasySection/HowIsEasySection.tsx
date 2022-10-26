import * as S from './HowIsEasySectionStyles'
import FutureImage from 'next/future/image'
export function HowIsEasySection() {
  return (
    <S.Container>
      <S.Content>
        <S.RegisterSteps>
          <S.SeeHowIsEasyColumn>
            <h3>Veja como é fácil!</h3>
            <p>
              Realize o seu sonho da viagem para Disney nas próximas férias.
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
            <S.CTAButton>
              <span>Concorra agora mesmo</span>
              <FutureImage
                src={'/icons/clover-green.svg'}
                alt="Trevo"
                width={32}
                height={32}
              />
            </S.CTAButton>
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
            <S.AtractionCard>
              <FutureImage
                className="atraction-img"
                src={'/images/atraction-1.jpg'}
                alt="Atração Da Disney"
                width={268}
                height={255}
              />
              <div className="overlay">
                <span className="atraction-name">Magic Kingdom</span>
                <button>
                  <span>Quero conhecer</span>
                  <FutureImage
                    src={'/icons/arrow-right-blue.svg'}
                    alt="Trevo"
                    width={32}
                    height={32}
                  />
                </button>
              </div>
            </S.AtractionCard>
            <S.AtractionCard>
              <FutureImage
                className="atraction-img"
                src={'/images/atraction-1.jpg'}
                alt="Atração Da Disney"
                width={268}
                height={255}
              />
              <div className="overlay">
                <span className="atraction-name">Magic Kingdom</span>
                <button>
                  <span>Quero conhecer</span>
                  <FutureImage
                    src={'/icons/arrow-right-blue.svg'}
                    alt="Trevo"
                    width={32}
                    height={32}
                  />
                </button>
              </div>
            </S.AtractionCard>
            <S.AtractionCard>
              <FutureImage
                className="atraction-img"
                src={'/images/atraction-1.jpg'}
                alt="Atração Da Disney"
                width={268}
                height={255}
              />
              <div className="overlay">
                <span className="atraction-name">Magic Kingdom</span>
                <button>
                  <span>Quero conhecer</span>
                  <FutureImage
                    src={'/icons/arrow-right-blue.svg'}
                    alt="Trevo"
                    width={32}
                    height={32}
                  />
                </button>
              </div>
            </S.AtractionCard>
            <S.AtractionCard>
              <FutureImage
                className="atraction-img"
                src={'/images/atraction-1.jpg'}
                alt="Atração Da Disney"
                width={268}
                height={255}
              />
              <div className="overlay">
                <span className="atraction-name">Magic Kingdom</span>
                <button>
                  <span>Quero conhecer</span>
                  <FutureImage
                    src={'/icons/arrow-right-blue.svg'}
                    alt="Trevo"
                    width={32}
                    height={32}
                  />
                </button>
              </div>
            </S.AtractionCard>
          </S.AtractionsList>
        </S.Atractions>
      </S.Content>
    </S.Container>
  )
}
