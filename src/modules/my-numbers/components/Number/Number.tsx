import Image from 'next/image'
import * as S from './NumberStyles'
interface NumberProps {
  value: string
}

export function Number({ value }: NumberProps) {
  return (
    <S.Container>
      <Image
        src={'/icons/rounded-clover-blue.svg'}
        alt="Trevo da Sorte"
        width={40}
        height={40}
      />

      <span>{value}</span>
    </S.Container>
  )
}
