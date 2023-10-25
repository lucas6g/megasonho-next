import { HeroSectionButton } from '@/modules/home/components/HeroSectionButton/HeroSectionButton'
import { AuthContext } from '@/shared/context/AuthContext'
import FutureImage from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import * as S from './HeaderStyles'
export function Header() {
  const router = useRouter()
  const { user } = useContext(AuthContext)

  return (
    <S.Header>
      <Link className="logo" href="/">
        <FutureImage
          src={'/icons/logo.svg'}
          alt="Logo da MEGASONHO"
          width={345}
          height={50}
        />
      </Link>

      <div>
        <a
          href="https://api.whatsapp.com/send?1=pt_br&phone=5511973796061&text=Ola%20MEGASONHO!"
          target="_blank"
          rel="noreferrer"
        >
          <FutureImage
            src={'/icons/whatsapp.svg'}
            alt="Icone Do Whatsapp"
            width={32}
            height={32}
          />
        </a>
        <a
          href="https://www.instagram.com/megasonho.com.br/"
          target="_blank"
          rel="noreferrer"
        >
          <FutureImage
            src={'/icons/instagran.svg'}
            alt="Icone Do Instagran"
            width={32}
            height={32}
          />
        </a>
        <HeroSectionButton
          onClick={() => {
            router.push(user ? '/dashboard' : '/login')
          }}
          text={user ? 'Painel' : 'Login'}
        />
      </div>
    </S.Header>
  )
}
