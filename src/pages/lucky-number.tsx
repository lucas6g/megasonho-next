import Image from 'next/image'
import * as S from '@/modules/lucky-number/styles/LuckyNumberStyles'
import { Button } from '@/shared/components/Button/Button'
import { ImageBackground } from '@/shared/components/ImageBackground/ImageBackground'
import { GradientLine } from '@/shared/components/GradientLine/GradientLine'
import { useEffect, useState } from 'react'
import api from '@/shared/services/api'
import { yupResolver } from '@hookform/resolvers/yup'
import { NextPage } from 'next'
import { validate } from 'gerador-validador-cpf'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { MaskedInput } from '@/shared/components/MaskedInput/MaskedInput'
import { useRouter } from 'next/router'
import { HeaderMobile } from '@/shared/components/HeaderMobile/HeaderMobile'
interface FormData {
  document: string
}

const LuckyNumber: NextPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [freeLuckyNumber, setFreeLuckyNUmber] = useState('')
  const router = useRouter()
  async function handleValidateLuckyNumber(values: FormData) {
    router.push('/share-link')
  }

  const formSchema = yup.object().shape({
    document: yup
      .string()
      .test('len', 'Digite seu CPF', (inputValue) => {
        const inputValuelengthWhitOnlyNumbers = inputValue?.replace(
          /\D+/g,
          ''
        ).length

        return inputValuelengthWhitOnlyNumbers === 11
      })
      .test('test-invalid-cpf', 'CPF Inválido', (cpf) => {
        return validate(String(cpf))
      })
  })

  const { register, handleSubmit, getFieldState, formState } =
    useForm<FormData>({
      resolver: yupResolver(formSchema),
      mode: 'all'
    })
  const documentState = getFieldState('document', formState)

  useEffect(() => {
    const handleCreateFreeLuckyNumber = async () => {
      try {
        const response = await api.post('/number-lucky/create')
        setFreeLuckyNUmber(response.data.number)
      } catch (error: any) {
        const response = await api.get('/number-lucky/my/free-number/')
        setFreeLuckyNUmber(response.data.number)
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

          <S.LuckyNumberBox>
            <strong>1.234.567.890</strong>
            <Image
              src={'/icons/green-clover.svg'}
              alt="Icone Trevo verde"
              width={32}
              height={32}
            />
          </S.LuckyNumberBox>

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

          <Button disabled={!formState.isValid} className="get-more-button">
            <span>Enviar</span>
          </Button>
        </S.LuckyNumberForm>
        <GradientLine />
      </S.LuckyNumberContainer>
    </S.Container>
  )
}

export default LuckyNumber
