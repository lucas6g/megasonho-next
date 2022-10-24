import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Container } from './ButtonStyles'

import { ThreeDots } from 'react-loader-spinner'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  children: ReactNode
}

export function Button({ children, isLoading, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      {isLoading ? (
        <ThreeDots color="#ffffff" height={32} width={32} />
      ) : (
        children
      )}
    </Container>
  )
}
