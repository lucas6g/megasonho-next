import { useEffect, useState } from 'react'
import Image from 'next/image'
import * as S from '@/modules/whats-confirmation/styles/WhatsappConfirmationStyles'
import api from '@/shared/services/api'
import { ImageBackground } from '@/shared/components/ImageBackground/ImageBackground'
import { GradientLine } from '@/shared/components/GradientLine/GradientLine'
import { NextPage } from 'next'

const WhatsappConfirmation: NextPage = () => {
  const [token, setToken] = useState('')

  const [
    whatsConfirmationCodeErrorMessage,
    setWhatsConfirmationCodeErrorMessage
  ] = useState('')

  useEffect(() => {
    api
      .post('/two-factor/create', {
        two_factor_type: 'WHATSAPP'
      })
      .then((response) => {
        setToken(response.data.token)
      })
  }, [])

  const [confirmationCodeError, setConfirmationCodeError] = useState(false)

  const handleConfirmWhats = async (code: string) => {
    try {
      if (!code || code.length < 6) {
        setConfirmationCodeError(true)
        return
      }
      setConfirmationCodeError(false)
      await api.post('/two-factor/activate', {
        code,
        token
      })
    } catch (error: any) {
      setConfirmationCodeError(true)
      setWhatsConfirmationCodeErrorMessage(error.response.data.message)
    }
  }

  const handleResend2FactorCode = async () => {
    const response = await api.post('/two-factor/create', {
      two_factor_type: 'WHATSAPP'
    })

    setToken(response.data.token)
  }

  return (
    <S.Container>
      <ImageBackground imgUrl={'/images/back-whats.jpg'} />

      <S.FormContainer
        style={{
          backgroundImage: `url(/images/back-whats.jpg)`
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
        <S.Form isError={confirmationCodeError}>
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
          <h1>
            Te enviamos um código via Whatsapp{' '}
            <Image
              src={'/icons/whats-icon.svg'}
              alt="Icone de Erro"
              width={20}
              height={20}
            />
          </h1>

          <p>
            Enviamos um codigo para o número <br /> +55 (88) 98888-1244. Informe
            o código enviado:
          </p>

          <S.Confirmation
            type="text"
            isErrored={confirmationCodeError}
            autoFocus
            onCompleted={handleConfirmWhats}
            length={6}
            placeholder=""
          />

          <S.InvalidCode isError={confirmationCodeError}>
            <Image
              src={'/icons/input-error-icon.svg'}
              alt="Icone de Erro"
              width={20}
              height={20}
            />

            <span>{whatsConfirmationCodeErrorMessage}</span>
          </S.InvalidCode>
          <span>
            Não recebeu? Clique{' '}
            <button onClick={handleResend2FactorCode}>aqui</button> para o
            código ser reenviado.
          </span>
        </S.Form>
        <GradientLine />
      </S.FormContainer>
    </S.Container>
  )
}

export default WhatsappConfirmation
