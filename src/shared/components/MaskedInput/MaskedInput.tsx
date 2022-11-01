import { FieldError } from 'react-hook-form'
import { Container, InputBlock, StyledInput } from './MaskedInputStyles'
import Image from 'next/image'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  error?: FieldError
  register: any
  isCorrect?: boolean
  mask: string
}

export function MaskedInput({
  label,
  error,
  register,
  mask,
  name,
  isCorrect = false,
  ...rest
}: InputProps) {
  return (
    <Container>
      <InputBlock isCorrect={isCorrect} isError={!!error}>
        {!!label && <label htmlFor={name}>{label}</label>}
        <div>
          <StyledInput
            mask={mask}
            isError={!!error}
            maskChar={null}
            id={name}
            {...register(name)}
            {...rest}
          />
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
