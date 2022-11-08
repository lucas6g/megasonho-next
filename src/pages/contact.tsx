import * as S from '@/modules/contact/styles/ContactStyles'
import Image from 'next/image'
import Footer from '@/shared/components/Footer/Footer'
import { AboutHeader } from '@/shared/components/AboutHeader/AboutHeader'
import { NextPage } from 'next'

const Contact: NextPage = () => {
  return (
    <>
      <AboutHeader />
      <S.Container>
        <S.Content>
          <S.RegisterSteps>
            <S.SeeHowIsEasyColumn>
              <h1>Contato</h1>
              <p>
                Aqui será um texto de apoio para reforçar a ideia <br /> que o
                usuário pode contar com a MEGASONHO <br /> para entrar em
                contato.
              </p>
              <S.ContactInfoBlock>
                <S.ContactInfoLabel>Email:</S.ContactInfoLabel>
                <S.ContactInfo>contato@megasonho.com.br</S.ContactInfo>
              </S.ContactInfoBlock>
              <S.ContactInfoBlock className="second">
                <S.ContactInfoLabel>Número de telefone:</S.ContactInfoLabel>
                <S.ContactInfo>+55 11 96303-2602</S.ContactInfo>
              </S.ContactInfoBlock>

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
                  src={'/images/image-galery-7.jpg'}
                  alt="Disney"
                  width={217}
                  height={231}
                />
                <Image
                  className="image-galery-2"
                  src={'/images/image-galery-8.jpg'}
                  alt="Disney"
                  width={217}
                  height={231}
                />
              </S.BoxOne>
              <S.BoxTwo>
                <Image
                  className="image-galery-3"
                  src={'/images/image-galery-9.jpg'}
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

export default Contact
