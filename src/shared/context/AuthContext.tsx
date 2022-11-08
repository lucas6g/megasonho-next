import { createContext, ReactNode, useEffect, useState } from 'react'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import Router from 'next/router'
import api from '@/shared/services/api'

interface User {
  uuid: string
  name: string
  phone?: string
  email: string
  access_token: string
  document?: string
  is_active?: boolean
  password?: string
}

interface RegisterUserInput {
  name: string
  phone: string
  email: string
  password: string
}

interface LoginInput {
  phone: string
  password: string
}

interface AuthContextData {
  login: (loginInput: LoginInput) => Promise<void>
  registerUser: (registerInput: RegisterUserInput) => Promise<void>
  signOut: () => void
  user: User | null
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const { '@MEGASONHO:user': stringifiedUser } = parseCookies()

    if (stringifiedUser) {
      if (!user) return
      setUser(JSON.parse(stringifiedUser))
      api.defaults.headers.Authorization = `Bearer ${user.access_token}`
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
    const { uuid, name, email, access_token } = response.data
    setCookie(
      undefined,
      '@MEGASONHO:user',
      JSON.stringify({ uuid, name, email, access_token }),
      {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
        sameSite: 'Lax'
      }
    )
    api.defaults.headers.Authorization = `Bearer ${access_token as string}`
    setUser({ uuid, name, email, access_token })
  }

  async function registerUser(
    registerUserInput: RegisterUserInput
  ): Promise<void> {
    const response = await api.post('/users/create', registerUserInput)

    setCookie(undefined, '@MEGASONHO:user', JSON.stringify(response.data), {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
      sameSite: 'Lax'
    })

    setUser({ ...response.data })
  }

  return (
    <AuthContext.Provider value={{ registerUser, login, signOut, user }}>
      {children}
    </AuthContext.Provider>
  )
}
