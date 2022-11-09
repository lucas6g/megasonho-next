import * as S from '@/modules/payment-confirmation/styles/PaymentConfirmationStyles'
import Image from 'next/image'
import { ImageBackground } from '@/shared/components/ImageBackground/ImageBackground'
import { GradientLine } from '@/shared/components/GradientLine/GradientLine'
import { NextPage } from 'next'
import { HeaderPainel } from '@/shared/components/HeaderPainel/HeaderPainel'
import { HeaderMobile } from '@/shared/components/HeaderMobile/HeaderMobile'

const PaymentConfirmation: NextPage = () => {
  return (
    <S.Container>
      <ImageBackground imgUrl={'/images/payment-confirmation-back.jpg'} />

      <S.PaymentConfirmationContainer
        style={{
          backgroundImage: `url(/images/payment-confirmation-back.jpg)`
        }}
      >
        <HeaderMobile />

        <S.PaymentConfirmationContent>
          <HeaderPainel nameInitialLetter="L" />
          <h1>Aqui será um título em destaque ✅</h1>

          <p>
            Aqui será uma descrição para completar o título e falar o número da
            sorte para o usuário:
          </p>

          <S.TextIconBox>
            <Image
              src={'/icons/mickey-green-head.svg'}
              height={24}
              width={24}
              alt="Icone Cabeça do Mickey Mouse"
            />
            <span>
              Aqui será uma descrição para completar alguma informação sobre o
              pagamento caso for necessário:
            </span>
          </S.TextIconBox>

          <S.TextIconBox>
            <Image
              src={'/icons/mickey-green-head.svg'}
              height={24}
              width={24}
              alt="Icone Cabeça do Mickey Mouse"
            />
            <span>
              Aqui será uma descrição para completar alguma informação sobre o
              pagamento caso for necessário:
            </span>
          </S.TextIconBox>

          <S.TextIconBox>
            <Image
              src={'/icons/mickey-green-head.svg'}
              height={24}
              width={24}
              alt="Icone Cabeça do Mickey Mouse"
            />
            <span>
              Aqui será uma descrição para completar alguma informação sobre o
              pagamento caso for necessário:
            </span>
          </S.TextIconBox>

          <S.WhatsContinueButton
            href="https://api.whatsapp.com/send?1=pt_br&phone=5511973796061&text=Ola%20MEGASONHO!"
            target={'_blank'}
            className="whats-button"
          >
            <Image
              src={'/icons/whatsapp.svg'}
              height={32}
              width={32}
              alt="Icone do Whatsapp"
            />
            <span> Tenho uma dúvida</span>
          </S.WhatsContinueButton>
        </S.PaymentConfirmationContent>
        <GradientLine />
      </S.PaymentConfirmationContainer>
    </S.Container>
  )
}
export default PaymentConfirmation
