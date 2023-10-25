import * as S from './DashboardSubHeaderStyles'
import Image from 'next/image'
import { useContext } from 'react'
import { AuthContext } from '@/shared/context/AuthContext'
import { LuckyNumbersContext } from '@/shared/context/LuckyNumbersContext'
import { Avatar } from '@/shared/components/Avatar/Avatar'
import { SkeletonAnimation } from '@/shared/shimmer/SkeletonAnimation'
import { GuestsContext } from '@/shared/context/GuestsContext'

export function DashboardSubHeader() {
  const { user } = useContext(AuthContext)
  const { numbersTotalQuantity, isLoading } = useContext(LuckyNumbersContext)
  const { totalGuests, isLoading: guestLoading } = useContext(GuestsContext)

  return (
    <S.SubHeader>
      <S.SubheaderContent>
        <S.UserWelcomeBox>
          {!user ? (
            <SkeletonAnimation isDark className="shimmer-avatar" />
          ) : (
            <Avatar className="avatar" allowEdit={false} imgUrl={''} />
          )}
          <div>
            <span>É um prazer ter você com a gente</span>
            {!user ? (
              <SkeletonAnimation isDark className="shimmer-user-name" />
            ) : (
              <strong>
                {user?.name.split(' ')[0]} {user?.name.split(' ')[1]}
              </strong>
            )}
          </div>
        </S.UserWelcomeBox>

        <S.LuckyNumberAndGuestsInfo>
          <S.InfoRow>
            <S.InfoBlock>
              <span className="label">Números da sorte:</span>
              {isLoading ? (
                <SkeletonAnimation
                  isDark
                  className="shimmer-lucky-numbers-quantity"
                />
              ) : (
                <div>
                  <p className="text">
                    <span className="quantity">{numbersTotalQuantity}</span>{' '}
                    Números
                  </p>
                  <Image
                    className="arrow"
                    src={'/icons/arrow-rigth-opacity.svg'}
                    alt="Icone de uma Seta para direita"
                    width={12}
                    height={12}
                  />
                </div>
              )}
            </S.InfoBlock>

            <S.Divider />
            <S.InfoBlock>
              <span className="label">Convidados:</span>
              {guestLoading ? (
                <SkeletonAnimation isDark className="shimmer-guests-quantity" />
              ) : (
                <div>
                  <p className="text">
                    <span className="quantity">{totalGuests}</span> Convidados
                  </p>
                  <Image
                    src={'/icons/guests.svg'}
                    alt="Icone de adicionar amigos"
                    width={20}
                    height={20}
                    className="guests"
                  />
                </div>
              )}
            </S.InfoBlock>
          </S.InfoRow>
        </S.LuckyNumberAndGuestsInfo>
      </S.SubheaderContent>
    </S.SubHeader>
  )
}
