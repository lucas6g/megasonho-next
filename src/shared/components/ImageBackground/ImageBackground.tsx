import * as S from './ImageBackgroundStyles'
import Image from 'next/image'

interface ImageBackgroundProps {
  imgUrl: string
}

export function ImageBackground({ imgUrl }: ImageBackgroundProps) {
  return (
    <S.ImageBackground>
      <Image
        className="back-image"
        src={imgUrl}
        alt="Image de fundo"
        width={976}
        height={1010}
        quality={100}
        priority
      />
      <div>
        <Image
          src={'/icons/logo.svg'}
          alt="Logo MEGASONHO"
          width={345}
          height={50}
        />
      </div>
    </S.ImageBackground>
  )
}
