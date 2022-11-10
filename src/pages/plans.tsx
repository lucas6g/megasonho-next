import * as S from '@/modules/plans/styles/PlansStyles'
import { GradientLine } from '@/shared/components/GradientLine/GradientLine'
import { useEffect, useState } from 'react'
import { PlanCard } from '@/modules/plans/components/PlanCard/PlanCard'
import api from '@/shared/services/api'
import { priceFormater } from '@/shared/utils/priceFormater'
import { NextPage } from 'next'
import Image from 'next/image'
import { HeaderPainel } from '@/shared/components/HeaderPainel/HeaderPainel'
import { HeaderMobile } from '@/shared/components/HeaderMobile/HeaderMobile'
import { PromotionTimerDesktop } from '@/modules/plans/components/PromotionTimerDesktop/PromotionTimerDesktop'
import { PromotionTimerMobile } from '@/modules/plans/components/PromotionTimerMobile/PromotionTimerMobile'

interface Plan {
  uuid: string
  numbersQuantity: number
  price: string
  pricePerNumber: string
}
const Plans: NextPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [coumonPlans, setCoumonPlans] = useState<Plan[]>([])
  const [specialPlan, setSpecialPlan] = useState<Plan>({} as Plan)
  const [isOneMinuteLeft, setIsOneMinuteLeft100Plan] = useState(false)

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
          <PromotionTimerDesktop />
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

          <PromotionTimerMobile
            setIsOneMinute100PlanLeft={setIsOneMinuteLeft100Plan}
          />

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
