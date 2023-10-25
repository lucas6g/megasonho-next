import { NextPage } from 'next'
import * as S from '@/modules/change-email/styles/ChangeEmailStyles'
import { DashBoardHeader } from '@/modules/dashboard/components/DashBoardHeader/DashBoardHeader'
import { DashboardSubHeader } from '@/modules/dashboard/components/DashboardSubHeader/DashboardSubHeader'
import { yupResolver } from '@hookform/resolvers/yup'
import { SelectedOptionContainer } from '@/modules/profile/components/SelectedOptionContainer/SelectedOptionContainer'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { Input } from '@/shared/components/Input/Input'
import { changeEmailScemma } from '@/modules/change-email/validation/changeEmailScemma'
import { requireSSRAuth } from '@/shared/utils/requireSSRAuth'
import api from '@/shared/services/api'
import { useState } from 'react'

interface FormData {
  actualEmail: string
  newEmail: string
  newEmailConfirmation: string
}
const ChangeEmail: NextPage = () => {
  const [buttonLoading, setButtonLoading] = useState(false)
  const router = useRouter()
  const {
    handleSubmit,
    register,
    getValues,
    setValue,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(changeEmailScemma),
    mode: 'all'
  })

  async function handleChangeEmail(values: FormData) {
    try {
      setButtonLoading(true)
      const response = await api.patch('/users/update-email', {
        email: values.newEmail
      })
      const { token } = response.data.token
      router.push({
        pathname: '/dashboard/profile/change-email/confirmation',
        query: { email: values.actualEmail, token }
      })
    } catch (error: any) {
      console.log(error)
      setError('actualEmail', {
        message: error.response.data.message
      })
    } finally {
      setButtonLoading(false)
    }
  }
  async function completeEmail(emailEnd: string) {
    const newEmailValue = getValues('newEmail')
    setValue('newEmail', `${newEmailValue}${emailEnd}`, {
      shouldValidate: true
    })
  }

  return (
    <S.Container>
      <DashBoardHeader />
      <DashboardSubHeader />
      <SelectedOptionContainer
        title="Alterar e-mail"
        instructions="Iremos mandar um codigo para validação no
        seu novo e-mail."
        submitButtonText="Continuar"
        isSubmitButtonLoading={buttonLoading}
        onSubmit={handleSubmit(handleChangeEmail)}
      >
        <S.InputsContainer>
          <div className="actual-email-box">
            <Input
              register={register}
              name="actualEmail"
              error={errors.actualEmail}
              label="E-mail atual:"
              type="email"
              containerClassName="input-container"
              placeholder="Insira o seu e-mail atual"
            />
          </div>
          <Input
            register={register}
            name="newEmail"
            error={errors.newEmail}
            label="Insira o seu novo e-mail:"
            type="email"
            hasButtonToComplete
            completeEmail={completeEmail}
            containerClassName="input-container"
            placeholder="Insira o seu e-mail"
          />
          <Input
            register={register}
            name="newEmailConfirmation"
            error={errors.newEmailConfirmation}
            label="Confirme o seu novo e-mail:"
            type="email"
            containerClassName="input-container"
            placeholder="Insira o seu novo e-mail"
          />
        </S.InputsContainer>
      </SelectedOptionContainer>
    </S.Container>
  )
}

export default ChangeEmail

export const getServerSideProps = requireSSRAuth(async () => {
  return {
    props: {}
  }
})
