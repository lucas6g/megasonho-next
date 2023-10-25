import { Avatar } from '@/shared/components/Avatar/Avatar'
import { Container, MyPanellButton } from './HeaderPainelStyles'

export function HeaderPainel() {
  return (
    <Container>
      <div>
        <Avatar className="avatar" allowEdit={false} imgUrl={''} />
        <MyPanellButton href={'/dashboard'}>Meu painel</MyPanellButton>
      </div>
    </Container>
  )
}
