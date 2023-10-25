import { createContext, ReactNode, useState } from 'react'

interface OfferContextData {
  hasOffer: boolean
  removeOffer: () => void
}

interface OfferProviderProps {
  children: ReactNode
}

export const OfferContext = createContext({} as OfferContextData)

export function OfferProvider({ children }: OfferProviderProps) {
  const [hasOffer, setHasOffer] = useState(false)

  function removeOffer() {
    setHasOffer(false)
  }

  return (
    <OfferContext.Provider value={{ removeOffer, hasOffer }}>
      {children}
    </OfferContext.Provider>
  )
}
