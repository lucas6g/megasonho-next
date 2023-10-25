import { NextPage } from 'next'
import * as S from '@/modules/cpf-validation/styles/CpfValidation'
import { DashBoardHeader } from '@/modules/dashboard/components/DashBoardHeader/DashBoardHeader'
import { DashboardSubHeader } from '@/modules/dashboard/components/DashboardSubHeader/DashboardSubHeader'
import { MaskedInput } from '@/shared/components/MaskedInput/MaskedInput'
import { documentValidationSchema } from '@/shared/validation/documentValidationScema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { SelectedOptionContainer } from '@/modules/profile/components/SelectedOptionContainer/SelectedOptionContainer'
import { requireSSRAuth } from '@/shared/utils/requireSSRAuth'
import { useContext, useState } from 'react'
import api from '@/shared/services/api'
import { AuthContext } from '@/shared/context/AuthContext'
import { useRouter } from 'next/router'
import { PopUp } from '@/modules/dashboard/components/PopUp/PopUp'
import swal from '@sweetalert/with-react'

interface FormData {
  document: string
}
const CpfValidation: NextPage = () => {
  const router = useRouter()
  const { user, isOnClient } = useContext(AuthContext)
  const [buttonLoading, setButtonLoading] = useState(false)
  const { updateUser } = useContext(AuthContext)
  const { register, formState, handleSubmit, setError } = useForm<FormData>({
    resolver: yupResolver(documentValidationSchema),
    mode: 'all'
  })

  async function handleValidateCpf(values: FormData) {
    try {
      setButtonLoading(true)
      await api.patch('/users/update-document', {
        document: values.document
      })
      await api.post('/lucky-numbers/create')

      swal('Deu Tudo Certo!', 'Seu CPF foi validado com sucesso', {
        icon: 'success',
        button: {
          text: 'Voltar ao Perfil'
        }
      }).then(() => {
        router.push('/dashboard/profile')
      })

      await updateUser()
    } catch (error: any) {
      const field = error.response.data.field
      const message = error.response.data.msg
      switch (field) {
        case 'document':
          setError('document', {
            message
          })
          break
      }
    } finally {
      setButtonLoading(false)
    }
  }

  return (
    <S.Container hasValidationPending={Boolean(!user?.verified_phone)}>
      <DashBoardHeader />
      <DashboardSubHeader />

      <SelectedOptionContainer
        title="Validar CPF"
        instructions="Precisamos que você valide o seu CPF para você concorrar de
                forma segura aos nossos sorteios."
        submitButtonText="Enviar"
        onSubmit={handleSubmit(handleValidateCpf)}
        isSubmitButtonLoading={buttonLoading}
        hasButtons={!user?.document}
      >
        <MaskedInput
          register={register}
          name="document"
          mask="999.999.999-99"
          error={formState.errors.document}
          label="CPF:"
          type="tel"
          className="input-container"
          placeholder="Insira o seu CPF"
          defaultValue={
            user?.document && isOnClient ? user.document : undefined
          }
          readOnly={!!user?.document}
        />
      </SelectedOptionContainer>

      {!user?.verified_phone && isOnClient ? (
        <S.DashBlourEffect>
          <PopUp
            title="Faça primeiro a validação do Telefone"
            description=", para concorrer as nossas viagens, você precisa validar seu telefone em nossas plataforma."
            buttonText="Validar agora"
          />
        </S.DashBlourEffect>
      ) : null}
    </S.Container>
  )
}

export default CpfValidation

export const getServerSideProps = requireSSRAuth(async () => {
  return {
    props: {}
  }
}, false)
