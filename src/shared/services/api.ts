import { User } from '@/shared/context/AuthContext'
import axios from 'axios'
import { parseCookies } from 'nookies'

const { '@MEGASONHO:user': userString } = parseCookies()
const api = axios.create({
  baseURL: 'http://megasonho-env-1.eba-s723pugz.sa-east-1.elasticbeanstalk.com'
})

if (userString) {
  const user = JSON.parse(userString) as User
  api.defaults.headers.Authorization = `Bearer ${user.access_token}`
}

export default api
