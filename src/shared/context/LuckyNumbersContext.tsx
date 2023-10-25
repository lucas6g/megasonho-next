import { AuthContext } from '@/shared/context/AuthContext'
import api from '@/shared/services/api'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

interface LuckyNumbersContextData {
  numbersTotalQuantity: number
  isLoading: boolean
}

export const LuckyNumbersContext = createContext({} as LuckyNumbersContextData)

interface LuckyNumbersProviderProps {
  children: ReactNode
}
export function LuckyNumbersProvider({ children }: LuckyNumbersProviderProps) {
  const { user } = useContext(AuthContext)
  const [numbersTotalQuantity, setNumbersTotalQuantity] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getMyLuckNumbers() {
      if (user) {
        const response = await api.get(`/lucky-numbers/my-numbers/`)
        setNumbersTotalQuantity(response.data.total)
        setIsLoading(false)
      }
    }

    getMyLuckNumbers()
  }, [user])

  return (
    <LuckyNumbersContext.Provider value={{ numbersTotalQuantity, isLoading }}>
      {children}
    </LuckyNumbersContext.Provider>
  )
}
