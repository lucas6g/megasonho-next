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
import { requireSSRAuth } from '@/shared/utils/requireSSRAuth'
import { SkeletonAnimation } from '@/shared/shimmer/SkeletonAnimation'
import Router from 'next/router'
import swal from '@sweetalert/with-react'
import Lottie from 'react-lottie'
import * as animationData from '@/shared/animations/floating-mickey-head.json'

interface Plan {
  uuid: string
  numbersQuantity: number
  price: string
  pricePerNumber: string
}
const Plans: NextPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const [isShimmerLoading, setIsShimmerLoading] = useState(true)
  const [coumonPlans, setCoumonPlans] = useState<Plan[]>([])
  const [specialPlan, setSpecialPlan] = useState<Plan>({} as Plan)
  const [isOneMinuteLeft, setIsOneMinuteLeft100Plan] = useState(false)

  const [isTimerEnds, setIsTimerEnds] = useState(false)
  const [hasOffer, setHasOffer] = useState(false)

  async function handleSelectPlan(planId: string) {
    await api.post('/plans/purchase', {
      plan_uuid: planId
    })
  }

  function showAlert() {
    swal('Sua Oferta Especial expirou!', 'Aguarde a Proxima.', {
      icon: 'error',
      button: {
        text: 'Entendi'
      }
    })
  }

  function verifyTimerEnds() {
    if (localStorage.getItem('@MEGASONHO:reach-end_date') != null) {
      setIsTimerEnds(true)
      return true
    }
    return false
  }

  async function getOffer(): Promise<boolean> {
    try {
      await api.get('/offers/list')
      setHasOffer(true)
      return true
    } catch (error) {
      return false
    }
  }

  useEffect(() => {
    getOffer().then((response) => {
      const canSeeOffer = response
      const reachEndDate = verifyTimerEnds()
      if (!canSeeOffer || reachEndDate) {
        showAlert()
        Router.push('/dashboard')
      }
    })
  }, [])

  useEffect(() => {
    api
      .get<Array<{ uuid: string; quantity: number; price: number }>>(
        '/plans/list'
      )
      .then((response) => {
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
        setIsShimmerLoading(false)
      })
  }, [])

  if (!hasOffer || isTimerEnds) {
    return (
      <S.LoadingContainer>
        <Lottie options={defaultOptions} height={120} width={120} />
      </S.LoadingContainer>
    )
  }

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
          <HeaderPainel />
          <h1>Aqui será um título em destaque ⏱</h1>

          <p>
            Esta é a oportunidade de aumentar as suas chances de ganhar e vai
            acabar em:
          </p>

          <PromotionTimerMobile
            setIsOneMinute100PlanLeft={setIsOneMinuteLeft100Plan}
          />
          {isShimmerLoading ? (
            <SkeletonAnimation className="plan-button-100-shimmer" />
          ) : (
            <S.Plan100Button
              href={`/payment/${specialPlan.uuid}`}
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
          )}

          <S.NumbersPlansBox>
            {isShimmerLoading ? (
              <>
                <SkeletonAnimation className="plan-card-shimmer" />
                <SkeletonAnimation className="plan-card-shimmer" />
                <SkeletonAnimation className="plan-card-shimmer" />
                <SkeletonAnimation className="plan-card-shimmer" />
              </>
            ) : (
              coumonPlans.map((plan) => {
                return (
                  <PlanCard
                    href={`/payment/${plan.uuid}`}
                    key={plan.uuid}
                    numbersQuantity={plan.numbersQuantity}
                    price={plan.price}
                    pricePernumber={plan.pricePerNumber}
                    onClick={async () => {
                      handleSelectPlan(plan.uuid)
                    }}
                  />
                )
              })
            )}
          </S.NumbersPlansBox>
        </S.PlansContent>
        <GradientLine className="gradient-line" />
      </S.PlansContainer>
    </S.Container>
  )
}

export default Plans

export const getServerSideProps = requireSSRAuth(async () => {
  return {
    props: {}
  }
})
