import { ReactInputVerificationCodeProps } from 'react-input-verification-code'
import * as S from './ConfirmationCodeInputStyles'
import Image from 'next/image'

interface ConfirmationCodeInputProps extends ReactInputVerificationCodeProps {
  isError: boolean
  errorMessage?: string
}

export function ConfirmationCodeInput({
  isError,
  errorMessage,
  ...rest
}: ConfirmationCodeInputProps) {
  return (
    <S.Container isError={isError}>
      <S.Confirmation {...rest} />

      <S.InvalidCode isError={isError}>
        <Image
          src={'/icons/input-error-icon.svg'}
          alt="Icone de Erro"
          width={20}
          height={20}
        />

        <span>{errorMessage}</span>
      </S.InvalidCode>
    </S.Container>
  )
}
