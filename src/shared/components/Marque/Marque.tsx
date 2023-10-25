import { Guest } from '@/modules/dashboard/components/Guest/Guest'
import { GuestsContext } from '@/shared/context/GuestsContext'
import { useContext } from 'react'
import * as S from './MarqueStyles'
import Marquee from 'react-fast-marquee'

interface MarqueProps {
  isLoading?: boolean
}

export function Marque({ isLoading = true }: MarqueProps) {
  const { totalGuests, guests } = useContext(GuestsContext)

  return (
    <S.Container isGuestsLoading={isLoading}>
      <Marquee play={totalGuests >= 2} gradient={false} className="marquee">
        {guests?.map((guest, index) => {
          return <Guest key={index} name={guest.name} time={guest.time} />
        })}
      </Marquee>
    </S.Container>
  )
}
