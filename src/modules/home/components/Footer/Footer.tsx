import { FooterLink } from './FooterLink/FooterLink'
import Link from 'next/link'
import FutureImage from 'next/future/image'
import * as S from './FooterStyles'
import { CTAButton } from '@/shared/components/CTAButton/CTAButton'

export function Footer() {
  return (
    <S.Container>
      <S.HeaderContainer>
        <S.FooterHeader>
          <S.HeaderBox>
            <Link href="/">
              <a className="logo">
                <FutureImage
                  src={'/icons/logo.svg'}
                  width={345}
                  height={50}
                  alt="Logo MEGASONHO"
                />
              </a>
            </Link>

            <div>
              <CTAButton
                className="button-desktop"
                text="Concorra agora mesmo"
              />
              <a
                href="https://api.whatsapp.com/send?1=pt_br&phone=5511973796061&text=Ola%20MEGASONHO!"
                target="_blank"
                rel="noreferrer"
              >
                <FutureImage
                  src="/icons/whatsapp.svg"
                  width={32}
                  height={32}
                  alt="Icone WhatsApp"
                />
              </a>
              <a
                href="https://www.instagram.com/megasonho.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                <FutureImage
                  src="/icons/instagran.svg"
                  width={32}
                  height={32}
                  alt="Icone instagran"
                />
              </a>
            </div>
          </S.HeaderBox>
          <CTAButton className="button-mobile" text="Concorra agora mesmo" />
        </S.FooterHeader>
      </S.HeaderContainer>

      <S.FooterContent>
        <S.CertificateContent>
          <S.LinksBlock>
            <S.LinksBlockTitle>Saiba mais</S.LinksBlockTitle>
            <FooterLink linkText="Quem somos" href="/about-us" />
            <FooterLink linkText="Nossas políticas" href="#" />
            <FooterLink linkText="Contato" href="#" />
          </S.LinksBlock>

          <S.CertificateBox>
            <div>
              <S.CertificationTitle>
                Certificado de Autorização
              </S.CertificationTitle>
              <p>
                O sorteio da viagem para a Walt Disney World da MEGASONHO,
                cumpre todos os requisitos legais junto ao Governo Federal e
                possui certificado de autorização emitido pela SEAE - Secretaria
                de Advocacia da Concorrência e Competitividade, Planejamento,
                Energia e Loteria sob o <br /> certificado nº 00.00000/0000.
              </p>
              <S.VirifiedBox>
                <FutureImage
                  src="/icons/verified.svg"
                  width={22}
                  height={22}
                  alt="Icone de Verificado"
                />
                <a target="_blank" href="">
                  Certificado de autorização.
                </a>
              </S.VirifiedBox>
            </div>
            <FutureImage
              src="/images/receita.png"
              width={132}
              height={132}
              alt="Receita Federal"
            />
          </S.CertificateBox>
        </S.CertificateContent>
      </S.FooterContent>
      <S.FooterBottom>
        <S.FooterBottomContent>
          <div>
            <strong>MEGASONHO ® 2022</strong>
            <span>Rua Professor Atílio Innocenti, 165 - São Paulo, SP</span>
            <span>CNPJ: 46.651.379/0001-09</span>
          </div>

          <p>
            <strong>MEGASONHO®</strong> é uma marca registrada e licenciada pela
            Treasury Bonds Plus, LLC. Somos uma empresa de tecnologia que atua
            nos setores do turismos e financeiro. Nosso propósito é dar a vida e
            realizar o sonho do brasileiro fazer a viagem para Walt Disney
            World.
          </p>
        </S.FooterBottomContent>
      </S.FooterBottom>
    </S.Container>
  )
}