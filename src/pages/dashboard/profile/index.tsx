import { NextPage } from 'next'
import * as S from '@/modules/profile/styles/ProfileStyles'
import { DashBoardHeader } from '@/modules/dashboard/components/DashBoardHeader/DashBoardHeader'
import { DashboardSubHeader } from '@/modules/dashboard/components/DashboardSubHeader/DashboardSubHeader'
import { SelectedOptionContainer } from '@/modules/profile/components/SelectedOptionContainer/SelectedOptionContainer'
import { requireSSRAuth } from '@/shared/utils/requireSSRAuth'

const Profile: NextPage = () => {
  return (
    <S.Container>
      <DashBoardHeader />
      <DashboardSubHeader />

      <SelectedOptionContainer
        canOpenOnMobile={false}
        isClean
      ></SelectedOptionContainer>
    </S.Container>
  )
}

export default Profile

export const getServerSideProps = requireSSRAuth(async () => {
  return {
    props: {}
  }
}, false)
