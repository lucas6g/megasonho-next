import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import { Input } from '@/shared/components/Input/Input'
import * as S from '@/modules/register/styles/RegisterStyles'
import { Button } from '@/shared/components/Button/Button'
import { ImageBackground } from '@/shared/components/ImageBackground/ImageBackground'
import { GradientLine } from '@/shared/components/GradientLine/GradientLine'
import { useState } from 'react'
import { PhoneInput } from '@/shared/components/PhoneInput/PhoneInput'
import pt from 'react-phone-input-2/lang/pt.json'
import { getRegisterPageValidationScemma } from '@/modules/register/validation/getRegisterPageValidationScemma'
import Image from 'next/image'
import Link from 'next/link'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

interface FormData {
  name: string
  phone: string
  email: string
  password: string
  passwordConfirmation: string
  acceptTerms: boolean
}

const Register: NextPage = () => {
  const [countryCode, setCountryCode] = useState('BR')
  const [isSelectingCountryCode, selectCoutryCode] = useState(true)
  const { register, handleSubmit, formState, getFieldState, control } =
    useForm<FormData>({
      resolver: yupResolver(getRegisterPageValidationScemma(countryCode)),
      defaultValues: {
        acceptTerms: true
      },
      mode: 'all'
    })
  const nameState = getFieldState('name', formState)
  const phoneState = getFieldState('phone', formState)
  const emailState = getFieldState('email', formState)
  const passwordState = getFieldState('password', formState)
  const passwordConfirmationState = getFieldState(
    'passwordConfirmation',
    formState
  )

  const router = useRouter()
  async function handleRegisterParticipant(values: FormData) {
    router.push('/whatsapp-confirmation')
  }

  return (
    <>
      <S.Container>
        <ImageBackground imgUrl={'/images/back-register.jpg'} />

        <S.FormContainer
          style={{
            backgroundImage: `url(${'/images/back-register.jpg'})`
          }}
        >
          <S.HeaderMobile>
            <Image
              src={'/icons/logo.svg'}
              alt="Imagem de fundo"
              width={345}
              height={50}
              id="logo-white"
            />
            <button type="button">
              <Image
                src={'/icons/close.svg'}
                alt="Icone de fechar"
                width={32}
                height={32}
              />
            </button>
          </S.HeaderMobile>
          <S.Form onSubmit={handleSubmit(handleRegisterParticipant)}>
            <S.ProgresseBarDesk>
              <button type="button">
                <Image
                  src={'/icons/close.svg'}
                  alt="Icone de fechar"
                  width={32}
                  height={32}
                />
              </button>
            </S.ProgresseBarDesk>

            <Input
              register={register}
              isCorrect={!formState.errors.name && nameState.isDirty}
              name="name"
              error={formState.errors.name}
              label="Nome Completo:"
              type="text"
              className="input-container"
              placeholder="Insira o seu nome completo"
            />
            <Controller
              control={control}
              name="phone"
              defaultValue=""
              render={({ field }) => (
                <PhoneInput
                  isCorrect={!formState.errors.phone && phoneState.isDirty}
                  error={formState.errors.phone}
                  dropdownClass="input-phone-dropdown"
                  buttonClass="input-phone-button"
                  inputClass="phone-input"
                  country={'br'}
                  localization={pt}
                  label="Número do Whatsapp:"
                  masks={{ br: '(..) .....-....' }}
                  inputProps={{
                    id: 'phone',
                    onBlur: field.onBlur,
                    ref: field.ref,
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

            <Input
              register={register}
              isCorrect={!formState.errors.email && emailState.isDirty}
              name="email"
              error={formState.errors.email}
              label="E-mail:"
              type="email"
              className="input-container"
              placeholder="Insira o seu melhor email"
            />
            <Input
              register={register}
              isCorrect={!formState.errors.password && passwordState.isDirty}
              name="password"
              error={formState.errors.password}
              label="Senha:"
              type="password"
              placeholder="Crie a sua senha"
              className="input-container"
            />
            <Input
              register={register}
              isCorrect={
                !formState.errors.passwordConfirmation &&
                passwordConfirmationState.isDirty
              }
              name="passwordConfirmation"
              error={formState.errors.passwordConfirmation}
              label="Confirmar senha:"
              type="password"
              className="input-container"
              placeholder="Confirme a sua senha"
            />

            <S.TermsCheckBox>
              <S.CheckBox
                {...register('acceptTerms')}
                isError={!!formState.errors.acceptTerms}
                name="acceptTerms"
                type="checkbox"
              />
              <span>
                Li e aceito as <Link href={'/'}> POLÍTICAS da MEGASONHO </Link>{' '}
                e aceito receber comunicações por WhatsApp e E-Mail, conforme
                descrito neste documento.
              </span>
            </S.TermsCheckBox>

            <Button disabled={!formState.isValid} type="submit">
              <span>Enviar</span>
            </Button>
          </S.Form>
          <GradientLine />
        </S.FormContainer>
      </S.Container>
    </>
  )
}

export default Register
