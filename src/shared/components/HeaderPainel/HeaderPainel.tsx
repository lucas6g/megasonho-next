import {
  Container,
  InitialLetter,
  MyPanellButton,
  CloseButton
} from './HeaderPainelStyles'
import Image from 'next/image'

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
        <MyPanellButton>Meu painel</MyPanellButton>
      </div>

      <CloseButton>
        <Image
          src={'/icons/close.svg'}
          alt="Icone de fechar"
          width={40}
          height={40}
        />
      </CloseButton>
    </Container>
  )
}
