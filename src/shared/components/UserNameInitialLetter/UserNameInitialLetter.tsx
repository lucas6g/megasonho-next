import { AuthContext } from '@/shared/context/AuthContext'
import { useContext } from 'react'
import { InitialLetter } from './UserNameInitialLetterStyles'

interface UserNameInitialLetterProps {
  className?: string
}

export function UserNameInitialLetter(props: UserNameInitialLetterProps) {
  const { user } = useContext(AuthContext)
  return (
    <InitialLetter className={props.className}>
      <strong>{user?.name[0].toUpperCase() ?? 'L'}</strong>
    </InitialLetter>
  )
}
