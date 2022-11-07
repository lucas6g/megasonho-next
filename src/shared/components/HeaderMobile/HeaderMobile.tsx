import * as S from './HeaderMobileStyles'
import Image from 'next/image'

export function HeaderMobile() {
  return (
    <S.HeaderMobile>
      <Image
        src={'/icons/logo.svg'}
        alt="Imagem de fundo"
        width={345}
        height={50}
        id="logo-white"
      />
    </S.HeaderMobile>
  )
}
