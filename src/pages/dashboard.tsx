import { NextPage } from 'next'
import { useContext } from 'react'
import { AuthContext } from '@/shared/context/AuthContext'
import { requireSSRAuth } from '@/shared/utils/requireSSRAuth'

const Dashboard: NextPage = () => {
  const { signOut } = useContext(AuthContext)
  return (
    <>
      <h1>dashboard</h1>
      <button onClick={signOut}>Sair</button>
    </>
  )
}

export default Dashboard

export const getServerSideProps = requireSSRAuth(async () => {
  return {
    props: {}
  }
})
