import { useContext, useEffect, useState } from 'react'
import * as S from './LimitedOfferBannerTimerStyles'
import Countdown, { zeroPad } from 'react-countdown'
import Image from 'next/image'
import { OfferContext } from '@/shared/context/OfferContext'
import { AuthContext } from '@/shared/context/AuthContext'
export function LimitedOfferBannerTimer() {
  const [isOneMinuteLeft, setIsOneMinuteLeft] = useState(false)

  const { user, isOnClient } = useContext(AuthContext)

  const { removeOffer } = useContext(OfferContext)
  const [data, setData] = useState(
    { date: Date.now(), delay: 1000 * 60 * 10 } // 10 minutes
  )
  const wantedDelay = 1000 * 60 * 10 // 10 minutes
  const limitedOfferLastDateKey = '@MEGASONHO:limited-offer-banner-last-date'

  useEffect(() => {
    if (user?.verified_phone && user?.document) {
      const savedDate = localStorage.getItem(limitedOfferLastDateKey)
      if (savedDate != null && !isNaN(Number(savedDate))) {
        const currentTime = Date.now()
        const delta = parseInt(savedDate, 10) - currentTime

        // Do you reach the end?
        if (delta > wantedDelay) {
          // Yes we clear uour saved end date
          if (String(localStorage.getItem(limitedOfferLastDateKey)).length > 0)
            localStorage.removeItem(limitedOfferLastDateKey)
        } else {
          // No update the end date with the current date
          setData({ date: currentTime, delay: delta })
        }
      }
    }
  }, [user?.verified_phone, user?.document])

  return (
    <Countdown
      date={data.date + data.delay}
      onStart={(delta) => {
        // Save the end date
        if ((!user?.verified_phone || !user.document) && isOnClient) {
          return
        }

        if (localStorage.getItem(limitedOfferLastDateKey) == null) {
          localStorage.setItem(
            limitedOfferLastDateKey,
            JSON.stringify(data.date + data.delay)
          )
        }
      }}
      onComplete={() => {
        if (localStorage.getItem(limitedOfferLastDateKey) != null) {
          localStorage.removeItem(limitedOfferLastDateKey)
        }
        removeOffer()
      }}
      renderer={({ minutes, seconds }) => {
        if (minutes <= 0) {
          setIsOneMinuteLeft(true)
        }

        return (
          <S.Timer isOneMinuteLeft={isOneMinuteLeft}>
            {user?.verified_phone && user.document ? (
              <span className={minutes <= 0 ? 'one-minute' : 'timer'}>
                {zeroPad(minutes)}:{zeroPad(seconds)}
              </span>
            ) : (
              <span className={minutes <= 0 ? 'one-minute' : 'timer'}>
                10:00
              </span>
            )}

            <Image
              src={'/icons/white-clock.svg'}
              alt="Icone de um Relogio"
              width={21}
              height={21}
            />
          </S.Timer>
        )
      }}
    />
  )
}
