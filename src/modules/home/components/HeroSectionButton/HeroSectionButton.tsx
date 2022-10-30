import * as S from './HeroSectionButtonStyles'
import FutureImage from 'next/image'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export function HeroSectionButton({ text, ...rest }: ButtonProps) {
  return (
    <S.Button {...rest}>
      <span>{text}</span>
      <FutureImage
        className="arrow-right-green"
        src="/icons/arrow-right-green.svg"
        alt="Seta para direita"
        width={25}
        height={25}
      />
      <FutureImage
        className="arrow-right-white"
        src="/icons/arrow-right-white.svg"
        alt="Seta para direita"
        width={25}
        height={25}
      />
    </S.Button>
  )
}
