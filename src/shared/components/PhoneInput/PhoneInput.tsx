import { FieldError } from 'react-hook-form'
import { PhoneInputProps as ReactPhoneInputProps } from 'react-phone-input-2'
import { Container, InputBlock, Phone } from './PhoneInputStyles'
import Image from 'next/image'

interface PhoneInputProps extends ReactPhoneInputProps {
  label?: string
  error?: FieldError
  isCorrect?: boolean
}

export function PhoneInput({
  label,
  error,
  isCorrect = false,
  ...rest
}: PhoneInputProps) {
  return (
    <Container>
      <InputBlock isError={!!error}>
        {!!label && <label htmlFor={'phone'}>{label}</label>}
        <div>
          <Phone isCorrect={isCorrect} isError={!!error} {...rest} />
          {error && (
            <Image
              src={'/icons/input-error-icon.svg'}
              alt="Icone de Erro"
              width={18}
              height={18}
            />
          )}
          {isCorrect && (
            <Image
              src={'/icons/input-check-icon.svg'}
              alt="Icone de Check"
              width={18}
              height={18}
            />
          )}
        </div>
      </InputBlock>
      {!!error && <span className="error-message">{error.message}</span>}
    </Container>
  )
}
