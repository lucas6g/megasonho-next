import Image from 'next/image'
import type { NextPage } from 'next'
import Link from 'next/link'
import * as yup from 'yup'
import pt from 'react-phone-input-2/lang/pt.json'
import * as S from '@/modules/login/styles/LoginStyles'
import { PhoneInput } from '@/shared/components/PhoneInput/PhoneInput'
import { Button } from '@/shared/components/Button/Button'
import React, { useContext, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '@/shared/components/Input/Input'
import 'yup-phone'
import { useRouter } from 'next/router'
import { AuthContext } from '@/shared/context/AuthContext'
interface IFormInput {
  phone: string
  password: string
}
const Login: NextPage = () => {
  const router = useRouter()
  const { login } = useContext(AuthContext)
  const [dialCode, setDialCode] = useState(0)
  const [isLoading, setLoading] = useState(false)
  const [isSelectingCountryCode, selectCoutryCode] = useState(true)
  const [countryCode, setCountryCode] = useState('BR')
  const formSchema = yup.object().shape({
    phone: yup
      .string()
      .phone(countryCode.toUpperCase(), undefined, 'Digite um número correto')
      .required(),
    password: yup.string().required('Senha obrigátoria')
  })

  const {
    control,
    handleSubmit,
    register,
    formState,
    getFieldState,
    setError
  } = useForm<IFormInput>({
    resolver: yupResolver(formSchema),
    mode: 'all'
  })

  const phoneState = getFieldState('phone', formState)
  const passowordState = getFieldState('password', formState)

  const loginSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      setLoading(true)
      await login({
        phone: `+${dialCode}${data.phone.replace(/\D+/g, '')}`,
        password: data.password
      })
      router.push('/plans')
    } catch (error: any) {
      console.log(error)
      const field = error.response.data.payload.field
      const message = error.response.data.payload.msg
      switch (field) {
        case 'phone':
          setError('phone', {
            message
          })
          break
        case 'password':
          setError('password', {
            message
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

            <S.LoginForm onSubmit={handleSubmit(loginSubmit)}>
              <S.LoginFormTitle>Faça seu login</S.LoginFormTitle>
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
                      placeholder="Número do WhatsApp"
                      disableCountryGuess
                    />
                  )}
                />
                <Input
                  register={register}
                  isCorrect={
                    !formState.errors.password && passowordState.isDirty
                  }
                  name="password"
                  error={formState.errors.password}
                  label="Senha:"
                  type="password"
                  placeholder="Confirme a sua senha"
                  className="input-container"
                />
              </div>

              <button type="button" className="forgot-password">
                Esqueci minha senha
              </button>
              <Button isLoading={isLoading} type="submit">
                <span> Entrar</span>
              </Button>
            </S.LoginForm>
          </S.SectionForm>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  )
}

export default Login
