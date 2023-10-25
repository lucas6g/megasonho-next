import { User } from '@/shared/context/AuthContext'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { parseCookies } from 'nookies'

export function requireSSRAuth (
  fn: GetServerSideProps,
  verifyValidation: boolean = true
): GetServerSideProps {
  return async (ctx: GetServerSidePropsContext) => {
    const cookies = parseCookies(ctx)
    const hasUser = cookies['@MEGASONHO:user']

    if (!hasUser) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      }
    }

    const user = JSON.parse(hasUser) as User
    const isRegisterFlow = cookies['@MEGASONHO:is-register-flow']

    if (
      (!user.verified_phone || !user.document) &&
      verifyValidation &&
      !isRegisterFlow
    ) {
      return {
        redirect: {
          destination: '/dashboard',
          permanent: false
        }
      }
    }

    return await fn(ctx)
  }
}
