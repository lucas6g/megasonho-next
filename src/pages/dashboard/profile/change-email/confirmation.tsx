import { NextPage } from 'next'
import * as S from '@/modules/phone-confirmation/styles/PhoneConfirmationStyles'
import { DashBoardHeader } from '@/modules/dashboard/components/DashBoardHeader/DashBoardHeader'
import { DashboardSubHeader } from '@/modules/dashboard/components/DashboardSubHeader/DashboardSubHeader'
import { SelectedOptionContainer } from '@/modules/profile/components/SelectedOptionContainer/SelectedOptionContainer'
import { useRouter } from 'next/router'
import { ConfirmationCodeInput } from '@/shared/components/ConfirmationCodeInput/ConfirmationCodeInput'
import { useState } from 'react'
import { requireSSRAuth } from '@/shared/utils/requireSSRAuth'

const ChangeEmailConfirmation: NextPage = () => {
  const router = useRouter()
  const [code, setCode] = useState('')
  const email = String(router.query.email)
  async function handleChangeEmailConfirmation() {
    alert('viado')
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
        onButtonClick={async () => await handleChangeEmailConfirmation()}
      >
        <ConfirmationCodeInput
          type="text"
          isError={false}
          errorMessage="Ta errado aii"
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

export default ChangeEmailConfirmation

export const getServerSideProps = requireSSRAuth(async () => {
  return {
    props: {}
  }
})
