import { User } from '@/shared/context/AuthContext'
import axios from 'axios'
import { parseCookies, destroyCookie } from 'nookies'
import Router from 'next/router'

const { '@MEGASONHO:user': userString } = parseCookies()
const api = axios.create({
  baseURL: 'https://dev.megasonhodisney.com.br/'
})

export const isAuthenticated = true

api.interceptors.response.use(
  response => {
    return response
  },
  // eslint-disable-next-line @typescript-eslint/promise-function-async
  error => {
    const message = error.response?.data.message
    const statusCOde = error.response?.status
    const tokenEpired =
      statusCOde === 401 && message === 'Erro: Signature has expired'
    const userDeleted =
      statusCOde === 404 && message === 'Usuário não encontrado'
    if (tokenEpired || userDeleted) {
      destroyCookie(undefined, '@MEGASONHO:user')
      Router.push('/login')
    }

    return Promise.reject(error)
  }
)

if (userString) {
  const user = JSON.parse(userString) as User
  api.defaults.headers.Authorization = `Bearer ${user.access_token}`
}

export default api
