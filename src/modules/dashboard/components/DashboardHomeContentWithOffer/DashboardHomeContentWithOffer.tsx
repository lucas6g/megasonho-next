import * as S from './DashboardHomeContentWithOfferStyles'
import Image from 'next/image'
import { LimitedOfferBanner } from '@/modules/dashboard/components/LimitedOfferBanner/LimitedOfferBanner'
import { CopyInput } from '@/shared/components/CopyInput/CopyInput'
import { Guest } from '@/modules/dashboard/components/Guest/Guest'
import { useContext } from 'react'
import { AuthContext } from '@/shared/context/AuthContext'
import { LuckyNumbersContext } from '@/shared/context/LuckyNumbersContext'
import { SkeletonAnimation } from '@/shared/shimmer/SkeletonAnimation'
import { GuestsContext } from '@/shared/context/GuestsContext'

export function DashboardHomeContentWithOffer() {
  const { user } = useContext(AuthContext)
  const { isLoading, numbersTotalQuantity } = useContext(LuckyNumbersContext)
  const {
    totalGuests,
    guests,
    isLoading: guestsLoading
  } = useContext(GuestsContext)
  let baseUrl = ''

  if (typeof window !== 'undefined') {
    baseUrl = window.location.origin
  }
  const shareLinkUrl = `${baseUrl}/?r=${user?.code_reference as string}`

  return (
    <S.Content>
      <S.ContentHeader>
        <div className="invite-guest-box">
          <h2>
            🎉 Ganhe números da sorte <br /> convidando amigos
          </h2>

          <CopyInput value={shareLinkUrl} />
        </div>
        <S.LastGuestBox>
          <div className="box-1">
            <h2>Último convidado</h2>

            <p>
              Convidados: <span>{totalGuests}</span>
            </p>
          </div>

          {guestsLoading && (
            <>
              {Array(1)
                .fill(0)
                .map((e: number, i) => {
                  return (
                    <SkeletonAnimation
                      key={e + i}
                      className="last-guest-shimmer"
                    />
                  )
                })}
            </>
          )}

          {guests.length > 0 && (
            <Guest
              name={guests.length > 0 ? guests[0].name : ''}
              time={guests.length > 0 ? guests[0].time : ''}
              hasBorder={false}
              hasPadding={false}
            />
          )}

          {totalGuests === 0 && !guestsLoading && (
            <span className="has-no-guest">
              Você não possui nenhum convidado ainda.
            </span>
          )}
        </S.LastGuestBox>
      </S.ContentHeader>

      <LimitedOfferBanner />

      <S.Banners>
        {isLoading ? (
          <SkeletonAnimation className="shimmer-banner" />
        ) : (
          <S.Banner href={'/dashboard/my-numbers'}>
            <img
              className="banner-img"
              src={'/images/banners/banner-1.jpg'}
              alt="Banner Oferta MEGASONHO"
              height={171}
            />
            <div>
              <span>Seus números da sorte</span> <br />
              <strong className="numbers">
                {numbersTotalQuantity} Números
              </strong>
              <span className="more">
                Ganhe mais
                <Image
                  className="arrow"
                  src={'/icons/arrow-rigth-opacity.svg'}
                  alt="Icone de uma Seta para direita"
                  width={12}
                  height={12}
                />
              </span>
            </div>
          </S.Banner>
        )}

        <S.Banner href={'/dashboard'}>
          <img
            className="banner-img"
            src={'/images/banners/banner-2.jpg'}
            alt="Banner Oferta MEGASONHO"
            height={171}
          />
          <div>
            <span>
              Guia de Viagem <br /> Walt Disney
            </span>

            <span className="more">
              Saiba mais
              <Image
                className="arrow"
                src={'/icons/arrow-rigth-opacity.svg'}
                alt="Icone de uma Seta para direita"
                width={12}
                height={12}
              />
            </span>
          </div>
        </S.Banner>
      </S.Banners>
    </S.Content>
  )
}
