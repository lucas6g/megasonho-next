import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { parseCookies } from 'nookies'

export function requireSSRAuth (fn: GetServerSideProps) {
  return async (ctx: GetServerSidePropsContext) => {
    const cookies = parseCookies(ctx)
    const user = cookies['@MEGASONHO:user']

    if (!user) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      }
    }

    return await fn(ctx)
  }
}
