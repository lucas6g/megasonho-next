import { AuthContext } from '@/shared/context/AuthContext'
import { useContext } from 'react'
import { Container, InitialLetter, MyPanellButton } from './HeaderPainelStyles'

export function HeaderPainel() {
  const { user } = useContext(AuthContext)

  return (
    <Container>
      <div>
        <InitialLetter>
          <strong>{user?.name[0]}</strong>
        </InitialLetter>
        <MyPanellButton href={'/dashboard'}>Meu painel</MyPanellButton>
      </div>
    </Container>
  )
}
