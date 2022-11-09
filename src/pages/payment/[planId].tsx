import * as S from '@/modules/payment/styles/PaymentStyles'
import Image from 'next/image'
import { ImageBackground } from '@/shared/components/ImageBackground/ImageBackground'
import { Button } from '@/shared/components/Button/Button'
import { GradientLine } from '@/shared/components/GradientLine/GradientLine'
import { NextPage } from 'next'
import { HeaderPainel } from '@/shared/components/HeaderPainel/HeaderPainel'
import { useRouter } from 'next/router'
import { HeaderMobile } from '@/shared/components/HeaderMobile/HeaderMobile'
import useCopy from 'use-copy'
import { useEffect, useState } from 'react'
import {
  PlanPaymentDetail,
  plansPaymentsDetails
} from '@/modules/payment/data/plansPaymentsDetails'

const Payment: NextPage = () => {
  const [planPaymentDetails, setPlanPaymentDetails] = useState<
    PlanPaymentDetail | undefined
  >(undefined)
  const [copied, copy, setCopied] = useCopy(
    planPaymentDetails?.planPixKey as string
  )
  const router = useRouter()
  const { planId } = router.query

  useEffect(() => {
    const planPaymentDetail = plansPaymentsDetails.find(
      (planPaymentDetails) => {
        return planPaymentDetails.planId === planId
      }
    )
    setPlanPaymentDetails(planPaymentDetail)
  }, [planId])

  function handleCopyToClipBoard() {
    copy()

    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <S.Container>
      <ImageBackground imgUrl={'/images/payment-back.jpg'} />

      <S.PaymentContainer
        style={{
          backgroundImage: `url(/images/payment-back-mobile.jpg)`
        }}
      >
        <HeaderMobile />

        <S.PaymentContent>
          <HeaderPainel nameInitialLetter="L" />
          <h1>
            Aqui será um título em <span>destaque</span>🥳
          </h1>

          <p>
            Aqui será uma descrição para completar o título e falar o número da
            sorte para o usuário:
          </p>

          <S.PixQrCodeBox>
            <Image
              src={planPaymentDetails?.planQrCodeImgUrl as string}
              alt="Imagem qr code chave Pix"
              width={164}
              height={164}
            />
          </S.PixQrCodeBox>

          <S.PixKeyBox>
            <Image
              src={'/icons/pix-blue.svg'}
              alt="Icone do Pix"
              className="pix-image"
              width={24}
              height={24}
            />
            <input
              readOnly
              type="text"
              value={planPaymentDetails?.planPixKey as string}
            />

            <S.CopyButton onClick={handleCopyToClipBoard}>
              {copied ? (
                <span>Copiado</span>
              ) : (
                <Image
                  src={'/icons/copy-blue.svg'}
                  alt="Icone de Copiar Link"
                  width={24}
                  height={24}
                />
              )}
            </S.CopyButton>
          </S.PixKeyBox>

          <span className="text">
            Aqui será uma descrição para completar alguma informação sobre o
            pagamento caso for necessário:
          </span>

          <Button
            onClick={() => {
              router.push('/payment-confirmation')
            }}
            className="continue"
          >
            <span>Realizei o pagamento</span>
          </Button>
        </S.PaymentContent>
        <GradientLine />
      </S.PaymentContainer>
    </S.Container>
  )
}
export default Payment
