import { NextPage } from 'next'
import * as S from '@/modules/phone-validation/styles/PhoneValidationStyles'
import { DashBoardHeader } from '@/modules/dashboard/components/DashBoardHeader/DashBoardHeader'
import { DashboardSubHeader } from '@/modules/dashboard/components/DashboardSubHeader/DashboardSubHeader'
import { yupResolver } from '@hookform/resolvers/yup'
import { SelectedOptionContainer } from '@/modules/profile/components/SelectedOptionContainer/SelectedOptionContainer'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { getEmailValidationSchemma } from '@/modules/email-validation/validation/getEmailValidationSchemma'
import { Input } from '@/shared/components/Input/Input'
import { requireSSRAuth } from '@/shared/utils/requireSSRAuth'
import { useState } from 'react'
import api from '@/shared/services/api'

interface FormData {
  email: string
  emailConfirmation: string
}
const EmailValidation: NextPage = () => {
  const [buttonLoading, setButtonLoading] = useState(false)
  const router = useRouter()
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(getEmailValidationSchemma()),
    mode: 'all'
  })

  async function handleEmailValidation(values: FormData) {
    try {
      setButtonLoading(true)
      const response = await api.post('/two-factor/create/', {
        two_factor_type: 'EMAIL'
      })
      const token = response.data.token
      router.push({
        pathname: '/dashboard/profile/email-validation/confirmation',
        query: { email: values.email, token }
      })
    } catch (error) {
      setButtonLoading(false)
    } finally {
      setButtonLoading(false)
    }
  }

  return (
    <S.Container>
      <DashBoardHeader />
      <DashboardSubHeader />

      <SelectedOptionContainer
        title="Validar e-mail"
        instructions="Iremos mandar um codigo para validação no
        seu e-mail."
        submitButtonText="Enviar"
        onSubmit={handleSubmit(handleEmailValidation)}
        isSubmitButtonLoading={buttonLoading}
      >
        <S.InputsContainer>
          <Input
            register={register}
            name="email"
            error={errors.email}
            label="Email:"
            type="email"
            containerClassName="input-container"
            placeholder="Insira o seu e-mail"
          />
          <Input
            register={register}
            name="emailConfirmation"
            error={errors.emailConfirmation}
            label="Confirme o seu e-mail:"
            type="email"
            containerClassName="input-container"
            placeholder="Confirme o e-mail"
          />
        </S.InputsContainer>
      </SelectedOptionContainer>
    </S.Container>
  )
}

export default EmailValidation

export const getServerSideProps = requireSSRAuth(async () => {
  return {
    props: {}
  }
}, false)
