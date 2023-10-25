import { AuthContext } from '@/shared/context/AuthContext'
import api from '@/shared/services/api'
import { intlFormatDistance } from 'date-fns'

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

interface Guest {
  name: string
  time: string
}

interface GuestsContextData {
  totalGuests: number
  isLoading: boolean
  guests: Guest[]
}

interface GuestsProviderProps {
  children: ReactNode
}

export const GuestsContext = createContext({} as GuestsContextData)

export function GuestsProvider({ children }: GuestsProviderProps) {
  const { user } = useContext(AuthContext)
  const [guests, setGuests] = useState([])
  const [totalGuests, setTotalGuests] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getMyGuests() {
      if (user) {
        const response = await api.get(`/users/my-guests?size=6`)

        response.data.items.sort((a: any, b: any) => {
          return (
            new Date(`${b.created_at as string}Z`).getTime() -
            new Date(`${a.created_at as string}Z`).getTime()
          )
        })

        setTotalGuests(response.data.total)
        const formatedGuests = response.data.items.map((item: any) => {
          return {
            name: item.name,
            time: intlFormatDistance(
              new Date(`${item.created_at as string}Z`),
              new Date(),
              {
                locale: 'pt-br'
              }
            )
          }
        })
        setGuests(formatedGuests)
        setIsLoading(false)
      }
    }

    getMyGuests()
  }, [user])

  return (
    <GuestsContext.Provider value={{ totalGuests, isLoading, guests }}>
      {children}
    </GuestsContext.Provider>
  )
}
