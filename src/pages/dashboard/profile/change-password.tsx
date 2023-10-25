import { NextPage } from 'next'
import * as S from '@/modules/change-password/styles/ChangePasswordStyles'
import { DashBoardHeader } from '@/modules/dashboard/components/DashBoardHeader/DashBoardHeader'
import { DashboardSubHeader } from '@/modules/dashboard/components/DashboardSubHeader/DashboardSubHeader'
import { yupResolver } from '@hookform/resolvers/yup'
import { SelectedOptionContainer } from '@/modules/profile/components/SelectedOptionContainer/SelectedOptionContainer'
import { useForm } from 'react-hook-form'
import { Input } from '@/shared/components/Input/Input'
import { changePasswordScemma } from '@/modules/change-password/validation/changePasswordScemma'
import { requireSSRAuth } from '@/shared/utils/requireSSRAuth'
import api from '@/shared/services/api'
import { useEffect, useState } from 'react'
import swal from '@sweetalert/with-react'

interface FormData {
  actualPassword: string
  newPassword: string
  newPasswordConfirmation: string
}
const ChangePassword: NextPage = () => {
  const {
    handleSubmit,
    register,
    setError,
    reset,
    watch,
    trigger,
    getFieldState,
    formState
  } = useForm<FormData>({
    resolver: yupResolver(changePasswordScemma),
    mode: 'all'
  })

  const watchpass = watch('newPassword')
  const passwordConfirmationState = getFieldState(
    'newPasswordConfirmation',
    formState
  )

  useEffect(() => {
    if (passwordConfirmationState.isDirty) {
      trigger('newPasswordConfirmation')
    }
  }, [watchpass])

  const [buttonLoading, setButtonLoading] = useState(false)
  async function handleChangePassword(values: FormData) {
    try {
      setButtonLoading(true)
      await api.patch('/users/update-password/', {
        old_password: values.actualPassword,
        new_password: values.newPassword
      })
      swal('Deu Tudo Certo!', 'Sua senha foi alterada com sucesso', {
        icon: 'success',
        button: {
          text: 'Fechar'
        }
      }).then(() => {
        reset()
      })
    } catch (error: any) {
      console.log(error)
      setError('actualPassword', {
        message: error.response.data.message
      })
    } finally {
      setButtonLoading(false)
    }
  }

  return (
    <S.Container>
      <DashBoardHeader />
      <DashboardSubHeader />
      <SelectedOptionContainer
        title="Alterar senha"
        submitButtonText="Alterar senha"
        onSubmit={handleSubmit(handleChangePassword)}
        isSubmitButtonLoading={buttonLoading}
      >
        <S.InputsContainer>
          <div className="actual-password-box">
            <Input
              register={register}
              name="actualPassword"
              error={formState.errors.actualPassword}
              label="Senha atual:"
              type="password"
              containerClassName="input-container"
              placeholder="Insira sua senha atual"
            />
          </div>
          <Input
            register={register}
            name="newPassword"
            error={formState.errors.newPassword}
            label="Nova senha:"
            type="password"
            containerClassName="input-container"
            placeholder="Insira sua nova senha"
          />
          <Input
            register={register}
            name="newPasswordConfirmation"
            error={formState.errors.newPasswordConfirmation}
            label="Confirme a nova senha:"
            type="password"
            containerClassName="input-container"
            placeholder="Confirme a sua nova senha"
          />
        </S.InputsContainer>
      </SelectedOptionContainer>
    </S.Container>
  )
}

export default ChangePassword

export const getServerSideProps = requireSSRAuth(async () => {
  return {
    props: {}
  }
})
