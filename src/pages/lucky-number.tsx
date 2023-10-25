import Image from 'next/image'
import * as S from '@/modules/lucky-number/styles/LuckyNumberStyles'
import { Button } from '@/shared/components/Button/Button'
import { ImageBackground } from '@/shared/components/ImageBackground/ImageBackground'
import { GradientLine } from '@/shared/components/GradientLine/GradientLine'
import { useContext, useEffect, useState } from 'react'
import api from '@/shared/services/api'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { NextPage } from 'next'
import { MaskedInput } from '@/shared/components/MaskedInput/MaskedInput'
import { useRouter } from 'next/router'
import { HeaderMobile } from '@/shared/components/HeaderMobile/HeaderMobile'
import { requireSSRAuth } from '@/shared/utils/requireSSRAuth'
import { documentValidationSchema } from '@/shared/validation/documentValidationScema'
import { SkeletonAnimation } from '@/shared/shimmer/SkeletonAnimation'
import { AuthContext } from '@/shared/context/AuthContext'

interface FormData {
  document: string
}

const LuckyNumber: NextPage = () => {
  const [isShimmerLoading, setIsShimmerLoading] = useState(true)
  const [buttonLoading, setButtonLoading] = useState(false)
  const [freeLuckyNumber, setFreeLuckyNUmber] = useState('')
  const { updateUser } = useContext(AuthContext)
  const router = useRouter()

  const { register, handleSubmit, getFieldState, formState, setError } =
    useForm<FormData>({
      resolver: yupResolver(documentValidationSchema),
      mode: 'all'
    })
  const documentState = getFieldState('document', formState)

  async function handleValidateLuckyNumber(values: FormData) {
    try {
      setButtonLoading(true)
      await api.patch('/users/update-document', {
        document: values.document
      })

      await updateUser()
      router.push('/share-link')
    } catch (error: any) {
      const field = error.response.data.payload.field
      const message = error.response.data.payload.msg
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

  useEffect(() => {
    const handleCreateFreeLuckyNumber = async () => {
      try {
        const response = await api.post('/lucky-numbers/create')
        setFreeLuckyNUmber(response.data.number)
        setIsShimmerLoading(false)
      } catch (error) {
        setIsShimmerLoading(false)
      }
    }

    handleCreateFreeLuckyNumber()
  }, [])

  return (
    <S.Container>
      <ImageBackground imgUrl={'/images/back-luck-number.jpg'} />

      <S.LuckyNumberContainer
        style={{
          backgroundImage: `url(/images/back-luck-number.jpg)`
        }}
      >
        <HeaderMobile />
        <S.LuckyNumberForm onSubmit={handleSubmit(handleValidateLuckyNumber)}>
          <h1>
            A sua sorte está nos <br /> números 🎉
          </h1>

          <p>
            Aqui está o seu número que poderá trazer a tão sonhada viagem para
            Walt Disney World
          </p>

          {isShimmerLoading ? (
            <SkeletonAnimation className="lucky-number-box-shimmer" />
          ) : (
            <S.LuckyNumberBox>
              <strong>{freeLuckyNumber}</strong>
              <Image
                src={'/icons/green-clover.svg'}
                alt="Icone Trevo verde"
                width={32}
                height={32}
              />
            </S.LuckyNumberBox>
          )}

          <hr />

          <p className="validate-number-message">
            Para <span>validar o seu número</span>, vamos validar o CPF:
          </p>

          <MaskedInput
            register={register}
            isCorrect={!formState.errors.document && documentState.isDirty}
            name="document"
            mask="999.999.999-99"
            error={formState.errors.document}
            label="CPF:"
            type="tel"
            className="input-container"
            placeholder="Insira o seu CPF"
          />

          <Button
            disabled={!formState.isValid}
            isLoading={buttonLoading}
            className="get-more-button"
          >
            <span>Enviar</span>
          </Button>
        </S.LuckyNumberForm>
        <GradientLine />
      </S.LuckyNumberContainer>
    </S.Container>
  )
}

export default LuckyNumber

export const getServerSideProps = requireSSRAuth(async () => {
  return {
    props: {}
  }
})
