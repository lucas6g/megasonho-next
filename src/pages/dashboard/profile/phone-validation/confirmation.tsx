import { NextPage } from 'next'
import * as S from '@/modules/phone-confirmation/styles/PhoneConfirmationStyles'
import { DashBoardHeader } from '@/modules/dashboard/components/DashBoardHeader/DashBoardHeader'
import { DashboardSubHeader } from '@/modules/dashboard/components/DashboardSubHeader/DashboardSubHeader'
import { SelectedOptionContainer } from '@/modules/profile/components/SelectedOptionContainer/SelectedOptionContainer'
import { useRouter } from 'next/router'
import { ConfirmationCodeInput } from '@/shared/components/ConfirmationCodeInput/ConfirmationCodeInput'
import { useContext, useState } from 'react'
import swal from '@sweetalert/with-react'
import { requireSSRAuth } from '@/shared/utils/requireSSRAuth'
import api from '@/shared/services/api'
import { AuthContext } from '@/shared/context/AuthContext'

const PhoneValidationConfirmation: NextPage = () => {
  const router = useRouter()
  const [code, setCode] = useState('')
  const phone = String(router.query.phone)
  const token = String(router.query.token)
  const { updateUser } = useContext(AuthContext)
  const [buttonLoading, setButtonLoading] = useState(false)
  const [
    whatsConfirmationCodeErrorMessage,
    setWhatsConfirmationCodeErrorMessage
  ] = useState('')
  const [confirmationCodeError, setConfirmationCodeError] = useState(false)
  async function handleValidatePhone() {
    try {
      setButtonLoading(true)
      if (!code || code.length < 6) {
        setConfirmationCodeError(true)
        return
      }

      await api.post('/two-factor/activate', {
        code,
        token
      })
      await updateUser()

      swal(
        'Deu Tudo Certo!',
        'Seu número de telefone foi validado com seucesso',
        {
          icon: 'success',
          button: {
            text: 'Voltar ao Perfil'
          }
        }
      ).then(() => {
        router.push('/dashboard/profile')
      })
    } catch (error: any) {
      setConfirmationCodeError(true)
      setWhatsConfirmationCodeErrorMessage(error.response.data.message)
    } finally {
      setButtonLoading(false)
    }
  }

  return (
    <S.Container>
      <DashBoardHeader />
      <DashboardSubHeader />

      <SelectedOptionContainer
        title="Validar o número de telefone"
        instructions={`Acabamos de enviar um código de 6 dígitos para o número: ${phone}`}
        submitButtonText="Confirmar"
        hasCancelLink={false}
        buttonType="button"
        onButtonClick={async () => await handleValidatePhone()}
        isSubmitButtonLoading={buttonLoading}
      >
        <ConfirmationCodeInput
          type="text"
          isError={confirmationCodeError}
          errorMessage={whatsConfirmationCodeErrorMessage}
          autoFocus
          onChange={(code) => {
            setCode(code)
          }}
          value={code}
          length={6}
          placeholder=""
        />
      </SelectedOptionContainer>
    </S.Container>
  )
}

export default PhoneValidationConfirmation

export const getServerSideProps = requireSSRAuth(async () => {
  return {
    props: {}
  }
}, false)
