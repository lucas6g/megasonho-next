import FutureImage from 'next/future/image'
import Link from 'next/link'
import { useState } from 'react'
import pt from 'react-phone-input-2/lang/pt.json'
import { Button } from '../../../../shared/styles/components/Button/Button'
import { Phone } from '../../../../shared/styles/components/PhoneInput/PhoneInputStyles'
import * as S from './HeroSectionStyles'

export function HeroSection() {
  const [whatsApp, setWhatsApp] = useState('')

  return (
    <S.Container>
      <FutureImage
        src={'/images/hero-back.jpg'}
        alt="Imagem de fundo Minnie e Mickey"
        width={1920}
        height={824}
        className="hero-back"
        quality={100}
        priority
      />
      <S.Wrapper>
        <S.Header>
          <Link href="/">
            <a>
              <FutureImage
                className="logo"
                src={'/icons/logo.svg'}
                alt="Logo da MEGASONHO"
                width={345}
                height={50}
              />
            </a>
          </Link>

          <div>
            <a
              href="https://api.whatsapp.com/send?1=pt_br&phone=5511973796061&text=Ola%20MEGASONHO!"
              target="_blank"
              rel="noreferrer"
            >
              <FutureImage
                src={'/icons/whatsapp.svg'}
                alt="Icone Do Whatsapp"
                width={32}
                height={32}
              />
            </a>
            <a
              href="https://www.instagram.com/megasonho.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              <FutureImage
                src={'/icons/instagran.svg'}
                alt="Icone Do Instagran"
                width={32}
                height={32}
              />
            </a>
          </div>
        </S.Header>

        <S.SectionContent>
          <S.InfoCollun>
            <h1>
              Realize o sonho da viagem <br /> para Walt Disney World
            </h1>
            <FutureImage
              className="green-line"
              src="/icons/green-line.svg"
              alt="Linha Verde"
              width={382}
              height={18}
            />
            <h2>
              Se inscreva e concorra a viagem dos <br />
              seus sonhos para sua família e amigos.
            </h2>
            <S.ItsFreeCTAButton>
              <span>É totalmente grátis</span>
              <FutureImage
                className="arrow-right-green"
                src="/icons/arrow-right-green.svg"
                alt="Seta para direita"
                width={25}
                height={25}
              />
              <FutureImage
                className="arrow-right-white"
                src="/icons/arrow-right-white.svg"
                alt="Seta para direita"
                width={25}
                height={25}
              />
            </S.ItsFreeCTAButton>
          </S.InfoCollun>

          <S.WhatsAppForm>
            <h3>
              Preencha com o seu <br /> WhatsApp e concorra
            </h3>

            <Phone
              dropdownClass="input-phone-dropdown"
              buttonClass="input-phone-button"
              inputClass="phone-input"
              country={'br'}
              localization={pt}
              masks={{ br: '(..) .....-....' }}
              inputProps={{
                value: whatsApp
              }}
              onChange={(value, data: any, _, formattedValue) => {
                if (value === data.dialCode) {
                  setWhatsApp('')
                } else {
                  setWhatsApp(formattedValue)
                }
              }}
              placeholder="Número do WhatsApp"
              disableCountryCode
              disableCountryGuess
            />

            <Button>
              <span>Cadastrar</span>
            </Button>
          </S.WhatsAppForm>
        </S.SectionContent>

        <S.CertificationContainer>
          <FutureImage
            src="/icons/certification.svg"
            alt="Certificado Valido"
            width={40}
            height={40}
          />
          <p>
            Sorteio autorizado pelo Governo Federal
            <br />{' '}
            <a href="#" target="_blank" rel="noreferrer">
              Certificado de autorização
            </a>
          </p>
        </S.CertificationContainer>
      </S.Wrapper>
    </S.Container>
  )
}
