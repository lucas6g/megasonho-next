import FutureImage from 'next/future/image'
import { ButtonHTMLAttributes } from 'react'
import * as S from './CTAButtonStyles'
interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

export function CTAButton(props: CTAButtonProps) {
  return (
    <S.CTAButton {...props}>
      <span>{props.text}</span>
      <FutureImage
        src={'/icons/clover-green.svg'}
        alt="Trevo"
        width={32}
        height={32}
      />
    </S.CTAButton>
  )
}
