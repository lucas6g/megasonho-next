import Image from 'next/image'
import * as S from './GuestStyles'

interface GuestProps {
  name: string
  time: string
  hasBorder?: boolean
  hasPadding?: boolean
}

export function Guest({
  hasBorder = true,
  hasPadding = true,
  name,
  time
}: GuestProps) {
  const formatedName = name.length > 24 ? `${name.slice(0, 24)}...` : name
  return (
    <S.Container hasPadding={hasPadding} hasBorder={hasBorder}>
      <div className="last-guest-name-box">
        <Image
          src={'/icons/rounded-clover-blue.svg'}
          alt="Trevo da Sorte"
          width={40}
          height={40}
        />
        <span>{formatedName}</span>
      </div>

      <time>
        <Image
          src={'/icons/clock-circle-gray.svg'}
          alt="Icone de um Relogio"
          width={16}
          height={16}
        />
        {time}
      </time>
    </S.Container>
  )
}
