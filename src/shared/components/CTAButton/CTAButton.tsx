import FutureImage from 'next/future/image'
import * as S from './CTAButtonStyles'

export function CTAButton() {
  return (
    <S.CTAButton>
      <span>Concorra agora mesmo</span>
      <FutureImage
        src={'/icons/clover-green.svg'}
        alt="Trevo"
        width={32}
        height={32}
      />
    </S.CTAButton>
  )
}
