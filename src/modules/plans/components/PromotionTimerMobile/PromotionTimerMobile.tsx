import { useEffect, useState } from 'react'
import * as S from './PromotionTimerMobileStyles'
import Countdown, { zeroPad } from 'react-countdown'
import Image from 'next/image'

interface PromotionTimerMobileProps {
  setIsOneMinute100PlanLeft: (isOneMinuteLeft: boolean) => void
}

export function PromotionTimerMobile({
  setIsOneMinute100PlanLeft
}: PromotionTimerMobileProps) {
  const [isOneMinuteLeft, setIsOneMinuteLeft] = useState(false)
  const [data, setData] = useState(
    { date: Date.now(), delay: 1000 * 60 * 10 } // 10 minutes
  )
  const wantedDelay = 1000 * 60 * 10 // 10 minutes

  useEffect(() => {
    const savedDate = localStorage.getItem('end_date')
    if (savedDate != null && !isNaN(Number(savedDate))) {
      const currentTime = Date.now()
      const delta = parseInt(savedDate, 10) - currentTime

      // Do you reach the end?
      if (delta > wantedDelay) {
        // Yes we clear uour saved end date
        if (String(localStorage.getItem('end_date')).length > 0)
          localStorage.removeItem('end_date')
      } else {
        // No update the end date with the current date
        setData({ date: currentTime, delay: delta })
      }
    }
  }, [])

  return (
    <S.TimeBox>
      <S.LimitedOfferBox>
        <Image
          src={'/icons/white-clover.svg'}
          alt="Icone de um Trevo Branco"
          width={16}
          height={16}
        />

        <span>Oferta por tempo limitado</span>
      </S.LimitedOfferBox>

      <Countdown
        date={data.date + data.delay}
        onStart={(delta) => {
          // Save the end date
          if (localStorage.getItem('end_date') == null) {
            localStorage.setItem(
              'end_date',
              JSON.stringify(data.date + data.delay)
            )
          }
        }}
        onComplete={() => {
          if (localStorage.getItem('end_date') != null) {
            localStorage.removeItem('end_date')
          }
        }}
        renderer={({ minutes, seconds }) => {
          if (minutes <= 0) {
            setIsOneMinuteLeft(true)
            setIsOneMinute100PlanLeft(true)
          }

          return (
            <S.Timer isOneMinuteLeft={isOneMinuteLeft}>
              <span className={minutes <= 0 ? 'one-minute' : 'timer'}>
                {zeroPad(minutes)}:{zeroPad(seconds)}
              </span>
              {isOneMinuteLeft && (
                <S.OneMinuteLeftMessage>
                  Não perca essa oferta especial e única oportunidade de comprar
                  mais número da sorte.
                </S.OneMinuteLeftMessage>
              )}
              <S.TimeLeftMessageBox>
                <Image
                  src={'/icons/blue-clock.svg'}
                  alt="Icone de um Relogion"
                  width={16}
                  height={16}
                />

                <span>Resta somente {minutes} minutos, aproveite</span>
              </S.TimeLeftMessageBox>
            </S.Timer>
          )
        }}
      />
    </S.TimeBox>
  )
}
