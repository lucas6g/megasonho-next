import { useEffect, useState } from 'react'
import * as S from './PromotionTimerDesktopStyles'
import Countdown, { zeroPad } from 'react-countdown'
import Image from 'next/image'
import Router from 'next/router'
export function PromotionTimerDesktop() {
  const [isOneMinuteLeft, setIsOneMinuteLeft] = useState(false)
  const [data, setData] = useState(
    { date: Date.now(), delay: 1000 * 60 * 10 } // 10 minutes
  )
  const wantedDelay = 1000 * 60 * 10 // 10 minutes

  useEffect(() => {
    const savedDate = localStorage.getItem('@MEGASONHO:end_date')
    if (savedDate != null && !isNaN(Number(savedDate))) {
      const currentTime = Date.now()
      const delta = parseInt(savedDate, 10) - currentTime

      // Do you reach the end?
      if (delta > wantedDelay) {
        // Yes we clear uour saved end date
        if (String(localStorage.getItem('@MEGASONHO:end_date')).length > 0)
          localStorage.removeItem('@MEGASONHO:end_date')
      } else {
        // No update the end date with the current date
        setData({ date: currentTime, delay: delta })
      }
    }
  }, [])

  return (
    <S.TimeBoxDesktop>
      <S.LimitedOfferBoxDesktop>
        <Image
          src={'/icons/white-clover.svg'}
          alt="Icone de um Trevo Branco"
          width={16}
          height={16}
        />

        <span>Oferta por tempo limitado</span>
      </S.LimitedOfferBoxDesktop>

      <Countdown
        date={data.date + data.delay}
        onStart={(delta) => {
          // Save the end date
          if (localStorage.getItem('@MEGASONHO:end_date') == null) {
            localStorage.setItem(
              '@MEGASONHO:end_date',
              JSON.stringify(data.date + data.delay)
            )
          }
        }}
        onComplete={() => {
          if (localStorage.getItem('@MEGASONHO:end_date') != null) {
            localStorage.removeItem('@MEGASONHO:end_date')
          }
          localStorage.setItem('@MEGASONHO:reach-end_date', String(true))
          Router.push('/dashboard')
        }}
        renderer={({ minutes, seconds }) => {
          if (minutes <= 0) {
            setIsOneMinuteLeft(true)
          }

          return (
            <S.TimerDesktop isOneMinuteLeft={isOneMinuteLeft}>
              <span className={minutes <= 0 ? 'one-minute' : 'timer'}>
                {zeroPad(minutes)}:{zeroPad(seconds)}
              </span>
              <S.TimeLeftMessageBoxDesktop isOneMinuteLeft={isOneMinuteLeft}>
                <Image
                  src={'/icons/blue-clock.svg'}
                  alt="Icone de um Relogio"
                  width={16}
                  height={16}
                />

                <span className={''}>
                  Resta somente {minutes} minutos, aproveite
                </span>
              </S.TimeLeftMessageBoxDesktop>
            </S.TimerDesktop>
          )
        }}
      />
    </S.TimeBoxDesktop>
  )
}
