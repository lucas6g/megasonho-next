import * as S from '@/modules/plans/styles/PlansStyles'
import Countdown, { zeroPad } from 'react-countdown'
import { GradientLine } from '@/shared/components/GradientLine/GradientLine'
import { useEffect, useState } from 'react'
import { PlanCard } from '@/modules/plans/components/PlanCard/PlanCard'
import api from '@/shared/services/api'
import { priceFormater } from '@/shared/utils/priceFormater'
import { NextPage } from 'next'
import Image from 'next/image'
import { HeaderPainel } from '@/shared/components/HeaderPainel/HeaderPainel'
import { HeaderMobile } from '@/shared/components/HeaderMobile/HeaderMobile'

interface Plan {
  uuid: string
  numbersQuantity: number
  price: string
  pricePerNumber: string
}
const Plans: NextPage = () => {
  const [data, setData] = useState(
    { date: Date.now(), delay: 1000 * 60 * 10 } // 10 minutes
  )

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [coumonPlans, setCoumonPlans] = useState<Plan[]>([])
  const [specialPlan, setSpecialPlan] = useState<Plan>({} as Plan)
  const [isOneMinuteLeft, setIsOneMinuteLeft] = useState(false)

  const wantedDelay = 1000 * 60 * 10 // 10 minutes
  async function handleSelectPlan(planId: string) {
    await api.post('/plans/purchase', {
      plan_uuid: planId
    })
  }

  useEffect(() => {
    api
      .get<Array<{ uuid: string; quantity: number; price: number }>>('/plans')
      .then((response) => {
        console.log(response.data)
        const plans = response.data.map((plan) => {
          return {
            uuid: plan.uuid,
            numbersQuantity: plan.quantity,
            price: priceFormater(plan.price),
            pricePerNumber: priceFormater(
              Math.trunc((plan.price / plan.quantity) * 100) / 100
            )
          }
        })

        const coumonPlans = plans.filter((plan) => {
          return plan.numbersQuantity < 100
        })

        const specialPlan = plans.find((plan) => {
          return plan.numbersQuantity === 100
        })
        if (specialPlan) {
          setSpecialPlan(specialPlan)
        }
        setCoumonPlans(coumonPlans)
      })
  }, [])

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
    <S.Container>
      <S.ImageBackground>
        <Image
          className="back-image"
          src={'/images/plans-back.jpg'}
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
                }

                return (
                  <S.TimerDesktop isOneMinuteLeft={isOneMinuteLeft}>
                    <span className={minutes <= 0 ? 'one-minute' : 'timer'}>
                      {zeroPad(minutes)}:{zeroPad(seconds)}
                    </span>
                    <S.TimeLeftMessageBoxDesktop>
                      <Image
                        src={'/icons/blue-clock.svg'}
                        alt="Icone de um Relogion"
                        width={16}
                        height={16}
                      />

                      <span>Resta somente {minutes} minutos, aproveite</span>
                    </S.TimeLeftMessageBoxDesktop>
                  </S.TimerDesktop>
                )
              }}
            />
          </S.TimeBoxDesktop>
        </div>
      </S.ImageBackground>

      <S.PlansContainer
        style={{
          backgroundImage: `url(${'/images/plans-back.jpg'})`
        }}
      >
        <HeaderMobile />
        <S.PlansContent>
          <HeaderPainel nameInitialLetter="L" />
          <h1>Aqui será um título em destaque ⏱</h1>

          <p>
            Esta é a oportunidade de aumentar as suas chances de ganhar e vai
            acabar em:
          </p>

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
                }

                return (
                  <S.Timer isOneMinuteLeft={isOneMinuteLeft}>
                    <span className={minutes <= 0 ? 'one-minute' : 'timer'}>
                      {zeroPad(minutes)}:{zeroPad(seconds)}
                    </span>
                    {isOneMinuteLeft && (
                      <S.OneMinuteLeftMessage>
                        Não perca essa oferta especial e única oportunidade de
                        comprar mais número da sorte.
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

          <S.Plan100Button
            href="/payment/1"
            isOneMinuteLeft={isOneMinuteLeft}
            onClick={async () => {
              handleSelectPlan(specialPlan.uuid)
            }}
          >
            <Image
              src={'/images/100-numbers-plan.svg'}
              alt="Imagem de fundo"
              width={448}
              height={146}
            />
          </S.Plan100Button>

          <S.NumbersPlansBox>
            {/* {coumonPlans.map((plan) => {
              return (
                <PlanCard
                  disabled={isButtonDisabled}
                  key={plan.uuid}
                  numbersQuantity={plan.numbersQuantity}
                  price={plan.price}
                  pricePernumber={plan.pricePerNumber}
                  onClick={async () => {
                    handleSelectPlan(plan.uuid)
                  }}
                />
              )
            })} */}

            <PlanCard
              href="/payment/2"
              numbersQuantity={50}
              price={'R$ 149,90'}
              pricePernumber={'R$ 2,99'}
            />
            <PlanCard
              href="/payment/3"
              numbersQuantity={25}
              price={'R$ 99,90'}
              pricePernumber={'R$ 3,99'}
            />
            <PlanCard
              href="/payment/4"
              numbersQuantity={10}
              price={'R$ 49,90'}
              pricePernumber={'R$ 4,99'}
            />
            <PlanCard
              href="/payment/5"
              numbersQuantity={3}
              price={'R$ 24,90'}
              pricePernumber={'R$ 8,30'}
            />
          </S.NumbersPlansBox>
        </S.PlansContent>
        <GradientLine />
      </S.PlansContainer>
    </S.Container>
  )
}

export default Plans
