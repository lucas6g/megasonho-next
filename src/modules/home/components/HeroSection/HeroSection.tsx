import FutureImage from 'next/image'
import pt from 'react-phone-input-2/lang/pt.json'
import { Button } from '@/shared/components/Button/Button'
import { PhoneInput } from '@/shared/components/PhoneInput/PhoneInput'
import { yupResolver } from '@hookform/resolvers/yup'
import * as S from './HeroSectionStyles'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'
import { validatePhone } from '@/shared/validation/phoneValidationScema'
import { Header } from '@/modules/home/components/Header/Header'
import { HeroSectionButton } from '@/modules/home/components/HeroSectionButton/HeroSectionButton'
import { useRouter } from 'next/router'
interface IFormInput {
  phone: string
}
export function HeroSection() {
  const [isSelectingCountryCode, selectCoutryCode] = useState(true)
  const [countryCode, setCountryCode] = useState('BR')

  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<IFormInput>({
    resolver: yupResolver(validatePhone(countryCode)),
    mode: 'all'
  })

  const router = useRouter()

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    router.push('/register')
  }

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
        <Header />
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
              Inscreva-se e concorra a viagem dos <br />
              seus sonhos para sua família e amigos.
            </h2>
            <HeroSectionButton text="É totalmente grátis" />
          </S.InfoCollun>

          <S.WhatsAppForm onSubmit={handleSubmit(onSubmit)}>
            <h3>
              Preencha com o seu <br /> WhatsApp e concorra
            </h3>

            <Controller
              control={control}
              name="phone"
              defaultValue=""
              render={({ field }) => (
                <PhoneInput
                  isCorrect={isValid}
                  error={errors.phone}
                  dropdownClass="input-phone-dropdown"
                  buttonClass="input-phone-button"
                  inputClass="phone-input"
                  country={'br'}
                  localization={pt}
                  masks={{ br: '(..) .....-....' }}
                  inputProps={{
                    id: 'phone',
                    onBlur: field.onBlur,
                    ...(isSelectingCountryCode && { value: field.value })
                  }}
                  value={field.value}
                  onChange={(value, data: any, event, formattedValue) => {
                    setCountryCode(data.countryCode.toUpperCase())
                    if (value === data.dialCode) {
                      field.onChange('')
                      selectCoutryCode(true)
                    } else {
                      selectCoutryCode(false)
                      field.onChange(formattedValue)
                    }
                  }}
                  disableCountryCode
                  placeholder="Número do WhatsApp"
                  disableCountryGuess
                />
              )}
            />

            <Button disabled={!isValid}>
              <FutureImage
                className="lock-disabled"
                src="/icons/lock.svg"
                alt="Icone de um Cadeado"
                width={15}
                height={21}
              />
              <FutureImage
                className="lock-enabled"
                src="/icons/lock-gray.svg"
                alt="Seta para direita"
                width={15}
                height={21}
              />
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
