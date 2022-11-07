import { Container, InitialLetter, MyPanellButton } from './HeaderPainelStyles'

interface HeaderPainelProps {
  nameInitialLetter: string
}

export function HeaderPainel({ nameInitialLetter }: HeaderPainelProps) {
  return (
    <Container>
      <div>
        <InitialLetter>
          <strong>{nameInitialLetter}</strong>
        </InitialLetter>
        <MyPanellButton type="button">Meu painel</MyPanellButton>
      </div>
    </Container>
  )
}
