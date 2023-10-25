import * as S from './DashboardHomeContentWithoutOfferStyles'
import Image from 'next/image'
import { CopyInput } from '@/shared/components/CopyInput/CopyInput'
import { Guest } from '@/modules/dashboard/components/Guest/Guest'
import { useContext } from 'react'
import { AuthContext } from '@/shared/context/AuthContext'
import { LuckyNumbersContext } from '@/shared/context/LuckyNumbersContext'
import { SkeletonAnimation } from '@/shared/shimmer/SkeletonAnimation'
import { GuestsContext } from '@/shared/context/GuestsContext'
import { Marque } from '@/shared/components/Marque/Marque'

export function DashboardHomeContentWithoutOffer() {
  const { user } = useContext(AuthContext)
  const { numbersTotalQuantity, isLoading: luckyNumbersLoading } =
    useContext(LuckyNumbersContext)
  const {
    totalGuests,
    isLoading: guestsLoading,
    guests
  } = useContext(GuestsContext)

  let baseUrl = ''

  if (typeof window !== 'undefined') {
    baseUrl = window.location.origin
  }
  const shareLinkUrl = `${baseUrl}/?r=${user?.code_reference as string}`

  return (
    <S.Container>
      <S.Content>
        <S.Banners>
          <S.BannersTop className="desktop">
            <div className="invite-guest-box">
              <h2>
                🎉 Ganhe números da sorte <br /> convidando amigos
              </h2>

              <CopyInput className="copy" value={shareLinkUrl} />
            </div>
          </S.BannersTop>
          {luckyNumbersLoading ? (
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

        <S.LastsGuestsList>
          <S.BannersTop className="mobile">
            <div className="invite-guest-box">
              <h2>
                🎉 Ganhe números da sorte <br /> convidando amigos
              </h2>

              <CopyInput className="copy" value={shareLinkUrl} />
            </div>
          </S.BannersTop>
          <S.LastGuestBox hasGuests={totalGuests > 0}>
            <div className="box-1">
              <h2>Últimos convidados</h2>

              <p>
                Convidados: <span>{totalGuests}</span>
              </p>
            </div>
          </S.LastGuestBox>

          <div className="guest-list-desktop">
            {guestsLoading ? (
              <>
                {Array(6)
                  .fill(0)
                  .map((e: number, i) => {
                    return (
                      <SkeletonAnimation
                        key={e + i}
                        className="guests-shimmer-desktop"
                      />
                    )
                  })}
              </>
            ) : (
              guests?.map((guest, index) => {
                return (
                  <Guest
                    hasBorder={index + 1 !== 5}
                    key={index}
                    name={guest.name}
                    time={guest.time}
                  />
                )
              })
            )}
          </div>

          <Marque isLoading={guestsLoading} />

          {totalGuests === 0 && !guestsLoading && (
            <span className="has-no-guest">
              Você não possui nenhum convidado ainda.
            </span>
          )}
        </S.LastsGuestsList>
      </S.Content>
    </S.Container>
  )
}
