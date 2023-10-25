import { createContext, ReactNode, useEffect, useState } from 'react'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import { differenceInSeconds } from 'date-fns'
import decode from 'jwt-decode'
import Router from 'next/router'
import api from '@/shared/services/api'

export interface User {
  uuid: string
  name: string
  phone?: string
  email: string
  access_token: string
  avatar_url?: string
  document?: string
  code_reference: string
  verified_phone?: boolean
  verified_email?: boolean
}

interface RegisterUserInput {
  name: string
  phone: string
  email: string
  password: string
  r?: string | null
}

interface LoginInput {
  phone: string
  password: string
}

interface AuthContextData {
  login: (loginInput: LoginInput) => Promise<void>
  registerUser: (registerInput: RegisterUserInput) => Promise<void>
  signOut: () => void
  updateUser: () => Promise<void>
  user: User | null
  isOnClient: boolean
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [isOnClient, setIsOnClient] = useState(false)

  useEffect(() => {
    setIsOnClient(true)
    const { '@MEGASONHO:user': stringifiedUser } = parseCookies()
    if (stringifiedUser) {
      setUser(JSON.parse(stringifiedUser))
    }
  }, [])

  function signOut() {
    destroyCookie(undefined, '@MEGASONHO:user')
    setUser(null)
    Router.push('/')
  }

  async function login({ phone, password }: LoginInput): Promise<void> {
    const response = await api.post('/users/login', {
      phone,
      password
    })
    const { access_token } = response.data
    api.defaults.headers.Authorization = `Bearer ${access_token as string}`
    const currentUserData = await api.get('/users/current-user')
    currentUserData.data.access_token = access_token
    setCookie(
      undefined,
      '@MEGASONHO:user',
      JSON.stringify({
        ...currentUserData.data
      }),
      {
        maxAge: 60 * 60 * 2, // 2 hoours
        path: '/',
        sameSite: 'Lax'
      }
    )

    setUser({
      ...currentUserData.data
    })
  }

  async function registerUser(
    registerUserInput: RegisterUserInput
  ): Promise<void> {
    const response = await api.post('/users/create', registerUserInput, {
      params: {
        r: registerUserInput.r
      }
    })

    setCookie(undefined, '@MEGASONHO:user', JSON.stringify(response.data), {
      maxAge: 60 * 10, // 10 minutes
      path: '/',
      sameSite: 'Lax'
    })
    setCookie(undefined, '@MEGASONHO:is-register-flow', JSON.stringify(true), {
      maxAge: 60 * 10, // 10 minutes
      path: '/',
      sameSite: 'Lax'
    })
    api.defaults.headers.Authorization = `Bearer ${
      response.data.access_token as string
    }`

    setUser({ ...response.data })
  }

  async function updateUser() {
    const { '@MEGASONHO:user': stringifiedUser } = parseCookies()
    if (!stringifiedUser) {
      return
    }
    const user = JSON.parse(stringifiedUser) as User
    const accessToken = user.access_token
    const currentUserData = await api.get('/users/current-user')

    currentUserData.data.access_token = accessToken
    const decoded: any = decode(user.access_token)
    setCookie(
      undefined,
      '@MEGASONHO:user',
      JSON.stringify({
        ...currentUserData.data
      }),
      {
        maxAge: differenceInSeconds(decoded.exp * 1000, Date.now()),
        path: '/',
        sameSite: 'Lax'
      }
    )

    setUser({
      ...currentUserData.data
    })
  }

  return (
    <AuthContext.Provider
      value={{ registerUser, login, signOut, user, updateUser, isOnClient }}
    >
      {children}
    </AuthContext.Provider>
  )
}
