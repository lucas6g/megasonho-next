import { useEffect, useState } from 'react'
import Image from 'next/image'
import * as S from '@/modules/whats-confirmation/styles/WhatsappConfirmationStyles'
import api from '@/shared/services/api'
import { ImageBackground } from '@/shared/components/ImageBackground/ImageBackground'
import { GradientLine } from '@/shared/components/GradientLine/GradientLine'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Button } from '@/shared/components/Button/Button'
import { HeaderMobile } from '@/shared/components/HeaderMobile/HeaderMobile'
import { requireSSRAuth } from '@/shared/utils/requireSSRAuth'

const WhatsappConfirmation: NextPage = () => {
  const [token, setToken] = useState('')
  const [code, setCode] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [buttonDisable, setButtonDisabled] = useState(true)
  const router = useRouter()
  const [
    whatsConfirmationCodeErrorMessage,
    setWhatsConfirmationCodeErrorMessage
  ] = useState('')

  useEffect(() => {
    api
      .post('/two-factor/create/', {
        two_factor_type: 'WHATSAPP'
      })
      .then((response) => {
        console.log(response.data)
        setToken(response.data.token)
      })
  }, [])

  const [confirmationCodeError, setConfirmationCodeError] = useState(false)

  const handleConfirmWhats = async (code: string) => {
    try {
      setLoading(true)
      if (!code || code.length < 6) {
        setConfirmationCodeError(true)
        return
      }

      await api.post('/two-factor/activate', {
        code,
        token
      })
      router.push('/lucky-number')
    } catch (error: any) {
      setConfirmationCodeError(true)
      setWhatsConfirmationCodeErrorMessage(error.response.data.message)
    } finally {
      setLoading(false)
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
        <HeaderMobile />
        <S.Form isError={confirmationCodeError}>
          <h1>
            Te enviamos um código <br /> via Whatsapp{' '}
            <Image
              src={'/icons/whats-icon.svg'}
              alt="Icone de Erro"
              width={20}
              height={20}
            />
          </h1>

          <p>
            Digite o código que recebeu no <br /> campo abaixo
          </p>

          <S.Confirmation
            type="text"
            isErrored={confirmationCodeError}
            autoFocus
            onChange={(code) => {
              if (code.length === 6) {
                setButtonDisabled(false)
                setCode(code)
              } else {
                setButtonDisabled(true)
              }
            }}
            value={code}
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
            <button type="button" onClick={handleResend2FactorCode}>
              aqui
            </button>{' '}
            para o código ser reenviado.
          </span>
          <Button
            isLoading={isLoading}
            type="button"
            className="send-code-button"
            onClick={async () => {
              await handleConfirmWhats(code)
            }}
            disabled={buttonDisable}
          >
            Enviar
          </Button>
        </S.Form>
        <GradientLine />
      </S.FormContainer>
    </S.Container>
  )
}

export default WhatsappConfirmation

export const getServerSideProps = requireSSRAuth(async () => {
  return {
    props: {}
  }
})
