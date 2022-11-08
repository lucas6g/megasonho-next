import * as S from '@/modules/companies/styles/CompaniesStyles'
import Image from 'next/image'
import Footer from '@/shared/components/Footer/Footer'
import { AboutHeader } from '@/shared/components/AboutHeader/AboutHeader'
import { NextPage } from 'next'

const BeFranchised: NextPage = () => {
  return (
    <>
      <AboutHeader />
      <S.Container>
        <S.Content>
          <S.RegisterSteps>
            <S.SeeHowIsEasyColumn>
              <h1>Seja franqueado</h1>
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
              <S.ContactButton
                href="https://api.whatsapp.com/send?1=pt_br&phone=5511973796061&text=Ola%20MEGASONHO!"
                target="_blank"
                rel="noreferrer"
              >
                <span>Fale conosco</span>
                <Image
                  src={'/icons/whataspp-green.svg'}
                  alt="Mickey Mouse"
                  width={32}
                  height={32}
                />
              </S.ContactButton>
            </S.SeeHowIsEasyColumn>

            <S.ImageGalery>
              <S.BoxOne>
                <Image
                  className="image-galery-1"
                  src={'/images/image-galery-13.jpg'}
                  alt="Disney"
                  width={217}
                  height={231}
                />
                <Image
                  className="image-galery-2"
                  src={'/images/image-galery-14.jpg'}
                  alt="Disney"
                  width={217}
                  height={231}
                />
              </S.BoxOne>
              <S.BoxTwo>
                <Image
                  className="image-galery-3"
                  src={'/images/image-galery-15.jpg'}
                  alt="Disney"
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

export default BeFranchised
