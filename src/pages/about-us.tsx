import * as S from '@/modules/about-us/styles/AboutUsStyles'
import Image from 'next/image'
import Footer from '@/shared/components/Footer/Footer'
import { AboutHeader } from '@/shared/components/AboutHeader/AboutHeader'
import { NextPage } from 'next'
import { CTAButton } from '@/shared/components/CTAButton/CTAButton'
import { useRouter } from 'next/router'

const AboutUs: NextPage = () => {
  const router = useRouter()
  return (
    <>
      <AboutHeader />
      <S.Container>
        <S.Content>
          <S.RegisterSteps>
            <S.SeeHowIsEasyColumn>
              <h1>Quem somos?</h1>
              <p>
                A MEGASONHO é uma startup com o propósito de <br /> ajudar os
                brasileiros realizarem o sonho da viagem <br /> para Walt Disney
                World.
              </p>
              <p>
                Ensinamos educação financeira de maneira <br /> descomplicada,
                através de uma metodologia única <br /> e divertida.
              </p>
              <p>
                Nos comunicamos de maneira simples e clara <br /> mesmo
                explicando conceitos complexos do <br /> mercado financeiro.
                Falamos a sua língua e <br /> realizamos o seu sonho da viagem
                para Disney <br /> com sua família e amigos.
              </p>

              <CTAButton
                onClick={() => {
                  router.push('/register')
                }}
                text="Concorra agora mesmo"
              />
              <S.BePartYouTooBox>
                <Image
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
                <Image
                  className="image-galery-1"
                  src={'/images/image-galery-5.jpg'}
                  alt="Mickey Mouse"
                  width={217}
                  height={231}
                />
                <Image
                  className="image-galery-2"
                  src={'/images/image-galery-6.jpg'}
                  alt="Disney"
                  width={217}
                  height={231}
                />
              </S.BoxOne>
              <S.BoxTwo>
                <Image
                  className="image-galery-3"
                  src={'/images/image-galery-4.jpg'}
                  alt="Frosen"
                  width={217}
                  height={478}
                />
              </S.BoxTwo>
            </S.ImageGalery>
          </S.RegisterSteps>
        </S.Content>
      </S.Container>
      <Footer />
    </>
  )
}

export default AboutUs
