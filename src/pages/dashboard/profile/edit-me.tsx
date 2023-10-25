import { NextPage } from 'next'
import * as S from '@/modules/edit-me/styles/EditMeStyles'
import { DashBoardHeader } from '@/modules/dashboard/components/DashBoardHeader/DashBoardHeader'
import { DashboardSubHeader } from '@/modules/dashboard/components/DashboardSubHeader/DashboardSubHeader'
import { SelectedOptionContainer } from '@/modules/profile/components/SelectedOptionContainer/SelectedOptionContainer'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { editMeValidationSchemma } from '@/modules/edit-me/validation/editMeValidationSchemma'
import { ChangeEvent, useContext, useState } from 'react'
import { Avatar } from '@/shared/components/Avatar/Avatar'
import Image from 'next/image'
import { Input } from '@/shared/components/Input/Input'
import { MaskedInput } from '@/shared/components/MaskedInput/MaskedInput'
import { requireSSRAuth } from '@/shared/utils/requireSSRAuth'
import { AuthContext } from '@/shared/context/AuthContext'

interface FormData {
  name: string
  document: string
}

const EditMe: NextPage = () => {
  const { user } = useContext(AuthContext)
  const [imagePreviewUrl, setImagePreviewUrl] = useState('')
  const [image, setImage] = useState<File>()
  function handleSelectImage(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files.length > 0) {
      const url = URL.createObjectURL(event.target.files[0])
      setImagePreviewUrl(url)
      setImage(event.target.files[0])
    }
  }

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(editMeValidationSchemma),
    mode: 'all',
    defaultValues: {
      name: user?.name
    }
  })

  function handleEditProfileInfo(values: FormData) {
    console.log(values)
    console.log(image)
  }

  return (
    <S.Container>
      <DashBoardHeader />
      <DashboardSubHeader />

      <SelectedOptionContainer
        title="Editar dados pessoais"
        submitButtonText="Salvar"
        onSubmit={handleSubmit(handleEditProfileInfo)}
      >
        <S.AvatarContainer>
          <Avatar
            allowEdit
            name="bookImage"
            id="image"
            imgUrl={imagePreviewUrl}
            handleSelectImage={handleSelectImage}
          />
          <div className="info-block">
            <div className="description">
              <span>Alterar foto de perfil</span>
              <Image
                src={'/icons/upload-icon.svg'}
                alt="Icone de upload"
                width={20}
                height={20}
              />
            </div>
            <p>Tamanho máximo de 800kb.</p>
          </div>
        </S.AvatarContainer>
        <S.InputsContainer>
          <Input
            register={register}
            name="name"
            disabled
            error={errors.name}
            label="Nome Completo:"
            type="text"
            containerClassName="input-container"
            placeholder="Insira o seu nome completo"
          />

          <MaskedInput
            defaultValue={user?.document}
            register={register}
            disabled
            name="document"
            mask="999.999.999-99"
            error={errors.document}
            label="CPF:"
            type="tel"
            className="input-container"
            placeholder="Insira o seu CPF"
          />
        </S.InputsContainer>
      </SelectedOptionContainer>
    </S.Container>
  )
}

export default EditMe

export const getServerSideProps = requireSSRAuth(async () => {
  return {
    props: {}
  }
})
