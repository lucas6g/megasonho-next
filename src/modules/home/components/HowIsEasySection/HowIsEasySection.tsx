import {
  Container,
  Content,
  RegisterSteps,
  SeeHowIsEasyColumn,
  CTAButton,
  BePartYouTooBox,
  ImageGalery,
  BoxOne,
  BoxTwo,
  Atractions,
  AtractionsList,
  AtractionCard,
  StepsBox,
  StepsContent
} from './HowIsEasySectionStyles'

import FutureImage from 'next/future/image'
export function HowIsEasySection() {
  return (
    <Container>
      <Content>
        <RegisterSteps>
          <SeeHowIsEasyColumn>
            <h3>Veja como é fácil!</h3>
            <p>
              Realize o seu sonho da viagem para Disney nas próximas férias.
              Seja criança novamente, se emocione com o show de fogos.{' '}
              <strong>Faça o cadastro, é grátis!</strong>
            </p>

            <StepsBox>
              <FutureImage
                className="steps"
                src={'/images/steps.svg'}
                alt="Passos Para Inscrição"
                width={24}
                height={160}
              />
              <StepsContent>
                <span>Realize o seu cadastro</span>
                <span>Ganhe números da sorte</span>
                <span>Concorra a uma viagem para a Disney</span>
              </StepsContent>
            </StepsBox>
            <CTAButton>
              <span>Concorra agora mesmo</span>
              <FutureImage
                src={'/icons/clover-green.svg'}
                alt="Trevo"
                width={32}
                height={32}
              />
            </CTAButton>
            <BePartYouTooBox>
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
            </BePartYouTooBox>
          </SeeHowIsEasyColumn>

          <ImageGalery>
            <BoxOne>
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
            </BoxOne>
            <BoxTwo>
              <FutureImage
                className="image-galery-3"
                src={'/images/image-galery-3.jpg'}
                alt="Frosen"
                width={217}
                height={478}
              />
            </BoxTwo>
          </ImageGalery>
        </RegisterSteps>

        <Atractions>
          <h3>
            Grandes atrações esperando <span> por você!</span>
          </h3>

          <AtractionsList>
            <AtractionCard>
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
            </AtractionCard>
            <AtractionCard>
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
            </AtractionCard>
            <AtractionCard>
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
            </AtractionCard>
            <AtractionCard>
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
            </AtractionCard>
          </AtractionsList>
        </Atractions>
      </Content>
    </Container>
  )
}
