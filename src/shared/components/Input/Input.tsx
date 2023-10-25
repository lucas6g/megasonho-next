import { FieldError } from 'react-hook-form'
import { Container, InputBlock, StyledInput } from './InputStyles'
import Image from 'next/image'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  error?: FieldError
  register: any
  isCorrect?: boolean
  containerClassName?: string
  hasButtonToComplete?: boolean
  completeEmail?: (emailEnd: string) => void
}

export function Input({
  label,
  error,
  register,
  name,
  isCorrect = false,
  containerClassName,
  hasButtonToComplete = false,
  completeEmail,
  ...rest
}: InputProps) {
  const completeEmailButtons = ['@hotmail.com', '@gmail.com', '@outlook.com']

  return (
    <Container className={containerClassName}>
      <InputBlock isCorrect={isCorrect} isError={!!error}>
        {!!label && <label htmlFor={name}>{label}</label>}
        <div className="icons">
          <StyledInput
            isError={!!error}
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
      {hasButtonToComplete && (
        <div className="complete-email-buttons">
          {completeEmailButtons.map((value) => {
            return (
              <button
                onClick={() => completeEmail?.(value)}
                type="button"
                key={value}
              >
                {value}
              </button>
            )
          })}
        </div>
      )}
      {!!error && <span className="error-message">{error.message}</span>}
    </Container>
  )
}
