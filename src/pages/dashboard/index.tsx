import { NextPage } from 'next'
import * as S from '@/modules/dashboard/styles/DashBoardStyles'
import { DashBoardHeader } from '@/modules/dashboard/components/DashBoardHeader/DashBoardHeader'
import { DashboardSubHeader } from '@/modules/dashboard/components/DashboardSubHeader/DashboardSubHeader'
import { DashboardHomeContentWithoutOffer } from '@/modules/dashboard/components/DashboardHomeContentWithoutOffer/DashboardHomeContentWithoutOffer'
import { DashboardHomeContentWithOffer } from '@/modules/dashboard/components/DashboardHomeContentWithOffer/DashboardHomeContentWithOffer'
import { useContext } from 'react'
import { OfferContext } from '@/shared/context/OfferContext'
import { PopUp } from '@/modules/dashboard/components/PopUp/PopUp'
import { AuthContext } from '@/shared/context/AuthContext'
import { requireSSRAuth } from '@/shared/utils/requireSSRAuth'

const Dashboard: NextPage = () => {
  const { hasOffer } = useContext(OfferContext)
  const { user, isOnClient } = useContext(AuthContext)

  return (
    <S.Container
      hasValidationPending={
        Boolean(!user?.verified_phone) || Boolean(!user?.document)
      }
    >
      <DashBoardHeader />
      <DashboardSubHeader />

      {hasOffer ? (
        <DashboardHomeContentWithOffer />
      ) : (
        <DashboardHomeContentWithoutOffer />
      )}

      {(!user?.verified_phone || !user?.document) && isOnClient ? (
        <S.DashBlourEffect>
          <PopUp
            title="Finalize seu cadastro e ganhe mais números!"
            description=", para concorrer as nossas viagens, você precisa finalizar o seu cadastro em nossas plataforma."
            buttonText="Finalizar agora"
          />
        </S.DashBlourEffect>
      ) : null}
    </S.Container>
  )
}

export default Dashboard

export const getServerSideProps = requireSSRAuth(async () => {
  return {
    props: {}
  }
}, false)
