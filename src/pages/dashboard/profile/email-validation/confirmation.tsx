import { NextPage } from 'next'
import * as S from '@/modules/phone-confirmation/styles/PhoneConfirmationStyles'
import { DashBoardHeader } from '@/modules/dashboard/components/DashBoardHeader/DashBoardHeader'
import { DashboardSubHeader } from '@/modules/dashboard/components/DashboardSubHeader/DashboardSubHeader'
import { SelectedOptionContainer } from '@/modules/profile/components/SelectedOptionContainer/SelectedOptionContainer'
import { useRouter } from 'next/router'
import { ConfirmationCodeInput } from '@/shared/components/ConfirmationCodeInput/ConfirmationCodeInput'
import { useContext, useState } from 'react'
import { requireSSRAuth } from '@/shared/utils/requireSSRAuth'
import swal from '@sweetalert/with-react'
import api from '@/shared/services/api'
import { AuthContext } from '@/shared/context/AuthContext'

const EmailValidationConfirmation: NextPage = () => {
  const router = useRouter()
  const [code, setCode] = useState('')
  const email = String(router.query.email)
  const token = String(router.query.token)
  const { updateUser } = useContext(AuthContext)
  const [
    whatsConfirmationCodeErrorMessage,
    setWhatsConfirmationCodeErrorMessage
  ] = useState('')
  const [confirmationCodeError, setConfirmationCodeError] = useState(false)
  const [buttonLoading, setButtonLoading] = useState(false)
  async function handleValidateEmail() {
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

      swal('Deu Tudo Certo!', 'Seu email foi validado com sucesso', {
        icon: 'success',
        button: {
          text: 'Voltar ao Perfil'
        }
      }).then(() => {
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
        title="Enviamos um código para o seu e-mail"
        instructions={`Acabamos de enviar um código de 6 dígitos para o e-mail: ${email}`}
        submitButtonText="Confirmar"
        hasCancelLink={false}
        buttonType="button"
        onButtonClick={async () => await handleValidateEmail()}
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

export default EmailValidationConfirmation

export const getServerSideProps = requireSSRAuth(async () => {
  return {
    props: {}
  }
}, false)
