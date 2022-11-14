import { createContext, ReactNode, useEffect, useState } from 'react'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import Router from 'next/router'
import api from '@/shared/services/api'

export interface User {
  uuid: string
  name: string
  phone?: string
  email: string
  access_token: string
  document?: string
  code_reference: string
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
    const { uuid, name, email, access_token, code_reference } = response.data
    setCookie(
      undefined,
      '@MEGASONHO:user',
      JSON.stringify({ uuid, name, email, access_token, code_reference }),
      {
        maxAge: 60 * 60 * 2, // 2 hoours
        path: '/',
        sameSite: 'Lax'
      }
    )

    api.defaults.headers.Authorization = `Bearer ${access_token as string}`
    setUser({ uuid, name, email, access_token, code_reference })
  }

  async function registerUser(
    registerUserInput: RegisterUserInput
  ): Promise<void> {
    const response = await api.post('/users/create', registerUserInput)

    setCookie(undefined, '@MEGASONHO:user', JSON.stringify(response.data), {
      maxAge: 60 * 10, // 10 minutes
      path: '/',
      sameSite: 'Lax'
    })
    api.defaults.headers.Authorization = `Bearer ${
      response.data.access_token as string
    }`
    console.log(response.data)

    setUser({ ...response.data })
  }

  return (
    <AuthContext.Provider value={{ registerUser, login, signOut, user }}>
      {children}
    </AuthContext.Provider>
  )
}
