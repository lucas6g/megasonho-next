import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import { Input } from '@/shared/components/Input/Input'
import * as S from '@/modules/register/styles/RegisterStyles'
import { Button } from '@/shared/components/Button/Button'
import { ImageBackground } from '@/shared/components/ImageBackground/ImageBackground'
import { GradientLine } from '@/shared/components/GradientLine/GradientLine'
import { useContext, useEffect, useState } from 'react'
import { PhoneInput } from '@/shared/components/PhoneInput/PhoneInput'
import pt from 'react-phone-input-2/lang/pt.json'
import { getRegisterPageValidationScemma } from '@/modules/register/validation/getRegisterPageValidationScemma'
import Image from 'next/image'
import Link from 'next/link'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { AuthContext } from '@/shared/context/AuthContext'

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
  const router = useRouter()
  const { registerUser } = useContext(AuthContext)
  const [isLoading, setLoading] = useState(false)
  const [isPhoneInputFiled, setIsPhoneInputFiled] = useState(false)
  const [isSelectingCountryCode, selectCoutryCode] = useState(true)
  const [dialCode, setDialCode] = useState(0)
  const formPhone = String(router.query.formPhone)
  const phone = String(router.query.phone)
  const {
    register,
    handleSubmit,
    formState,
    getFieldState,
    control,
    trigger,
    setValue,
    watch,
    setError
  } = useForm<FormData>({
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

  const watchpass = watch('password')

  useEffect(() => {
    if (formPhone !== 'undefined') {
      setIsPhoneInputFiled(true)
      setValue('phone', formPhone, { shouldDirty: true })
    }
  }, [formPhone])

  useEffect(() => {
    if (passwordConfirmationState.isDirty) {
      trigger('passwordConfirmation')
    }
  }, [watchpass])

  useEffect(() => {
    if (localStorage.getItem('@MEGASONHO:end_date') != null) {
      localStorage.removeItem('@MEGASONHO:end_date')
    }
    if (localStorage.getItem('@MEGASONHO:reach-end_date') != null) {
      localStorage.removeItem('@MEGASONHO:reach-end_date')
    }
  }, [])

  async function handleRegisterParticipant(data: FormData) {
    try {
      setLoading(true)
      const codeReference = localStorage.getItem('@MEGASONHO:r')
      if (phone !== 'undefined') {
        await registerUser({
          name: data.name,
          email: data.email,
          password: data.password,
          phone,
          r: codeReference
        })
      } else {
        await registerUser({
          name: data.name,
          email: data.email,
          password: data.password,
          phone: `+${dialCode}${data.phone.replace(/\D+/g, '')}`,
          r: codeReference
        })
      }
      router.push('/whatsapp-confirmation')
    } catch (error: any) {
      const field = error.response.data.payload.field
      const message = error.response.data.payload.msg
      switch (field) {
        case 'phone':
          setError('phone', {
            message
          })
          break
        case 'email':
          setError('email', {
            message
          })
          break
      }
    } finally {
      setLoading(false)
    }
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
            <button
              onClick={() => {
                router.push('/')
              }}
              type="button"
            >
              <Image
                src={'/icons/close.svg'}
                alt="Icone de fechar"
                width={32}
                height={32}
              />
            </button>
          </S.HeaderMobile>

          <S.Form
            autoComplete="off"
            onSubmit={handleSubmit(handleRegisterParticipant)}
          >
            <S.HeaderDeskTop>
              <button
                onClick={() => {
                  router.push('/')
                }}
                type="button"
              >
                <Image
                  src={'/icons/close.svg'}
                  alt="Icone de fechar"
                  width={32}
                  height={32}
                />
              </button>
            </S.HeaderDeskTop>

            <Input
              register={register}
              isCorrect={!formState.errors.name && nameState.isDirty}
              name="name"
              error={formState.errors.name}
              label="Nome Completo:"
              type="text"
              containerClassName="input-container"
              placeholder="Insira o seu nome completo"
            />
            <Controller
              control={control}
              name="phone"
              defaultValue=""
              render={({ field }) => (
                <PhoneInput
                  disableDropdown={isPhoneInputFiled}
                  isCorrect={!formState.errors.phone && phoneState.isDirty}
                  error={formState.errors.phone}
                  containerClassName="input-container"
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
                    name: field.name,
                    ...(isSelectingCountryCode && { value: field.value }),
                    readOnly: isPhoneInputFiled
                  }}
                  value={field.value}
                  onChange={(value, data: any, event, formattedValue) => {
                    setCountryCode(data.countryCode.toUpperCase())
                    setDialCode(data.dialCode)
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
              autoComplete="off"
              containerClassName="input-container"
              placeholder="Insira o seu melhor email"
            />
            <Input
              register={register}
              isCorrect={!formState.errors.password && passwordState.isDirty}
              name="password"
              error={formState.errors.password}
              label="Senha:"
              type="password"
              autoComplete="new-password"
              placeholder="Crie a sua senha"
              containerClassName="input-container"
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
              autoComplete="new-password"
              containerClassName="input-container"
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

            <Button
              isLoading={isLoading}
              className="register-btn"
              disabled={!formState.isValid}
              type="submit"
            >
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
