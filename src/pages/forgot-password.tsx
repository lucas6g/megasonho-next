import Image from 'next/image'
import type { NextPage } from 'next'
import Link from 'next/link'
import * as yup from 'yup'
import pt from 'react-phone-input-2/lang/pt.json'
import * as S from '@/modules/forgot-password/styles/ForgotPasswordStyles'
import { PhoneInput } from '@/shared/components/PhoneInput/PhoneInput'
import { Button } from '@/shared/components/Button/Button'
import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import 'yup-phone'
import { useRouter } from 'next/router'

interface IFormInput {
  phone: string
}
const ForgotPassword: NextPage = () => {
  const router = useRouter()
  const [dialCode, setDialCode] = useState(0)
  const [isLoading, setLoading] = useState(false)
  const [isSelectingCountryCode, selectCoutryCode] = useState(true)
  const [countryCode, setCountryCode] = useState('BR')
  const formSchema = yup.object().shape({
    phone: yup
      .string()
      .phone(countryCode.toUpperCase(), undefined, 'Digite um número correto')
      .required()
  })

  const { control, handleSubmit, formState, getFieldState, setError } =
    useForm<IFormInput>({
      resolver: yupResolver(formSchema),
      mode: 'all'
    })

  const phoneState = getFieldState('phone', formState)

  const handleForgotPasswordSubmit: SubmitHandler<IFormInput> = async (
    data
  ) => {
    try {
      console.log(`+${dialCode}${data.phone.replace(/\D+/g, '')}`)
      setLoading(true)

      router.push('/')
    } catch (error: any) {
      console.log(error)
      const field = error.response.data.payload.field
      const errorMessage = error.response.data.payload.msg
      switch (field) {
        case 'phone':
          setError('phone', {
            message: errorMessage
          })
          break
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <S.Container>
      <Image
        src={'/images/back-login.jpg'}
        alt="Imagem de fundo Disney"
        width={1920}
        height={1110}
        className="login-back"
        quality={100}
        priority
      />
      <S.Wrapper>
        <S.Content>
          <S.Header>
            <S.LogoMobile>
              <Link className="logo" href="/">
                <Image
                  src={'/icons/logo.svg'}
                  alt="Logo da MEGASONHO"
                  width={345}
                  height={50}
                />
              </Link>
            </S.LogoMobile>
            <div>
              <a
                href="https://api.whatsapp.com/send?1=pt_br&phone=5511973796061&text=Ola%20MEGASONHO!"
                target="_blank"
                rel="noreferrer"
              >
                <Image
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
                <Image
                  src={'/icons/instagran.svg'}
                  alt="Icone Do Instagran"
                  width={32}
                  height={32}
                />
              </a>
            </div>
          </S.Header>

          <S.SectionForm>
            <S.LogoDesktop>
              <Link className="logo" href="/">
                <Image
                  src={'/icons/logo.svg'}
                  alt="Logo da MEGASONHO"
                  width={345}
                  height={50}
                />
              </Link>
            </S.LogoDesktop>

            <S.LoginForm onSubmit={handleSubmit(handleForgotPasswordSubmit)}>
              <S.LoginFormTitle>Recuperar senha</S.LoginFormTitle>
              <p>Informe seu número para enviarmos um código de recuperação.</p>
              <div className="gap">
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
                        setDialCode(data.dialCode)
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
                      placeholder="Insira seu número"
                      disableCountryGuess
                    />
                  )}
                />
                <Button isLoading={isLoading} type="submit">
                  <span> Enviar</span>
                </Button>
              </div>
            </S.LoginForm>
          </S.SectionForm>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  )
}

export default ForgotPassword
