import { Button } from '@/shared/components/Button/Button'
import * as S from './PopUpStyles'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { AuthContext } from '@/shared/context/AuthContext'

interface PopUpProps {
  title: string
  description: string
  buttonText: string
}

export function PopUp({ buttonText, description, title }: PopUpProps) {
  const { user } = useContext(AuthContext)
  const router = useRouter()

  return (
    <S.Container>
      <S.InfoBox>
        <h1>{title}</h1>

        <p>
          <span>{user?.name.split(' ')[0]}</span> {description}
        </p>
        <Button
          onClick={async () =>
            await router.push('/dashboard/profile/phone-validation')
          }
        >
          <span>{buttonText}</span>
        </Button>
      </S.InfoBox>
      <Image
        src={'/images/mickey-head.png'}
        alt="Foto Cabeça do Mickey"
        width={56}
        height={56}
      />
    </S.Container>
  )
}
